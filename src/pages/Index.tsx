
import React, { useState } from 'react';
import { Palette, Sparkles, Grid, Type, Zap, Book, Code, FileText, Menu, X } from 'lucide-react';
import Header from '@/components/Header';
import ColorTokens from '@/components/design-system/ColorTokens';
import TypographyScale from '@/components/design-system/TypographyScale';
import ComponentLibrary from '@/components/design-system/ComponentLibrary';
import GridSystem from '@/components/design-system/GridSystem';
import ShadowSystem from '@/components/design-system/ShadowSystem';
import IconLibrary from '@/components/design-system/IconLibrary';
import NavigationSystem from '@/components/design-system/NavigationSystem';
import FormSystem from '@/components/design-system/FormSystem';

const Index = () => {
  const [activeSection, setActiveSection] = useState('colors');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const navigationItems = [
    { id: 'colors', label: 'Cores & Tokens', icon: Palette },
    { id: 'typography', label: 'Tipografia', icon: Type },
    { id: 'components', label: 'Componentes', icon: Grid },
    { id: 'shadows', label: 'Sombras', icon: Sparkles },
    { id: 'icons', label: 'Ícones', icon: Zap },
    { id: 'grid', label: 'Grid System', icon: Book },
    { id: 'navigation', label: 'Navegação', icon: Code },
    { id: 'forms', label: 'Formulários', icon: FileText }
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
      case 'navigation':
        return <NavigationSystem />;
      case 'forms':
        return <FormSystem />;
      default:
        return <ColorTokens />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 bg-slate-900/50 border-r border-slate-700/50 min-h-[calc(100vh-80px)]`}>
          <div className="sticky top-0 p-4">
            {/* Sidebar Toggle */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="mb-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              {sidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
            </button>

            <nav>
              <div className="space-y-2">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 group ${
                        activeSection === item.id
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                      title={sidebarCollapsed ? item.label : ''}
                    >
                      <IconComponent 
                        size={18} 
                        className={`transition-transform duration-200 ${
                          activeSection === item.id ? 'scale-110' : 'group-hover:scale-105'
                        } flex-shrink-0`}
                      />
                      {!sidebarCollapsed && (
                        <span className="font-medium truncate">{item.label}</span>
                      )}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0 p-6">
          <div className="max-w-7xl mx-auto">
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
