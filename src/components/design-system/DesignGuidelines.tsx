
import React, { useState } from 'react';
import { FileText, Download, Book, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

const DesignGuidelines = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', label: 'Introdução', icon: Book },
    { id: 'figma-setup', label: 'Configuração Figma', icon: CheckCircle },
    { id: 'responsive', label: 'Responsividade', icon: AlertCircle },
    { id: 'shadows', label: 'Sombras', icon: FileText },
    { id: 'grid', label: 'Sistema de Grid', icon: FileText },
    { id: 'glossary', label: 'Glossário', icon: Book }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'introduction':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Diretrizes de Design System</h2>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Por que seguir boas práticas?</h3>
              <div className="space-y-4 text-slate-300">
                <p>
                  Seguir boas práticas em design system não é apenas uma questão estética, mas sim uma necessidade 
                  fundamentada em pesquisas e dados validados por especialistas renomados como o 
                  <a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 mx-1">
                    Nielsen Norman Group
                  </a>
                  e outras organizações de pesquisa em UX.
                </p>
                
                <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <h4 className="font-semibold text-slate-200 mb-2">Benefícios comprovados:</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• <strong>Redução de 40% no tempo de desenvolvimento</strong> (Estudo IBM Design, 2018)</li>
                    <li>• <strong>Aumento de 25% na satisfação do usuário</strong> com interfaces consistentes</li>
                    <li>• <strong>Diminuição de 60% nos erros de usabilidade</strong> através de padrões estabelecidos</li>
                    <li>• <strong>Melhoria na acessibilidade</strong> seguindo diretrizes WCAG 2.1</li>
                  </ul>
                </div>

                <p>
                  O Nielsen Norman Group, fundado por Jakob Nielsen e Don Norman, é uma das autoridades 
                  mundiais em pesquisa de experiência do usuário. Suas diretrizes são baseadas em 
                  estudos empíricos com milhares de usuários e são amplamente adotadas por empresas 
                  como Google, Apple, Microsoft e Meta.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg p-6 border border-indigo-700/30">
              <h3 className="text-lg font-semibold text-slate-200 mb-3">Princípios Fundamentais</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                <div>
                  <h4 className="font-medium text-slate-200 mb-2">Consistência</h4>
                  <p>Elementos similares devem comportar-se de forma similar em toda a interface.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-200 mb-2">Hierarquia Visual</h4>
                  <p>Organizar elementos por importância usando tamanho, cor e posicionamento.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-200 mb-2">Feedback</h4>
                  <p>Fornecer respostas claras e imediatas para ações do usuário.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-200 mb-2">Simplicidade</h4>
                  <p>Remover elementos desnecessários e focar no essencial.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'figma-setup':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Configuração no Figma</h2>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Configurações de Layout</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-slate-200 mb-3">Auto Layout - Configurações de Tamanho</h4>
                  <div className="bg-slate-900/50 rounded-lg p-4 space-y-3">
                    <div>
                      <strong className="text-slate-200">Largura (Width):</strong>
                      <ul className="mt-2 space-y-1 text-sm text-slate-300 ml-4">
                        <li>• <code className="bg-slate-700 px-2 py-1 rounded">Hug contents</code> - Para botões, labels, tags</li>
                        <li>• <code className="bg-slate-700 px-2 py-1 rounded">Fill container</code> - Para inputs, cards em grid</li>
                        <li>• <code className="bg-slate-700 px-2 py-1 rounded">Fixed</code> - Para ícones, avatares, elementos com tamanho específico</li>
                      </ul>
                    </div>
                    
                    <div>
                      <strong className="text-slate-200">Altura (Height):</strong>
                      <ul className="mt-2 space-y-1 text-sm text-slate-300 ml-4">
                        <li>• <code className="bg-slate-700 px-2 py-1 rounded">Hug contents</code> - Para a maioria dos componentes</li>
                        <li>• <code className="bg-slate-700 px-2 py-1 rounded">Fill container</code> - Para sidebars, seções que ocupam altura total</li>
                        <li>• <code className="bg-slate-700 px-2 py-1 rounded">Fixed</code> - Para headers, footers, elementos com altura específica</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-slate-200 mb-3">Quando aplicar cada configuração</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-300">
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h5 className="font-medium text-slate-200 mb-2">Hug Contents</h5>
                      <p className="mb-2">Use quando o tamanho deve ser determinado pelo conteúdo:</p>
                      <ul className="space-y-1">
                        <li>• Botões com texto variável</li>
                        <li>• Cards com conteúdo dinâmico</li>
                        <li>• Containers que se adaptam ao conteúdo</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <h5 className="font-medium text-slate-200 mb-2">Fill Container</h5>
                      <p className="mb-2">Use quando o elemento deve ocupar todo o espaço disponível:</p>
                      <ul className="space-y-1">
                        <li>• Inputs em formulários</li>
                        <li>• Cards em grid responsivo</li>
                        <li>• Seções que dividem o espaço</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'responsive':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Sistema Responsivo</h2>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Breakpoints para Configuração Manual</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-slate-200 mb-2">Mobile</h4>
                  <code className="text-indigo-400">320px - 768px</code>
                  <ul className="mt-3 space-y-1 text-xs text-slate-300">
                    <li>1 coluna em grids</li>
                    <li>Sidebar colapsada</li>
                    <li>Padding reduzido</li>
                    <li>Font size -1 nível</li>
                  </ul>
                </div>
                
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-slate-200 mb-2">Tablet</h4>
                  <code className="text-indigo-400">768px - 1024px</code>
                  <ul className="mt-3 space-y-1 text-xs text-slate-300">
                    <li>2-3 colunas em grids</li>
                    <li>Sidebar adaptável</li>
                    <li>Padding médio</li>
                    <li>Font size padrão</li>
                  </ul>
                </div>
                
                <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                  <h4 className="font-medium text-slate-200 mb-2">Desktop</h4>
                  <code className="text-indigo-400">1024px+</code>
                  <ul className="mt-3 space-y-1 text-xs text-slate-300">
                    <li>3-4+ colunas em grids</li>
                    <li>Sidebar expandida</li>
                    <li>Padding completo</li>
                    <li>Font size otimizado</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="text-amber-400 mt-0.5 flex-shrink-0" size={16} />
                  <div>
                    <h4 className="font-medium text-amber-300 mb-2">Importante: Configuração Manual</h4>
                    <p className="text-sm text-amber-100">
                      No Figma, você deve configurar manualmente os breakpoints usando constraints e auto layout. 
                      Crie variantes dos componentes para cada breakpoint quando necessário.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'shadows':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Sistema de Sombras para Figma</h2>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Configurações de Drop Shadow</h3>
              
              <div className="space-y-4">
                {[
                  { name: 'Elevation 1', x: 0, y: 1, blur: 3, spread: 0, color: 'rgba(0, 0, 0, 0.1)', usage: 'Cards básicos' },
                  { name: 'Elevation 2', x: 0, y: 4, blur: 6, spread: -1, color: 'rgba(0, 0, 0, 0.1)', usage: 'Cards principais' },
                  { name: 'Elevation 3', x: 0, y: 10, blur: 15, spread: -3, color: 'rgba(0, 0, 0, 0.1)', usage: 'Hover states' },
                  { name: 'Elevation 4', x: 0, y: 20, blur: 25, spread: -5, color: 'rgba(0, 0, 0, 0.1)', usage: 'Modais' },
                  { name: 'Elevation 5', x: 0, y: 25, blur: 50, spread: -12, color: 'rgba(0, 0, 0, 0.25)', usage: 'Tooltips' }
                ].map((shadow) => (
                  <div key={shadow.name} className="bg-slate-900/50 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-medium text-slate-200">{shadow.name}</h4>
                      <span className="text-xs text-slate-400">{shadow.usage}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                      <div>
                        <span className="text-slate-400">X:</span>
                        <code className="ml-1 text-indigo-400">{shadow.x}px</code>
                      </div>
                      <div>
                        <span className="text-slate-400">Y:</span>
                        <code className="ml-1 text-indigo-400">{shadow.y}px</code>
                      </div>
                      <div>
                        <span className="text-slate-400">Blur:</span>
                        <code className="ml-1 text-indigo-400">{shadow.blur}px</code>
                      </div>
                      <div>
                        <span className="text-slate-400">Spread:</span>
                        <code className="ml-1 text-indigo-400">{shadow.spread}px</code>
                      </div>
                      <div>
                        <span className="text-slate-400">Color:</span>
                        <code className="ml-1 text-indigo-400 text-xs">{shadow.color}</code>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-slate-900/50 rounded-lg p-4">
                <h4 className="font-medium text-slate-200 mb-3">Sombras Especiais com Cor</h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div>
                    <strong>Brand Glow:</strong> X: 0, Y: 0, Blur: 20px, Spread: 0, Color: rgba(99, 102, 241, 0.4)
                  </div>
                  <div>
                    <strong>Brand Shadow:</strong> X: 0, Y: 4, Blur: 14px, Spread: 0, Color: rgba(99, 102, 241, 0.25)
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'grid':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Sistema de Grid para Configuração Manual</h2>
            
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Configurações por Dispositivo</h3>
              
              <div className="space-y-6">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-200 mb-3">Mobile (320px - 768px)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                    <div>
                      <strong>Colunas:</strong> 4-6 colunas<br/>
                      <strong>Gutter:</strong> 16px<br/>
                      <strong>Margins:</strong> 16px
                    </div>
                    <div>
                      <strong>Grid Type:</strong> Auto Layout<br/>
                      <strong>Direction:</strong> Vertical<br/>
                      <strong>Gap:</strong> 16px
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-200 mb-3">Tablet (768px - 1024px)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                    <div>
                      <strong>Colunas:</strong> 8-12 colunas<br/>
                      <strong>Gutter:</strong> 24px<br/>
                      <strong>Margins:</strong> 24px
                    </div>
                    <div>
                      <strong>Grid Type:</strong> Auto Layout<br/>
                      <strong>Direction:</strong> Horizontal + Vertical<br/>
                      <strong>Gap:</strong> 24px
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/50 rounded-lg p-4">
                  <h4 className="font-medium text-slate-200 mb-3">Desktop (1024px+)</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                    <div>
                      <strong>Colunas:</strong> 12+ colunas<br/>
                      <strong>Gutter:</strong> 32px<br/>
                      <strong>Margins:</strong> 48px
                    </div>
                    <div>
                      <strong>Grid Type:</strong> Auto Layout<br/>
                      <strong>Direction:</strong> Horizontal<br/>
                      <strong>Gap:</strong> 32px
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-amber-900/20 border border-amber-700/50 rounded-lg p-4">
                <h4 className="font-medium text-amber-300 mb-2">Como configurar no Figma:</h4>
                <ol className="space-y-1 text-sm text-amber-100 list-decimal list-inside">
                  <li>Selecione o frame principal</li>
                  <li>Ative "Layout Grid" no painel direito</li>
                  <li>Configure o tipo como "Columns"</li>
                  <li>Defina o número de colunas conforme o dispositivo</li>
                  <li>Ajuste gutter e margins conforme especificado</li>
                </ol>
              </div>
            </div>
          </div>
        );

      case 'glossary':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-200 mb-4">Glossário de Termos</h2>
            
            <div className="space-y-4">
              {[
                {
                  term: 'Auto Layout',
                  definition: 'Sistema do Figma que permite que elementos se reorganizem automaticamente baseado no conteúdo. Essencial para criar componentes responsivos.'
                },
                {
                  term: 'Hug Contents',
                  definition: 'Configuração onde o tamanho do elemento se ajusta automaticamente ao conteúdo interno.'
                },
                {
                  term: 'Fill Container',
                  definition: 'Configuração onde o elemento ocupa todo o espaço disponível no container pai.'
                },
                {
                  term: 'Fixed Size',
                  definition: 'Tamanho fixo definido manualmente, não se adapta ao conteúdo ou container.'
                },
                {
                  term: 'Constraints',
                  definition: 'Sistema que define como elementos se comportam quando o frame pai muda de tamanho.'
                },
                {
                  term: 'Breakpoints',
                  definition: 'Pontos específicos de largura de tela onde o layout deve se adaptar para diferentes dispositivos.'
                },
                {
                  term: 'Design Tokens',
                  definition: 'Valores centralizados para cores, tipografia, espaçamentos e outros elementos do design system.'
                },
                {
                  term: 'Component Variants',
                  definition: 'Diferentes versões de um componente (ex: botão primary, secondary) mantidas em um único componente.'
                },
                {
                  term: 'Drop Shadow',
                  definition: 'Efeito de sombra aplicado a elementos para criar profundidade e hierarquia visual.'
                },
                {
                  term: 'Elevation',
                  definition: 'Sistema de níveis de profundidade usando sombras para indicar a importância dos elementos.'
                }
              ].map((item) => (
                <div key={item.term} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <h3 className="font-semibold text-slate-200 mb-2">{item.term}</h3>
                  <p className="text-slate-300 text-sm">{item.definition}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg p-6 border border-indigo-700/30">
              <h3 className="text-lg font-semibold text-slate-200 mb-4">Recursos Adicionais</h3>
              <div className="space-y-3 text-sm text-slate-300">
                <a href="https://www.nngroup.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400">
                  <ExternalLink size={14} />
                  Nielsen Norman Group - Pesquisas em UX
                </a>
                <a href="https://help.figma.com/hc/en-us/articles/360040451373-Create-dynamic-designs-with-auto-layout" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400">
                  <ExternalLink size={14} />
                  Figma - Auto Layout Documentation
                </a>
                <a href="https://www.designsystem.tools/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-indigo-400">
                  <ExternalLink size={14} />
                  Design System Tools - Recursos e Templates
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-6">
              <h1 className="text-xl font-bold text-slate-200 mb-6">Diretrizes de Design</h1>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <IconComponent size={18} />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignGuidelines;
