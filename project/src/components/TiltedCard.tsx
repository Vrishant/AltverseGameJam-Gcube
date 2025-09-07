import React, { useRef } from 'react';
import { Linkedin } from 'lucide-react';

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

interface TiltedCardProps {
  member: Member;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const TiltedCard: React.FC<TiltedCardProps> = ({ member }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const rotateX = clamp((event.clientY - cardCenterY) / 12, -10, 10);
    const rotateY = clamp((cardCenterX - event.clientX) / 12, -10, 10);

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="tilted-card-container">
      <div
        ref={cardRef}
        className="tilted-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="tilted-card-image-container">
          <img src={member.image} alt={member.name} className="tilted-card-image" />
          <div className="tilted-card-overlay" />
        </div>

        <div className="tilted-card-body">
          <h5 className="tilted-card-name">{member.name}</h5>
          <p className="tilted-card-role">{member.role}</p>
          <div className="tilted-card-linkedin-container">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn profile of ${member.name}`}
              className="tilted-card-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltedCard;


