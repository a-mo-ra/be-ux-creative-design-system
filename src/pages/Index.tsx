
import React, { useState } from 'react';
import { Palette, Sparkles, Grid, Type, Zap, Book, Code, FileText, ChevronRight, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import ColorTokens from '@/components/design-system/ColorTokens';
import TypographyScale from '@/components/design-system/TypographyScale';
import ComponentLibrary from '@/components/design-system/ComponentLibrary';
import GridSystem from '@/components/design-system/GridSystem';
import ShadowSystem from '@/components/design-system/ShadowSystem';
import IconLibrary from '@/components/design-system/IconLibrary';
import NavigationSystem from '@/components/design-system/NavigationSystem';
import FormSystem from '@/components/design-system/FormSystem';
import DesignGuidelines from '@/components/design-system/DesignGuidelines';

const Index = () => {
  const [activeSection, setActiveSection] = useState('colors');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showGuidelines, setShowGuidelines] = useState(false);

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
    if (showGuidelines) {
      return <DesignGuidelines />;
    }

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

  const handleGuidelinesClick = () => {
    setShowGuidelines(!showGuidelines);
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowGuidelines(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onGuidelinesClick={handleGuidelinesClick} />
      
      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} transition-all duration-300 bg-white border-r border-gray-200 min-h-[calc(100vh-80px)] relative`}>
          <div className="sticky top-0 p-4">
            <nav>
              <div className="space-y-1">
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  const isActive = activeSection === item.id && !showGuidelines;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSectionClick(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 group ${
                        isActive
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      } ${sidebarCollapsed ? 'justify-center' : ''}`}
                      title={sidebarCollapsed ? item.label : ''}
                    >
                      <IconComponent 
                        size={18} 
                        className={`transition-transform duration-200 ${
                          isActive ? 'scale-110' : 'group-hover:scale-105'
                        } flex-shrink-0 ${sidebarCollapsed ? 'mx-auto' : ''}`}
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

          {/* Sidebar Toggle Button - Fixed position */}
          <div className="fixed top-1/2 transform -translate-y-1/2 z-40" style={{ left: sidebarCollapsed ? '48px' : '240px' }}>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-purple-700"
              aria-label={sidebarCollapsed ? 'Expandir menu' : 'Recolher menu'}
            >
              {sidebarCollapsed ? (
                <ChevronRight size={16} />
              ) : (
                <ChevronLeft size={16} />
              )}
            </button>
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
