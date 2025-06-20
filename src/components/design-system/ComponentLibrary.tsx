
import React, { useState } from 'react';
import { Grid, Copy, Check, Heart, Star, User, Search } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ComponentLibrary = () => {
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null);

  const copyToClipboard = async (code: string, componentName: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedComponent(componentName);
      toast({
        title: "Copiado!",
        description: `Código do ${componentName} copiado para a área de transferência.`,
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

  const buttonVariants = [
    {
      name: 'Primary Button',
      component: (
        <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-500/25">
          Botão Primário
        </button>
      ),
      code: `<button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-500/25">
  Botão Primário
</button>`
    },
    {
      name: 'Secondary Button',
      component: (
        <button className="px-4 py-2 bg-slate-700 text-slate-200 font-medium rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-600 transition-all duration-200">
          Botão Secundário
        </button>
      ),
      code: `<button className="px-4 py-2 bg-slate-700 text-slate-200 font-medium rounded-lg border border-slate-600 hover:border-slate-500 hover:bg-slate-600 transition-all duration-200">
  Botão Secundário
</button>`
    },
    {
      name: 'Icon Button',
      component: (
        <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-500/25">
          <Heart size={16} />
        </button>
      ),
      code: `<button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-lg shadow-indigo-500/25">
  <Heart size={16} />
</button>`
    }
  ];

  const inputVariants = [
    {
      name: 'Text Input',
      component: (
        <div className="w-full max-w-xs">
          <label className="block text-sm font-medium text-slate-200 mb-2">
            Nome completo
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
          />
        </div>
      ),
      code: `<input
  type="text"
  placeholder="Digite seu nome"
  className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
/>`
    },
    {
      name: 'Search Input',
      component: (
        <div className="w-full max-w-xs relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
          />
        </div>
      ),
      code: `<div className="relative">
  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
  <input
    type="text"
    placeholder="Pesquisar..."
    className="w-full pl-9 pr-3 py-2 bg-slate-800 border border-slate-600 rounded-lg text-slate-200 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
  />
</div>`
    }
  ];

  const cardVariants = [
    {
      name: 'Basic Card',
      component: (
        <div className="bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700 max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <User size={16} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-200">João Silva</h3>
              <p className="text-sm text-slate-400">Designer UX</p>
            </div>
          </div>
          <p className="text-slate-300 text-sm">
            Criando experiências digitais incríveis.
          </p>
        </div>
      ),
      code: `<div className="bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700">
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
      <User size={16} className="text-white" />
    </div>
    <div>
      <h3 className="font-semibold text-slate-200">João Silva</h3>
      <p className="text-sm text-slate-400">Designer UX</p>
    </div>
  </div>
  <p className="text-slate-300 text-sm">
    Criando experiências digitais incríveis.
  </p>
</div>`
    },
    {
      name: 'Feature Card',
      component: (
        <div className="bg-slate-800 rounded-xl p-4 border border-slate-700 max-w-xs hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200 group">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
            <Star size={20} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-slate-200 mb-2">
            Componentes Premium
          </h3>
          <p className="text-slate-400 text-sm mb-3">
            Biblioteca completa com mais de 100 componentes.
          </p>
          <button className="text-indigo-400 font-medium text-sm hover:text-indigo-300 transition-colors">
            Saiba mais →
          </button>
        </div>
      ),
      code: `<div className="bg-slate-800 rounded-xl p-4 border border-slate-700 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-200 group">
  <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
    <Star size={20} className="text-white" />
  </div>
  <h3 className="text-lg font-semibold text-slate-200 mb-2">
    Componentes Premium
  </h3>
  <p className="text-slate-400 text-sm mb-3">
    Biblioteca completa com mais de 100 componentes.
  </p>
  <button className="text-indigo-400 font-medium text-sm hover:text-indigo-300 transition-colors">
    Saiba mais →
  </button>
</div>`
    }
  ];

  const renderComponentSection = (title: string, components: any[]) => (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 mb-8">
      <h3 className="text-lg font-semibold text-slate-200 mb-6">{title}</h3>
      <div className="space-y-8">
        {components.map((item) => (
          <div key={item.name} className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium text-slate-200">{item.name}</h4>
              <button
                onClick={() => copyToClipboard(item.code, item.name)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-indigo-400 hover:bg-slate-700 rounded-lg transition-all duration-200"
              >
                {copiedComponent === item.name ? (
                  <Check size={14} className="text-green-500" />
                ) : (
                  <Copy size={14} />
                )}
                Copiar código
              </button>
            </div>
            
            <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700 flex items-center justify-center min-h-[120px]">
              {item.component}
            </div>
            
            <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-slate-300 whitespace-pre-wrap break-words">
                <code>{item.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
          <Grid size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-slate-200">Biblioteca de Componentes</h2>
          <p className="text-slate-400">Componentes prontos para usar em seus projetos</p>
        </div>
      </div>

      {renderComponentSection('Botões', buttonVariants)}
      {renderComponentSection('Inputs', inputVariants)}
      {renderComponentSection('Cards', cardVariants)}

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-xl p-6 border border-indigo-700/30">
        <h3 className="text-lg font-semibold text-slate-200 mb-4">Diretrizes de Uso</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-slate-200 mb-3">Componentes</h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Mantenha consistência visual</li>
              <li>• Use estados interativos (hover, focus)</li>
              <li>• Implemente acessibilidade (ARIA)</li>
              <li>• Teste responsividade</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-slate-200 mb-3">Customização</h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Modifique cores usando tokens</li>
              <li>• Ajuste espaçamentos proporcionalmente</li>
              <li>• Mantenha hierarquia visual</li>
              <li>• Documente mudanças</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentLibrary;
