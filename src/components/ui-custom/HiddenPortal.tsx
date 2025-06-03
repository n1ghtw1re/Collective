
import React, { useState } from 'react';

const HiddenPortal: React.FC = () => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  
  const triggerGlitch = () => {
    setIsGlitching(true);
    setTimeout(() => {
      setAccessDenied(true);
      setTimeout(() => {
        setIsGlitching(false);
        setTimeout(() => {
          setAccessDenied(false);
        }, 3000);
      }, 1000);
    }, 1000);
  };
  
  return (
    <div className="hidden-portal relative border border-white/20 bg-black/80 p-6 rounded-md overflow-hidden">
      <div className={`${isGlitching ? 'animate-glitch' : ''}`}>
        <h3 className="font-pixel text-sm text-cyberpunk-green mb-2">RESTRICTED SECTOR</h3>
        <div className="font-mono text-xs text-white/90 mb-4">
          {accessDenied ? (
            <p className="text-cyberpunk-red">ACCESS DENIED. SECURITY PROTOCOL ACTIVATED.</p>
          ) : (
            <p>Phase 2 initialization requires proper authorization.</p>
          )}
        </div>
        <button
          className="bg-transparent border border-cyberpunk-green px-4 py-2 text-xs font-mono text-cyberpunk-green hover:bg-cyberpunk-green/20 transition-colors"
          onClick={triggerGlitch}
        >
          {accessDenied ? "??? ERROR ???" : "ATTEMPT ACCESS"}
        </button>
      </div>
    </div>
  );
};

export default HiddenPortal;
