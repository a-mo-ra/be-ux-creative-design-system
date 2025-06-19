
import React, { useState } from 'react';
import { Book, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const GridSystem = () => {
  const [copiedGrid, setCopiedGrid] = useState<string | null>(null);

  const gridSystems = [
    {
      name: 'Auto Fit 250px',
      class: 'grid-auto-fit-250',
      description: 'Grid responsivo com colunas mínimas de 250px',
      usage: 'Cards de produtos, galeria de imagens',
      code: 'grid grid-cols-auto-fit-250 gap-6'
    },
    {
      name: 'Auto Fit 300px',
      class: 'grid-auto-fit-300',
      description: 'Grid responsivo com colunas mínimas de 300px',
      usage: 'Cards de conteúdo, portfolios',
      code: 'grid grid-cols-auto-fit-300 gap-6'
    },
    {
      name: 'Auto Fill 200px',
      class: 'grid-auto-fill-200',
      description: 'Grid que preenche com colunas de 200px',
      usage: 'Thumbnails, ícones, elementos pequenos',
      code: 'grid grid-cols-auto-fill-200 gap-4'
    }
  ];

  const responsiveGrids = [
    {
      name: '12 Column Grid',
      class: 'grid grid-cols-12 gap-6',
      description: 'Sistema clássico de 12 colunas',
      usage: 'Layouts complexos, dashboard'
    },
    {
      name: 'Responsive Cards',
      class: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      description: '1 coluna mobile, 2 tablet, 3 desktop',
      usage: 'Cards de conteúdo, artigos'
    },
    {
      name: 'Sidebar Layout',
      class: 'grid grid-cols-1 lg:grid-cols-4 gap-6',
      description: 'Layout com sidebar em desktop',
      usage: 'Páginas de conteúdo com navegação lateral'
    }
  ];

  const spacingSystem = [
    { name: 'Extra Small', class: 'gap-2', value: '8px', usage: 'Elementos muito próximos' },
    { name: 'Small', class: 'gap-4', value: '16px', usage: 'Elementos relacionados' },
    { name: 'Medium', class: 'gap-6', value: '24px', usage: 'Espaçamento padrão' },
    { name: 'Large', class: 'gap-8', value: '32px', usage: 'Seções distintas' },
    { name: 'Extra Large', class: 'gap-12', value: '48px', usage: 'Separação de blocos' }
  ];

  const copyToClipboard = async (code: string, name: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedGrid(name);
      toast({
        title: "Copiado!",
        description: `Código do ${name} copiado para a área de transferência.`,
      });
      setTimeout(() => setCopiedGrid(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o código.",
        variant: "destructive"
      });
    }
  };

  const renderGridDemo = (gridClass: string, itemCount: number = 6) => (
    <div className={`${gridClass} p-6 bg-gradient-to-br from-neutral-50 to-white rounded-lg border border-neutral-200`}>
      {Array.from({ length: itemCount }, (_, i) => (
        <div
          key={i}
          className="bg-brand-100 rounded-lg p-4 flex items-center justify-center text-brand-700 font-medium text-sm"
        >
          Item {i + 1}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Book size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Sistema de Grid</h2>
          <p className="text-neutral-600">Layouts responsivos e sistemas de espaçamento</p>
        </div>
      </div>

      {/* Auto Grid Systems */}
      <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Grids Automáticos</h3>
        
        <div className="space-y-8">
          {gridSystems.map((grid) => (
            <div key={grid.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800 mb-1">{grid.name}</h4>
                  <p className="text-sm text-neutral-600 mb-2">{grid.description}</p>
                  <p className="text-xs text-neutral-500">{grid.usage}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(grid.code, grid.name)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-200"
                >
                  {copiedGrid === grid.name ? (
                    <Check size={14} className="text-success-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                  Copiar
                </button>
              </div>
              
              {renderGridDemo(grid.code)}
              
              <code className="text-xs bg-neutral-100 px-3 py-2 rounded block font-mono text-neutral-700">
                className="{grid.code}"
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Grids */}
      <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Grids Responsivos</h3>
        
        <div className="space-y-8">
          {responsiveGrids.map((grid) => (
            <div key={grid.name} className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-neutral-800 mb-1">{grid.name}</h4>
                  <p className="text-sm text-neutral-600 mb-2">{grid.description}</p>
                  <p className="text-xs text-neutral-500">{grid.usage}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(grid.class, grid.name)}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-200"
                >
                  {copiedGrid === grid.name ? (
                    <Check size={14} className="text-success-500" />
                  ) : (
                    <Copy size={14} />
                  )}
                  Copiar
                </button>
              </div>
              
              {renderGridDemo(grid.class, grid.name === '12 Column Grid' ? 12 : 6)}
              
              <code className="text-xs bg-neutral-100 px-3 py-2 rounded block font-mono text-neutral-700">
                className="{grid.class}"
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Spacing System */}
      <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Sistema de Espaçamento</h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spacingSystem.map((spacing) => (
            <div key={spacing.class} className="space-y-4">
              <div>
                <h4 className="font-medium text-neutral-800 mb-1">{spacing.name}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-xs bg-neutral-100 px-2 py-1 rounded font-mono text-neutral-600">
                    {spacing.class}
                  </code>
                  <span className="text-xs text-neutral-500">{spacing.value}</span>
                </div>
                <p className="text-xs text-neutral-500">{spacing.usage}</p>
              </div>
              
              <div className={`grid grid-cols-2 ${spacing.class} p-4 bg-gradient-to-br from-neutral-50 to-white rounded-lg border border-neutral-200`}>
                <div className="bg-brand-100 rounded p-2 text-xs text-brand-700 text-center">A</div>
                <div className="bg-brand-100 rounded p-2 text-xs text-brand-700 text-center">B</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Breakpoints Reference */}
      <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Breakpoints de Referência</h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-medium text-neutral-800">Breakpoints Tailwind</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <code className="bg-neutral-100 px-2 py-1 rounded">sm:</code>
                <span className="text-neutral-600">640px+</span>
              </div>
              <div className="flex justify-between">
                <code className="bg-neutral-100 px-2 py-1 rounded">md:</code>
                <span className="text-neutral-600">768px+</span>
              </div>
              <div className="flex justify-between">
                <code className="bg-neutral-100 px-2 py-1 rounded">lg:</code>
                <span className="text-neutral-600">1024px+</span>
              </div>
              <div className="flex justify-between">
                <code className="bg-neutral-100 px-2 py-1 rounded">xl:</code>
                <span className="text-neutral-600">1280px+</span>
              </div>
              <div className="flex justify-between">
                <code className="bg-neutral-100 px-2 py-1 rounded">2xl:</code>
                <span className="text-neutral-600">1536px+</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-medium text-neutral-800">Uso Recomendado</h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div>
                <strong>Mobile First:</strong> Comece com mobile e adicione breakpoints maiores
              </div>
              <div>
                <strong>Container:</strong> Use max-width para limitar largura em telas grandes
              </div>
              <div>
                <strong>Flexibilidade:</strong> Combine grid com flexbox quando necessário
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Diretrizes de Grid</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Boas Práticas</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Use grids automáticos para conteúdo dinâmico</li>
              <li>• Mantenha espaçamento consistente</li>
              <li>• Teste em diferentes tamanhos de tela</li>
              <li>• Priorize legibilidade e usabilidade</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Performance</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Evite grids muito complexos</li>
              <li>• Use CSS Grid para layouts 2D</li>
              <li>• Prefira Flexbox para layouts 1D</li>
              <li>• Otimize para dispositivos móveis</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridSystem;
