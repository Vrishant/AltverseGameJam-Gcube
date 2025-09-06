import React from 'react';
// Data for club heads, team members, and GCube
const clubHeads = [
  {
    name: "Dhruv Jain",
    role: "Club Head",
    image: "/assets/Dhruv_Jain_Head.jpg",
    linkedin: "https://www.linkedin.com/in/d16r7v-17a8n/"
  },
  {
    name: "Vajra Dindakurthi",
    role: "Club Head",
    image: "/assets/Vajra_Club_Head.jpg",
    linkedin: "https://www.linkedin.com/in/vajra-dindakurthi-a276ba313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];

const teamMembers = [
  {
    name: "Varsha Nadig",
    role: "Design Head",
    image: "/assets/Varsha_Nadig_DESIGN.jpg",
    linkedin: "https://www.linkedin.com/in/varsha-nadig-a5b9492b3/"
  },
  {
    name: "Deepa Gadamsetty",
    role: "Event Management Head",
    image: "/assets/Deepa Gadamsetty_EVM.jpg",
    linkedin: "https://www.linkedin.com/in/deepa-gadamsetty/"
  },
  {
    name: "Godha Kanchi Mandya",
    role: "Event Management Head",
    image: "/assets/Godha Mandya_EVM.jpeg",
    linkedin: "https://www.linkedin.com/in/godha-mandya-7b1641298/"
  },
  {
    name: "Vrishant Bhalla",
    role: "Web Development Head",
    image: "/assets/VrishantBhalla_WebDevHead.jpeg",
    linkedin: "https://www.linkedin.com/in/vrishant-bhalla/"
  },
  {
    name: "Samiya Naaz",
    role: "Hospitality Head",
    image: "/assets/Samiya_Naaz_Hospitality_.jpg",
    linkedin: "https://www.linkedin.com/in/samiya-naaz-642147325/"
  },
  {
    name: "Harsha Kadapala",
    role: "Logistics Head",
    image: "/assets/Harsha_Vardhan_Reddy_Logs.jpg",
    linkedin: "https://www.linkedin.com/in/harsha-kadapala-5a5287320/"
  },
  {
    name: "Sanjit M A",
    role: "Logistics Head",
    image: "/assets/Sanjit_Logistics.jpg",
    linkedin: "https://www.linkedin.com/in/sanjit-ma/"
  },
  {
    name: "Hardik P Shigli",
    role: "Marketing Head",
    image: "/assets/Hardik P Shigli_Marketing.jpg",
    linkedin: "https://www.linkedin.com/in/hardik-p-shigli-21n24/"
  },
  {
    name: "Kartik Sharma",
    role: "Marketing Head",
    image: "https://via.placeholder.com/300x400/2a2e35/44d3d3?text=Kartik+Sharma",
    linkedin: "https://www.linkedin.com/in/kartik-sharma2509/"
  },
  {
    name: "Ayushree Kakati",
    role: "Multimedia-Social Media Head",
    image: "/assets/Ayushree K_Social Media.PNG",
    linkedin: "https://www.linkedin.com/in/ayushree-k-9811b1260/"
  },
  {
    name: "Harshini Grandhi",
    role: "Multimedia-Content Head",
    image: "/assets/Harshini_Grandhi_PR&Content(Content).jpg",
    linkedin: "https://www.linkedin.com/in/harshinigrandhi/"
  },
  {
    name: "Gagan Bharadwaj",
    role: "Multimedia-PR Head",
    image: "/assets/Gagan_bharadwaj multimedia head.jpg",
    linkedin: "https://www.linkedin.com/in/gagan-bharadwaj-356aa02b5/"
  },
  {
    name: "Harshith P",
    role: "Operations Head",
    image: "/assets/Harshith_P_Operations.heic",
    linkedin: "https://www.linkedin.com/in/harshith-p-5619ab1b5/"
  },
  {
    name: "Taha Hussain",
    role: "Operations Head",
    image: "/assets/Taha_Operations.jpg",
    linkedin: "https://www.linkedin.com/in/tahahussain1692502/"
  },
  {
    name: "Shashwat Jha",
    role: "Sponsorship",
    image: "/assets/Harshaa_Vardhana_Sponsorship.jpg",
    linkedin: "https://www.linkedin.com/in/shashwat-jha-7a726b296/"
  },
  {
    name: "Shreehas Adusumilli",
    role: "Video Editing",
    image: "/assets/Sreehas A_Video Editing.jpg",
    linkedin: "https://www.linkedin.com/in/sreehas-adusumilli/"
  }
];

const gcube = {
  name: "GCube",
  description: "GCube is the official game development club of PES University, fostering creativity and innovation in game design and development. The club organizes workshops, game jams, and collaborative projects to help students learn and grow in the gaming industry.",
  image: "public/assets/image.png",
  linkedin: "https://www.linkedin.com/company/gcube-pes-university/"
};
import { Users, Clock, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 pt-24 px-4 bg-gradient-to-b from-onyx to-gunmetal relative">
      {/* Triangulated divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-neon-mint/10 to-teal-glow/10" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">
            What is Altverse?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-soft-white/80 leading-relaxed font-inter">
              Altverse 2025 is a 24-hour on-campus state-level game jam hosted by PES University. 
              Students from across Karnataka will collaborate to design and build games from scratch. 
              The jam pushes creativity, teamwork, and innovation under time-bound conditions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gunmetal/50 tri-cut neon-border hover:bg-gunmetal/70 hover:scale-105 transition-all duration-300 group">
                <Clock className="w-8 h-8 mx-auto mb-3 text-neon-mint group-hover:text-teal-glow transition-colors duration-300" />
                <h3 className="font-bold text-soft-white mb-2 font-azonix">24 Hours</h3>
                <p className="text-sm text-soft-white/60 font-inter">Non-stop coding</p>
              </div>

              <div className="text-center p-6 bg-gunmetal/50 tri-cut neon-border hover:bg-gunmetal/70 hover:scale-105 transition-all duration-300 group">
                <Users className="w-8 h-8 mx-auto mb-3 text-teal-glow group-hover:text-neon-mint transition-colors duration-300" />
                <h3 className="font-bold text-soft-white mb-2 font-azonix">40-45 Teams</h3>
                <p className="text-sm text-soft-white/60 font-inter">3-5 members each</p>
              </div>

              <div className="text-center p-6 bg-gunmetal/50 tri-cut neon-border hover:bg-gunmetal/70 hover:scale-105 transition-all duration-300 group">
                <Trophy className="w-8 h-8 mx-auto mb-3 text-neon-mint group-hover:text-teal-glow transition-colors duration-300" />
                <h3 className="font-bold text-soft-white mb-2 font-azonix">State Level</h3>
                <p className="text-sm text-soft-white/60 font-inter">Karnataka-wide</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-neon-mint/10 to-teal-glow/10 tri-cut p-8 neon-border relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/5 to-teal-glow/5 blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-soft-white mb-4 font-azonix">
                  Experience the Future
                </h3>
                <p className="text-soft-white/80 mb-6 font-inter">
                  Join the ultimate gaming experience where creativity meets technology. 
                  Build the next generation of games with fellow developers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Unity", "Unreal", "Godot", "JavaScript", "C#", "Python", "Blender", "Maya"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gunmetal/50 text-neon-mint tri-cut-sm text-sm border border-neon-mint/30 font-inter">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GCube Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">About GCube</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm mb-6"></div>
          <div className="flex flex-col items-center justify-center">
            <div className="hover:scale-105 transition-transform duration-300">
              <img src={gcube.image} alt="GCube" className="w-40 h-52 object-cover rounded-xl neon-border mb-4" />
            </div>
            <p className="text-lg text-soft-white/80 leading-relaxed font-inter max-w-2xl mx-auto mb-4">
              {gcube.description}
            </p>
            <a href={gcube.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-neon-mint text-gunmetal font-bold rounded tri-cut-sm hover:bg-teal-glow transition-colors duration-300">
              Visit GCube on LinkedIn
            </a>
          </div>
        </div>

        {/* Club Heads Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">Club Heads</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
            {clubHeads.map((head) => (
              <div key={head.name} className="w-72 h-96 hover:scale-105 transition-transform duration-300 bg-gunmetal/70 p-0 rounded-2xl neon-border flex flex-col items-center justify-end shadow-xl">
                <img src={head.image} alt={head.name} className="w-full h-2/3 object-cover rounded-t-2xl mb-0" style={{objectPosition:'center'}} />
                <div className="w-full px-8 pb-8 pt-6 flex flex-col items-center">
                  <h3 className="font-bold text-neon-mint font-azonix mb-1 drop-shadow-lg">{head.name}</h3>
                  <p className="text-xs text-teal-glow font-azonix mb-2 drop-shadow">{head.role}</p>
                  <a href={head.linkedin} target="_blank" rel="noopener noreferrer" className="text-neon-mint hover:text-teal-glow font-bold">LinkedIn</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">Team Members</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member) => (
              <div key={member.name} className="w-72 h-96 hover:scale-105 transition-transform duration-300 bg-gunmetal/70 p-0 rounded-2xl neon-border flex flex-col items-center justify-end shadow-xl">
                <img src={member.image} alt={member.name} className="w-full h-2/3 object-cover rounded-t-2xl mb-0" style={{objectPosition:'center'}} />
                <div className="w-full px-8 pb-8 pt-6 flex flex-col items-center">
                  <h3 className="font-bold text-neon-mint font-azonix mb-1 drop-shadow-lg">{member.name}</h3>
                  <p className="text-xs text-teal-glow font-azonix mb-2 drop-shadow">{member.role}</p>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-neon-mint hover:text-teal-glow font-bold">LinkedIn</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;