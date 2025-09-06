import React from 'react';
import { Mail, MessageCircle, Instagram, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "gcube@pes.edu",
      link: "mailto:gcube@pes.edu"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Discord",
      description: "Join our server",
      link: "#"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      description: "@gcube_pesu",
      link: "https://www.instagram.com/g_cube.pesu"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-neon-mint">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
        </svg>
      ),
      title: "LinkedIn",
      description: "G Cube PESU",
      link: "https://www.linkedin.com/company/g-cube-pesu/posts/?feedView=all"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-onyx to-graphite relative">
      {/* Triangulated divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-neon-mint/10 to-teal-glow/10" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-mint to-teal-glow bg-clip-text text-transparent font-azonix">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-mint to-teal-glow mx-auto tri-cut-sm"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-neon-mint/8 to-teal-glow/8 tri-cut p-8 neon-border">
              <h3 className="text-2xl font-bold text-soft-white mb-6 font-azonix">
                Contact Information
              </h3>
              <p className="text-soft-white/80 mb-6 leading-relaxed font-inter">
                For queries, contact G Cube – The Game Development Club, PES University. 
                We're here to help with any questions about Altverse 2025.
              </p>
              
              <div className="flex items-start space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-neon-mint mt-1" />
                <div>
                  <h4 className="font-bold text-soft-white mb-1 font-inter">Location</h4>
                  <p className="text-soft-white/60 font-inter">PESU52, RR Campus<br />PES University, Bangalore</p>
                </div>
              </div>

              <div className="bg-gunmetal/50 tri-cut p-6 neon-border">
                <h4 className="text-lg font-bold text-teal-glow mb-3 font-orbitron">
                  Quick Response
                </h4>
                <p className="text-soft-white/80 text-sm font-inter">
                  We typically respond to queries within 24 hours. For urgent matters, 
                  reach out through multiple channels for faster assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-soft-white mb-6 font-azonix">
              Connect With Us
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="group block bg-gunmetal/50 tri-cut p-6 neon-border hover:bg-gunmetal/70 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-mint/10 to-teal-glow/10 tri-cut opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="text-neon-mint mb-3 group-hover:text-teal-glow transition-colors duration-300">
                      {method.icon}
                    </div>
                    <h4 className="font-bold text-soft-white mb-2 font-azonix">
                      {method.title}
                    </h4>
                    <p className="text-soft-white/60 text-sm font-inter">
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-neon-mint/8 to-teal-glow/8 tri-cut p-8 neon-border mt-8">
                <h4 className="text-xl font-bold text-neon-mint mb-4 font-azonix">
                Stay Updated
              </h4>
              <p className="text-soft-white/80 mb-6 font-inter">
                Follow us on social media and join our Discord community for the latest updates, 
                announcements, and behind-the-scenes content about Altverse 2025.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-neon-mint/20 tri-cut-sm flex items-center justify-center neon-border hover:bg-neon-mint/30 transition-colors duration-300">
                  <Github className="w-5 h-5 text-neon-mint" />
                </a>
                <a href="https://www.linkedin.com/company/g-cube-pesu/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-teal-glow/20 tri-cut-sm flex items-center justify-center neon-border hover:bg-teal-glow/30 transition-colors duration-300">
                  {/* LinkedIn SVG icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-teal-glow">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/g_cube.pesu" className="w-10 h-10 bg-neon-mint/20 tri-cut-sm flex items-center justify-center neon-border hover:bg-neon-mint/30 transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-neon-mint" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;