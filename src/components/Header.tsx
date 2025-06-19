
import React from 'react';
import { Sparkles, Github, Download } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-neutral-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-800 rounded-xl flex items-center justify-center shadow-lg shadow-pink-300/25 animate-pulse-glow">
                <span className="text-white font-bold text-lg animate-float">B</span>
              </div>
              <Sparkles 
                size={16} 
                className="absolute -top-1 -right-1 text-pink-400 animate-pulse" 
              />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-brand-700 via-brand-600 to-brand-800 bg-clip-text text-transparent">Bê UX Creative</h1>
              <p className="text-xs text-neutral-500">Design System Library</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-neutral-700 hover:text-brand-700 hover:bg-neutral-50 rounded-lg transition-all duration-200">
              <Github size={16} />
              <span>View on GitHub</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-700 via-brand-600 to-brand-800 text-white rounded-lg font-medium shadow-brand hover:shadow-glow transition-all duration-200 hover:scale-105">
              <Download size={16} />
              <span>Export to Figma</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
