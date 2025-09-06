import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Mock hooks for a standalone environment. In a real app, you'd use react-router-dom.
const useNavigate = () => (path: string | URL | null | undefined) => {
  // Remove console.log for production
  // console.log(`Navigating to: ${path}`);
  // In a real app, this would change the URL.
  // For this example, we'll just log it.
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate')); // Manually trigger a re-render
};

const useLocation = () => {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { pathname };
};


const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State to manage which dropdown is currently open
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hideTimeout = useRef<number | null>(null);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Force a re-render to update active section
      // This is a bit hacky but works for updating the current section highlight
      if (location.pathname === '/') {
        const currentState = { ...window.history.state };
        window.history.replaceState(currentState, '', window.location.href);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Updated navItems structure to match the project components
  const navItems = React.useMemo(() => [
    { name: 'Home', path: '/', sectionId: 'home' },
    { name: 'About', path: '/about' },
    { name: 'Rules', path: '/', sectionId: 'rules' },
    { name: 'Register', path: '/', sectionId: 'register' },
    { name: 'Proposal', path: '/', sectionId: 'proposal' },
    { name: 'Contact', path: '/', sectionId: 'contact' },
  ], []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate offset to account for header height
      const headerHeight = document.querySelector('header')?.clientHeight || 0;
      // Add a small buffer for visual comfort
      const buffer = 20;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ 
        top: elementPosition - headerHeight - buffer, 
        behavior: 'smooth' 
      });
      // Update active section immediately for better UX
      setActiveSection(sectionId);
    }
  };

  const handleNavClick = (path: string, sectionId?: string) => {
    setIsMenuOpen(false);
    setOpenDropdown(null);

    if (path === '/about') {
      // For About page, navigate to the separate route
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId) {
      // For sections on the main page, scroll to the section
      if (location.pathname !== '/') {
        // If we're not on the home page, navigate there first then scroll
        navigate('/');
        // Need to wait for navigation to complete before scrolling
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      } else {
        // Already on home page, just scroll to section
        scrollToSection(sectionId);
      }
    } else {
      // Default behavior for other links
      navigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Track the active section ID based on scroll position
  const [activeSection, setActiveSection] = useState<string | null>('home');
  
  // Update active section on scroll
  useEffect(() => {
    const handleScrollForActiveSection = () => {
      // Only track sections on home page
      if (location.pathname !== '/') {
        return;
      }
      
      // Get all section IDs from navItems
      const sectionIds = navItems
        .filter(item => item.sectionId)
        .map(item => item.sectionId as string);
      
      // Find which section is currently most visible
      let mostVisibleSection = null;
      let maxVisibility = 0;
      
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (!element) return;
        
        const rect = element.getBoundingClientRect();
        const headerHeight = document.querySelector('header')?.clientHeight || 0;
        const windowHeight = window.innerHeight;
        
        // Calculate how much of the section is visible in the viewport
        const visibleTop = Math.max(rect.top, headerHeight);
        const visibleBottom = Math.min(rect.bottom, windowHeight);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Special case for home section at the top
        if (id === 'home' && window.scrollY < 200) {
          setActiveSection('home');
          return;
        }
        
        // Track the most visible section
        if (visibleHeight > maxVisibility) {
          maxVisibility = visibleHeight;
          mostVisibleSection = id;
        }
      });
      
      // Update active section if we found one
      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };
    
    window.addEventListener('scroll', handleScrollForActiveSection);
    // Run once on mount to set initial active section
    handleScrollForActiveSection();
    
    return () => window.removeEventListener('scroll', handleScrollForActiveSection);
  }, [location.pathname, navItems]);
  
  const isCurrentPage = (path: string | undefined, sectionId?: string) => {
    if (!path) return false;
    
    // For the main page sections
    if (location.pathname === '/' && path === '/' && sectionId) {
      return sectionId === activeSection;
    }
    
    // For About page and other non-section links
    if (path === '/about' && location.pathname === '/about') {
      return true;
    }
    
  // No subItems in navItems anymore
    
    // Default case
    return false;
  };
  

  // Generic handlers for dropdowns
  const handleMouseEnter = (dropdownName: string) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setOpenDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <motion.header
      style={{ 
        opacity: headerOpacity,
        backdropFilter: `blur(${headerBlur.get()}px)`,
      }}
      className={`fixed top-0 left-0 right-0 md:left-1/2 md:transform md:-translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'w-full md:w-[90%]' : 'w-full md:w-[95%]'
      }`}
    >
      <div 
        className="glass neon-border tri-cut px-4 py-3 shadow-lg relative z-50 bg-gradient-to-r from-gunmetal/95 to-onyx/95 mt-3 font-azonix"
      >
        
        <div className="flex items-center justify-between">
          {/* Altverse logo and text */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-neon-mint/20 rounded-full tri-cut flex items-center justify-center border border-neon-mint/30 group-hover:bg-neon-mint/30 transition-all duration-300">
              <span className="text-neon-mint text-lg font-bold font-azonix neon-glow">A</span>
            </div>
            <div className="text-neon-mint font-azonix font-bold text-lg tracking-wider">
              ALTVERSE
              <div className="h-0.5 w-1/2 bg-gradient-to-r from-neon-mint to-teal-glow/50"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.path}
                onClick={() => handleNavClick(item.path!, item.sectionId)}
                className={`transition-colors relative px-4 py-2 font-medium font-inter ${
                  isCurrentPage(item.path, item.sectionId) 
                    ? 'text-neon-mint font-bold'
                    : 'text-soft-white/80 hover:text-neon-mint'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgb(51, 255, 180)",
                  transition: { duration: 0.2 } 
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {isCurrentPage(item.path) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-mint to-teal-glow"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${
              isMenuOpen 
                ? 'text-neon-mint bg-gunmetal border border-neon-mint/50' 
                : 'text-soft-white/90 hover:text-neon-mint'
            } tri-cut-sm absolute right-4 top-2`}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} className="neon-glow" /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <nav className="pt-4 pb-2 border-t border-neon-mint/30 mt-4">
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <motion.button
                    onClick={() => item.path && handleNavClick(item.path, item.sectionId)}
                    className={`block w-full text-left py-3 px-4 transition-colors text-lg font-inter ${
                      isCurrentPage(item.path, item.sectionId) 
                        ? 'text-neon-mint font-semibold'
                        : 'text-soft-white/80 hover:text-neon-mint'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    {item.name}
                  </motion.button>
                </React.Fragment>
              ))}
            </nav>
          </motion.div>
        )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

