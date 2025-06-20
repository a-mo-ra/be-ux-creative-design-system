
import React from 'react';
import { Sparkles, FileText } from 'lucide-react';

const Header = () => {
  const handleGuidelinesClick = () => {
    // Abrir diretrizes em nova aba ou modal
    window.open('/diretrizes-design.pdf', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/25">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <Sparkles 
                size={16} 
                className="absolute -top-1 -right-1 text-purple-400 animate-pulse" 
              />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-purple-700">Bê UX Creative</h1>
              <p className="text-xs text-gray-500">Design System Library</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleGuidelinesClick}
              className="flex items-center gap-2 px-4 py-2 bg-purple-700 text-white rounded-lg font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105 text-sm"
            >
              <FileText size={14} />
              <span>Diretrizes UX Creative</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
