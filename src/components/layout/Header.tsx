
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="relative z-50 w-full border-b border-white/10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="font-glitch text-2xl text-cyberpunk-green glitch-effect" data-text="N1GHTW1RE">
          N1GHTW1RE
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-cyberpunk-green transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/about"
            className={`font-mono hover:text-cyberpunk-green transition-colors ${isActive('/about') ? 'text-cyberpunk-green' : 'text-white'}`}
          >
            ABOUT
          </Link>
          <Link 
            to="/collective"
            className={`font-mono hover:text-cyberpunk-green transition-colors ${isActive('/collective') ? 'text-cyberpunk-green' : 'text-white'}`}
          >
            COLLECTIVE
          </Link>
          <Link 
            to="/tools"
            className={`font-mono hover:text-cyberpunk-green transition-colors ${isActive('/tools') ? 'text-cyberpunk-green' : 'text-white'}`}
          >
            TOOLS
          </Link>
          <Link 
            to="/blog"
            className={`font-mono hover:text-cyberpunk-green transition-colors ${isActive('/blog') ? 'text-cyberpunk-green' : 'text-white'}`}
          >
            BLOG
          </Link>
          <Link 
            to="/manifesto"
            className={`font-mono hover:text-cyberpunk-green transition-colors ${isActive('/manifesto') ? 'text-cyberpunk-green' : 'text-white'}`}
          >
            MANIFESTO
          </Link>
        </nav>
      </div>
      
      {/* Mobile navigation overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center space-y-8">
          <button 
            onClick={closeMenu}
            className="absolute top-4 right-4 text-white hover:text-cyberpunk-green transition-colors"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <Link 
            to="/about"
            className={`font-glitch text-2xl hover:text-cyberpunk-green transition-colors ${isActive('/about') ? 'text-cyberpunk-green' : 'text-white'}`}
            onClick={closeMenu}
          >
            ABOUT
          </Link>
          <Link 
            to="/collective"
            className={`font-glitch text-2xl hover:text-cyberpunk-green transition-colors ${isActive('/collective') ? 'text-cyberpunk-green' : 'text-white'}`}
            onClick={closeMenu}
          >
            COLLECTIVE
          </Link>
          <Link 
            to="/tools"
            className={`font-glitch text-2xl hover:text-cyberpunk-green transition-colors ${isActive('/tools') ? 'text-cyberpunk-green' : 'text-white'}`}
            onClick={closeMenu}
          >
            TOOLS
          </Link>
          <Link 
            to="/blog"
            className={`font-glitch text-2xl hover:text-cyberpunk-green transition-colors ${isActive('/blog') ? 'text-cyberpunk-green' : 'text-white'}`}
            onClick={closeMenu}
          >
            BLOG
          </Link>
          <Link 
            to="/manifesto"
            className={`font-glitch text-2xl hover:text-cyberpunk-green transition-colors ${isActive('/manifesto') ? 'text-cyberpunk-green' : 'text-white'}`}
            onClick={closeMenu}
          >
            MANIFESTO
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
