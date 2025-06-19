
import React, { useState } from 'react';
import { Palette, Sparkles, Copy, Download, Code, Book, Grid, Type, Zap } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import ColorTokens from '@/components/design-system/ColorTokens';
import TypographyScale from '@/components/design-system/TypographyScale';
import ComponentLibrary from '@/components/design-system/ComponentLibrary';
import GridSystem from '@/components/design-system/GridSystem';
import ShadowSystem from '@/components/design-system/ShadowSystem';
import IconLibrary from '@/components/design-system/IconLibrary';

const Index = () => {
  const [activeSection, setActiveSection] = useState('colors');

  const navigationItems = [
    { id: 'colors', label: 'Cores & Tokens', icon: Palette },
    { id: 'typography', label: 'Tipografia', icon: Type },
    { id: 'components', label: 'Componentes', icon: Grid },
    { id: 'shadows', label: 'Sombras', icon: Sparkles },
    { id: 'icons', label: 'Ícones', icon: Zap },
    { id: 'grid', label: 'Grid System', icon: Book }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'colors':
        return <ColorTokens />;
      case 'typography':
        return <TypographyScale />;
      case 'components':
        return <ComponentLibrary />;
      case 'shadows':
        return <ShadowSystem />;
      case 'icons':
        return <IconLibrary />;
      case 'grid':
        return <GridSystem />;
      default:
        return <ColorTokens />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-display-lg font-bold text-gradient mb-4">
            Design System
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Biblioteca completa de componentes, tokens e diretrizes para criar interfaces consistentes e bonitas.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-64 lg:flex-shrink-0">
            <nav className="sticky top-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 shadow-elevation-2 border border-neutral-200/50">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                        activeSection === item.id
                          ? 'bg-brand-500 text-white shadow-brand'
                          : 'text-neutral-700 hover:bg-neutral-50 hover:text-brand-600'
                      }`}
                    >
                      <IconComponent 
                        size={18} 
                        className={`transition-transform duration-200 ${
                          activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'
                        }`}
                      />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="animate-fade-in">
              {renderActiveSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
