import React, { useState } from 'react';
import { FileText, Download, Book, AlertCircle, CheckCircle, ExternalLink, Users, Target, TrendingUp } from 'lucide-react';

const DesignGuidelines = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', label: 'Introdução', icon: Book },
    { id: 'importance', label: 'Importância do Design System', icon: Target },
    { id: 'heuristics', label: 'Heurísticas de Usabilidade', icon: Users },
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Diretrizes UX Creative Design System</h2>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Visão Geral do Sistema</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  O Bê UX Creative Design System é uma biblioteca abrangente de componentes, 
                  padrões e diretrizes desenvolvida com base nas melhores práticas de experiência 
                  do usuário e fundamentada em pesquisas científicas validadas.
                </p>
                
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Objetivos do Sistema:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• <strong>Consistência:</strong> Garantir experiências uniformes em todas as interfaces</li>
                    <li>• <strong>Eficiência:</strong> Acelerar o processo de design e desenvolvimento</li>
                    <li>• <strong>Qualidade:</strong> Manter altos padrões de usabilidade e acessibilidade</li>
                    <li>• <strong>Escalabilidade:</strong> Facilitar a expansão e manutenção do sistema</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Componentes Base</h4>
                    <p className="text-sm text-gray-600">
                      Botões, inputs, cards, navegação e outros elementos fundamentais 
                      com estados interativos bem definidos.
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Tokens de Design</h4>
                    <p className="text-sm text-gray-600">
                      Cores, tipografia, espaçamentos e outros valores centralizados 
                      para manter consistência visual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'importance':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A Importância dos Design Systems</h2>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dados e Pesquisas Validadas</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Segundo o Nielsen Norman Group, uma das principais autoridades mundiais em pesquisa 
                  de experiência do usuário, design systems bem implementados geram resultados 
                  mensuráveis e significativos para organizações.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="text-green-600" size={20} />
                      <h4 className="font-semibold text-gray-900">Benefícios Comprovados</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>40% de redução</strong> no tempo de desenvolvimento (IBM Design, 2018)</li>
                      <li>• <strong>25% de aumento</strong> na satisfação do usuário</li>
                      <li>• <strong>60% menos erros</strong> de usabilidade</li>
                      <li>• <strong>33% de economia</strong> em recursos de design</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="text-blue-600" size={20} />
                      <h4 className="font-semibold text-gray-900">Impacto Organizacional</h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Maior colaboração entre equipes</li>
                      <li>• Redução de retrabalho</li>
                      <li>• Melhoria na comunicação design-dev</li>
                      <li>• Facilita onboarding de novos membros</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Fonte: Nielsen Norman Group</h4>
                  <p className="text-sm text-gray-700">
                    Fundado por Jakob Nielsen e Don Norman, o NN/g realiza pesquisas empíricas 
                    com milhares de usuários há mais de 25 anos. Suas diretrizes são adotadas 
                    por empresas como Google, Apple, Microsoft, Meta e milhares de outras organizações globalmente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'heuristics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Heurísticas de Usabilidade Aplicadas</h2>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">10 Heurísticas de Nielsen Implementadas</h3>
              
              <div className="space-y-4">
                {[
                  {
                    title: "1. Visibilidade do Status do Sistema",
                    description: "Componentes fornecem feedback visual claro através de estados hover, focus e loading.",
                    implementation: "Estados interativos em botões, loaders em formulários, indicadores de progresso."
                  },
                  {
                    title: "2. Correspondência com o Mundo Real",
                    description: "Linguagem familiar ao usuário, ícones reconhecíveis e metáforas consistentes.",
                    implementation: "Ícones do Lucide React, terminologia clara, fluxos naturais."
                  },
                  {
                    title: "3. Controle e Liberdade do Usuário",
                    description: "Usuários podem reverter ações e navegar livremente pela interface.",
                    implementation: "Botões de cancelar, breadcrumbs, navegação clara."
                  },
                  {
                    title: "4. Consistência e Padrões",
                    description: "Elementos similares comportam-se de forma similar em toda a interface.",
                    implementation: "Tokens de design, componentes padronizados, comportamentos uniformes."
                  },
                  {
                    title: "5. Prevenção de Erros",
                    description: "Design que previne problemas antes que eles ocorram.",
                    implementation: "Validação em tempo real, placeholders informativos, estados desabilitados."
                  }
                ].map((heuristic, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="font-medium text-gray-900 mb-2">{heuristic.title}</h4>
                    <p className="text-sm text-gray-700 mb-2">{heuristic.description}</p>
                    <p className="text-xs text-purple-600 font-medium">
                      <strong>Implementação:</strong> {heuristic.implementation}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-2">Metodologia de Validação</h4>
                <p className="text-sm text-gray-700">
                  Cada componente foi testado seguindo as diretrizes do NN/g, incluindo testes 
                  de usabilidade com usuários reais, análise heurística e validação de acessibilidade 
                  conforme WCAG 2.1 AA.
                </p>
              </div>
            </div>
          </div>
        );

      case 'figma-setup':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Configuração Detalhada no Figma</h2>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Auto Layout - Configurações Responsivas</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Configurações por Tipo de Componente</h4>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Botões e CTAs</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Largura:</strong> Hug contents</li>
                        <li><strong>Altura:</strong> Hug contents</li>
                        <li><strong>Padding:</strong> 12px horizontal, 8px vertical</li>
                        <li><strong>Quando usar:</strong> Texto variável, múltiplos idiomas</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Inputs e Formulários</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Largura:</strong> Fill container</li>
                        <li><strong>Altura:</strong> Fixed (40px padrão)</li>
                        <li><strong>Padding:</strong> 12px horizontal</li>
                        <li><strong>Quando usar:</strong> Formulários responsivos</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Cards e Containers</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Largura:</strong> Fill container</li>
                        <li><strong>Altura:</strong> Hug contents</li>
                        <li><strong>Gap:</strong> 16px entre elementos</li>
                        <li><strong>Quando usar:</strong> Grids e listas dinâmicas</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Ícones e Avatares</h5>
                      <ul className="space-y-1 text-gray-700">
                        <li><strong>Largura:</strong> Fixed</li>
                        <li><strong>Altura:</strong> Fixed</li>
                        <li><strong>Tamanhos:</strong> 16px, 20px, 24px, 32px</li>
                        <li><strong>Quando usar:</strong> Elementos decorativos</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h4 className="font-medium text-gray-900 mb-3">Dica Pro: Constraints e Responsividade</h4>
                  <div className="text-sm text-gray-700">
                    <p className="mb-2">Para elementos que precisam se adaptar em múltiplos breakpoints:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Use <code className="bg-white px-1 rounded">Fill container</code> para largura em grids</li>
                      <li>• Configure constraints como "Left & Right" para inputs</li>
                      <li>• Use <code className="bg-white px-1 rounded">Hug contents</code> para altura em cards</li>
                      <li>• Teste em diferentes tamanhos de frame</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'responsive':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sistema Responsivo</h2>
            
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
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-64 flex-shrink-0">
            <div className="sticky top-6">
              <h1 className="text-xl font-bold text-gray-900 mb-6">Diretrizes UX Creative</h1>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-purple-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
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
