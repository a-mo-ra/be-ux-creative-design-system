
import React, { useState } from 'react';
import { Navigation, Copy, Check, Smartphone, Tablet, Monitor, Menu, X, Home, User, Search, Bell, Settings } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const NavigationSystem = () => {
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyToClipboard = async (code: string, componentName: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedComponent(componentName);
      toast({
        title: "Copiado!",
        description: `Código do ${componentName} copiado para área de transferência.`,
      });
      setTimeout(() => setCopiedComponent(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o código.",
        variant: "destructive"
      });
    }
  };

  const navigationComponents = [
    {
      name: 'Desktop Header',
      type: 'desktop',
      usage: 'Site responsivo, aplicações web',
      behavior: 'Fixo no topo, links horizontais',
      constraints: 'Fill container, height: 64-80px',
      component: (
        <nav className="bg-white border-b border-neutral-200 px-6 py-4 w-full">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-8">
              <div className="font-bold text-xl text-brand-700">Logo</div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-neutral-700 hover:text-brand-600">Home</a>
                <a href="#" className="text-neutral-700 hover:text-brand-600">Produtos</a>
                <a href="#" className="text-neutral-700 hover:text-brand-600">Sobre</a>
                <a href="#" className="text-neutral-700 hover:text-brand-600">Contato</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-brand-600 hover:bg-brand-50 rounded-lg">Login</button>
              <button className="px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">Cadastrar</button>
            </div>
          </div>
        </nav>
      ),
      figmaSpecs: {
        width: 'Fill container',
        height: '72px',
        padding: '16px 24px',
        constraints: 'Left & Right',
        autoLayout: 'Horizontal, Space between'
      },
      code: `<nav className="bg-white border-b border-neutral-200 px-6 py-4">
  <div className="flex items-center justify-between max-w-6xl mx-auto">
    <div className="flex items-center gap-8">
      <div className="font-bold text-xl text-brand-700">Logo</div>
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="text-neutral-700 hover:text-brand-600">Home</a>
        <a href="#" className="text-neutral-700 hover:text-brand-600">Produtos</a>
      </div>
    </div>
    <div className="flex items-center gap-4">
      <button className="px-4 py-2 text-brand-600">Login</button>
      <button className="px-4 py-2 bg-brand-500 text-white rounded-lg">Cadastrar</button>
    </div>
  </div>
</nav>`
    },
    {
      name: 'Mobile Header',
      type: 'mobile',
      usage: 'Apps móveis, sites mobile-first',
      behavior: 'Hamburger menu, overlay ou slide',
      constraints: 'Fill width, height: 56-64px',
      component: (
        <div className="w-full">
          <nav className="bg-white border-b border-neutral-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-neutral-700"
              >
                <Menu size={24} />
              </button>
              <div className="font-bold text-lg text-brand-700">Logo</div>
              <button className="p-2 text-neutral-700">
                <Search size={20} />
              </button>
            </div>
          </nav>
          
          {mobileMenuOpen && (
            <div className="bg-white border-b border-neutral-200 px-4 py-4">
              <div className="space-y-3">
                <a href="#" className="block py-2 text-neutral-700">Home</a>
                <a href="#" className="block py-2 text-neutral-700">Produtos</a>
                <a href="#" className="block py-2 text-neutral-700">Sobre</a>
                <a href="#" className="block py-2 text-neutral-700">Contato</a>
                <div className="border-t pt-3 mt-3">
                  <button className="w-full py-2 text-brand-600 text-left">Login</button>
                  <button className="w-full py-2 bg-brand-500 text-white rounded-lg mt-2">Cadastrar</button>
                </div>
              </div>
            </div>
          )}
        </div>
      ),
      figmaSpecs: {
        width: 'Fill container',
        height: '56px',
        padding: '12px 16px',
        constraints: 'Left & Right, Top',
        autoLayout: 'Horizontal, Space between'
      },
      code: `<nav className="bg-white border-b border-neutral-200 px-4 py-3">
  <div className="flex items-center justify-between">
    <button className="p-2 text-neutral-700">
      <Menu size={24} />
    </button>
    <div className="font-bold text-lg text-brand-700">Logo</div>
    <button className="p-2 text-neutral-700">
      <Search size={20} />
    </button>
  </div>
</nav>`
    },
    {
      name: 'Bottom Navigation',
      type: 'mobile',
      usage: 'Apps móveis, navegação principal',
      behavior: 'Fixo na parte inferior, 3-5 itens',
      constraints: 'Fill width, height: 64-80px, bottom safe area',
      component: (
        <nav className="bg-white border-t border-neutral-200 px-4 py-2 w-full">
          <div className="flex items-center justify-around">
            <button className="flex flex-col items-center py-2 text-brand-600">
              <Home size={20} />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center py-2 text-neutral-500">
              <Search size={20} />
              <span className="text-xs mt-1">Buscar</span>
            </button>
            <button className="flex flex-col items-center py-2 text-neutral-500">
              <Bell size={20} />
              <span className="text-xs mt-1">Avisos</span>
            </button>
            <button className="flex flex-col items-center py-2 text-neutral-500">
              <User size={20} />
              <span className="text-xs mt-1">Perfil</span>
            </button>
          </div>
        </nav>
      ),
      figmaSpecs: {
        width: 'Fill container',
        height: '72px',
        padding: '8px 16px',
        constraints: 'Left & Right, Bottom',
        autoLayout: 'Horizontal, Space between'
      },
      code: `<nav className="bg-white border-t border-neutral-200 px-4 py-2">
  <div className="flex items-center justify-around">
    <button className="flex flex-col items-center py-2 text-brand-600">
      <Home size={20} />
      <span className="text-xs mt-1">Home</span>
    </button>
    <button className="flex flex-col items-center py-2 text-neutral-500">
      <Search size={20} />
      <span className="text-xs mt-1">Buscar</span>
    </button>
  </div>
</nav>`
    },
    {
      name: 'Sidebar Navigation',
      type: 'desktop',
      usage: 'Dashboards, aplicações complexas',
      behavior: 'Lateral esquerda, colapsível',
      constraints: 'Width: 240-280px, Fill height',
      component: (
        <nav className="bg-white border-r border-neutral-200 w-64 h-96 p-4">
          <div className="space-y-6">
            <div className="font-bold text-xl text-brand-700 px-3">Dashboard</div>
            <div className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-brand-600 bg-brand-50 rounded-lg">
                <Home size={18} />
                <span>Overview</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-50 rounded-lg">
                <User size={18} />
                <span>Usuários</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-50 rounded-lg">
                <Bell size={18} />
                <span>Notificações</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-neutral-700 hover:bg-neutral-50 rounded-lg">
                <Settings size={18} />
                <span>Configurações</span>
              </a>
            </div>
          </div>
        </nav>
      ),
      figmaSpecs: {
        width: '256px',
        height: 'Fill container',
        padding: '16px',
        constraints: 'Left, Top & Bottom',
        autoLayout: 'Vertical, Top'
      },
      code: `<nav className="bg-white border-r border-neutral-200 w-64 h-full p-4">
  <div className="space-y-6">
    <div className="font-bold text-xl text-brand-700 px-3">Dashboard</div>
    <div className="space-y-1">
      <a href="#" className="flex items-center gap-3 px-3 py-2 text-brand-600 bg-brand-50 rounded-lg">
        <Home size={18} />
        <span>Overview</span>
      </a>
    </div>
  </div>
</nav>`
    }
  ];

  const deviceSizes = [
    {
      name: 'Mobile',
      icon: Smartphone,
      range: '320px - 768px',
      minFrame: '320px',
      maxFrame: '414px',
      approach: 'Mobile First',
      navigation: 'Bottom nav + Hamburger menu',
      characteristics: [
        'Navegação por toque',
        'Área de toque mínima: 44px',
        'Menu hamburger para múltiplas opções',
        'Bottom navigation para 3-5 seções principais'
      ]
    },
    {
      name: 'Tablet',
      icon: Tablet,
      range: '768px - 1024px',
      minFrame: '768px',
      maxFrame: '1024px',
      approach: 'Adaptativo',
      navigation: 'Header horizontal + Sidebar opcional',
      characteristics: [
        'Mix de navegação desktop/mobile',
        'Sidebar colapsível',
        'Header com mais espaço para links',
        'Gestos de swipe opcionais'
      ]
    },
    {
      name: 'Desktop',
      icon: Monitor,
      range: '1024px+',
      minFrame: '1024px',
      maxFrame: '1920px+',
      approach: 'Desktop First (tradicional)',
      navigation: 'Header + Sidebar para dashboards',
      characteristics: [
        'Navegação por mouse/trackpad',
        'Múltiplos níveis de navegação',
        'Breadcrumbs para navegação profunda',
        'Hover states e tooltips'
      ]
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Navigation size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Sistema de Navegação</h2>
          <p className="text-neutral-600">Headers, navbars, bottom navigation e sidebars responsivos</p>
        </div>
      </div>

      {/* Device Guidelines */}
      <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Diretrizes por Dispositivo</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {deviceSizes.map((device) => {
            const IconComponent = device.icon;
            return (
              <div key={device.name} className="p-4 border border-neutral-200 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-6 h-6 text-brand-500" />
                  <div>
                    <h4 className="font-medium text-neutral-800">{device.name}</h4>
                    <p className="text-xs text-neutral-500">{device.range}</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <strong className="text-neutral-700">Frame Size:</strong>
                    <div className="text-neutral-600">{device.minFrame} - {device.maxFrame}</div>
                  </div>
                  
                  <div>
                    <strong className="text-neutral-700">Approach:</strong>
                    <div className="text-neutral-600">{device.approach}</div>
                  </div>
                  
                  <div>
                    <strong className="text-neutral-700">Navigation:</strong>
                    <div className="text-neutral-600">{device.navigation}</div>
                  </div>
                  
                  <div>
                    <strong className="text-neutral-700">Características:</strong>
                    <ul className="text-xs text-neutral-600 mt-1 space-y-1">
                      {device.characteristics.map((char, index) => (
                        <li key={index}>• {char}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Components */}
      {navigationComponents.map((nav) => (
        <div key={nav.name} className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{nav.name}</h3>
              <div className="flex items-center gap-4 text-sm text-neutral-600">
                <span className="px-2 py-1 bg-brand-100 text-brand-700 rounded text-xs font-medium">
                  {nav.type}
                </span>
                <span>{nav.usage}</span>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(nav.code, nav.name)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-500 hover:bg-brand-600 rounded-lg transition-all duration-200"
            >
              {copiedComponent === nav.name ? (
                <Check size={16} className="text-white" />
              ) : (
                <Copy size={16} />
              )}
              Copy Code
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-neutral-800 mb-3">Preview</h4>
              <div className="border border-neutral-200 rounded-lg overflow-hidden">
                {nav.component}
              </div>
              
              <div className="mt-4 text-sm text-neutral-600">
                <div><strong>Behavior:</strong> {nav.behavior}</div>
                <div><strong>Constraints:</strong> {nav.constraints}</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-neutral-800 mb-3">Figma Specifications</h4>
              <div className="bg-neutral-50 p-4 rounded-lg space-y-2 text-sm">
                <div><strong>Width:</strong> {nav.figmaSpecs.width}</div>
                <div><strong>Height:</strong> {nav.figmaSpecs.height}</div>
                <div><strong>Padding:</strong> {nav.figmaSpecs.padding}</div>
                <div><strong>Constraints:</strong> {nav.figmaSpecs.constraints}</div>
                <div><strong>Auto Layout:</strong> {nav.figmaSpecs.autoLayout}</div>
              </div>
              
              <div className="mt-4">
                <h5 className="font-medium text-neutral-800 mb-2">Code</h5>
                <div className="bg-neutral-900 text-neutral-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                  <pre>{nav.code}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Best Practices */}
      <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Boas Práticas de Navegação</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Mobile First</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Comece com navegação mobile e expanda</li>
              <li>• Use bottom navigation para 3-5 seções principais</li>
              <li>• Hamburger menu para navegação secundária</li>
              <li>• Área de toque mínima de 44px</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Responsividade</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Teste em diferentes tamanhos de tela</li>
              <li>• Progressive enhancement para desktop</li>
              <li>• Mantenha consistência entre dispositivos</li>
              <li>• Considere orientação landscape/portrait</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationSystem;
