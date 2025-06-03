
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t border-white/10 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-glitch text-lg text-cyberpunk-green mb-4">N1GHTW1RE</h3>
            <p className="font-mono text-sm text-white/80">
              Fighting against surveillance capitalism, technobros, and fascism.
            </p>
            <div className="flex items-center space-x-2 mt-3">
              <Mail size={16} className="text-cyberpunk-green" />
              <a href="mailto:n1ghtw1re@proton.me" className="font-mono text-sm text-white/80 hover:text-cyberpunk-green transition-colors">
                n1ghtw1re@proton.me
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-glitch text-lg text-cyberpunk-green mb-4">CONNECT</h3>
            <div className="space-y-2 font-mono text-sm">
              <p>
                <a href="https://github.com/n1ghtw1re" className="text-white/80 hover:text-cyberpunk-green transition-colors">
                  GitHub
                </a>
              </p>
              <p>
                <a href="https://bsky.app/profile/n1ghtw1re.neocities.org" className="text-white/80 hover:text-cyberpunk-green transition-colors">
                  Bluesky
                </a>
              </p>
              <p>
                <a href="https://defcon.social/@n1ghtw1re" className="text-white/80 hover:text-cyberpunk-green transition-colors">
                  Mastodon
                </a>
              </p>
              <p>
                <a href="https://n1ghtw1re.neocities.org" className="text-white/80 hover:text-cyberpunk-green transition-colors">
                  Neocities
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-glitch text-lg text-cyberpunk-green mb-4">LEGAL</h3>
            <div className="space-y-2 font-mono text-sm">
              <p>
                <Link to="/privacy" className="text-white/80 hover:text-cyberpunk-green transition-colors">
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link to="/terms" className="text-white/80 hover:text-cyberpunk-green transition-colors">
                  Terms of Service
                </Link>
              </p>
              <p>
                <Link to="/cookies" className="text-white/80 hover:text-cyberpunk-green transition-colors">
                  Cookie Policy
                </Link>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-glitch text-lg text-cyberpunk-green mb-4">ETHICS</h3>
            <p className="font-mono text-sm text-white/80">
              This site respects your privacy. No trackers. No surveillance. Your data belongs to you.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="font-mono text-xs text-white/60">
            &copy; {currentYear} N1GHTW1RE. All rights freely given.
          </p>
          <p className="font-mono text-xs text-white/60 mt-2 md:mt-0">
            Built by N1GHTW1RE Studios
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
