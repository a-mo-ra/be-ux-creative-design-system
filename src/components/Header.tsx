
import React from 'react';
import { Sparkles, FileText } from 'lucide-react';

const Header = () => {
  const handleGuidelinesClick = () => {
    // Abrir diretrizes em nova aba ou modal
    window.open('/diretrizes-design.pdf', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <Sparkles 
                size={16} 
                className="absolute -top-1 -right-1 text-indigo-400 animate-pulse" 
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Bê UX Creative</h1>
              <p className="text-xs text-slate-400">Design System Library</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleGuidelinesClick}
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white rounded-lg font-medium shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:scale-105"
            >
              <FileText size={16} />
              <span>Diretrizes Design</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
