
import React, { useState } from 'react';
import { Grid, Copy, Check, Heart, Star, User, Mail, Search, Settings } from 'lucide-react';
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
        <button className="px-6 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors duration-200 shadow-brand hover:shadow-glow">
          Botão Primário
        </button>
      ),
      code: `<button className="px-6 py-3 bg-brand-500 text-white font-medium rounded-lg hover:bg-brand-600 transition-colors duration-200 shadow-brand hover:shadow-glow">
  Botão Primário
</button>`
    },
    {
      name: 'Secondary Button',
      component: (
        <button className="px-6 py-3 bg-white text-brand-600 font-medium rounded-lg border-2 border-brand-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200">
          Botão Secundário
        </button>
      ),
      code: `<button className="px-6 py-3 bg-white text-brand-600 font-medium rounded-lg border-2 border-brand-200 hover:border-brand-300 hover:bg-brand-50 transition-all duration-200">
  Botão Secundário
</button>`
    },
    {
      name: 'Icon Button',
      component: (
        <button className="p-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors duration-200 shadow-brand">
          <Heart size={20} />
        </button>
      ),
      code: `<button className="p-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors duration-200 shadow-brand">
  <Heart size={20} />
</button>`
    }
  ];

  const inputVariants = [
    {
      name: 'Text Input',
      component: (
        <div className="w-full max-w-sm">
          <label className="block text-sm font-medium text-neutral-700 mb-2">
            Nome completo
          </label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200"
          />
        </div>
      ),
      code: `<div className="w-full max-w-sm">
  <label className="block text-sm font-medium text-neutral-700 mb-2">
    Nome completo
  </label>
  <input
    type="text"
    placeholder="Digite seu nome"
    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200"
  />
</div>`
    },
    {
      name: 'Search Input',
      component: (
        <div className="w-full max-w-sm relative">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200"
          />
        </div>
      ),
      code: `<div className="w-full max-w-sm relative">
  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
  <input
    type="text"
    placeholder="Pesquisar..."
    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all duration-200"
  />
</div>`
    }
  ];

  const cardVariants = [
    {
      name: 'Basic Card',
      component: (
        <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50 max-w-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
              <User size={20} className="text-brand-600" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">João Silva</h3>
              <p className="text-sm text-neutral-500">Designer UX</p>
            </div>
          </div>
          <p className="text-neutral-600 text-sm">
            Criando experiências digitais incríveis com foco no usuário.
          </p>
        </div>
      ),
      code: `<div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50 max-w-sm">
  <div className="flex items-center gap-3 mb-4">
    <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
      <User size={20} className="text-brand-600" />
    </div>
    <div>
      <h3 className="font-semibold text-neutral-900">João Silva</h3>
      <p className="text-sm text-neutral-500">Designer UX</p>
    </div>
  </div>
  <p className="text-neutral-600 text-sm">
    Criando experiências digitais incríveis com foco no usuário.
  </p>
</div>`
    },
    {
      name: 'Feature Card',
      component: (
        <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-200/50 max-w-sm hover:shadow-elevation-3 transition-all duration-200 group">
          <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <Star size={24} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-900 mb-2">
            Componentes Premium
          </h3>
          <p className="text-neutral-600 text-sm mb-4">
            Biblioteca completa com mais de 100 componentes prontos para usar.
          </p>
          <button className="text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors">
            Saiba mais →
          </button>
        </div>
      ),
      code: `<div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-200/50 max-w-sm hover:shadow-elevation-3 transition-all duration-200 group">
  <div className="w-12 h-12 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
    <Star size={24} className="text-white" />
  </div>
  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
    Componentes Premium
  </h3>
  <p className="text-neutral-600 text-sm mb-4">
    Biblioteca completa com mais de 100 componentes prontos para usar.
  </p>
  <button className="text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors">
    Saiba mais →
  </button>
</div>`
    }
  ];

  const renderComponentSection = (title: string, components: any[]) => (
    <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
      <h3 className="text-lg font-semibold text-neutral-900 mb-6">{title}</h3>
      <div className="grid gap-8">
        {components.map((item) => (
          <div key={item.name} className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-neutral-800">{item.name}</h4>
              <button
                onClick={() => copyToClipboard(item.code, item.name)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-neutral-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-all duration-200"
              >
                {copiedComponent === item.name ? (
                  <Check size={14} className="text-success-500" />
                ) : (
                  <Copy size={14} />
                )}
                Copiar código
              </button>
            </div>
            
            <div className="component-preview flex items-center justify-center">
              {item.component}
            </div>
            
            <div className="bg-neutral-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm text-neutral-100">
                <code>{item.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Grid size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Biblioteca de Componentes</h2>
          <p className="text-neutral-600">Componentes prontos para usar em seus projetos</p>
        </div>
      </div>

      {renderComponentSection('Botões', buttonVariants)}
      {renderComponentSection('Inputs', inputVariants)}
      {renderComponentSection('Cards', cardVariants)}

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Diretrizes de Uso</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Componentes</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Mantenha consistência visual</li>
              <li>• Use estados interativos (hover, focus)</li>
              <li>• Implemente acessibilidade (ARIA)</li>
              <li>• Teste responsividade</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Customização</h4>
            <ul className="space-y-2 text-neutral-600">
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
