import React, { useState } from 'react';
import { Sparkles, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ShadowSystem = () => {
  const [copiedShadow, setCopiedShadow] = useState<string | null>(null);

  const copyToClipboard = async (css: string, shadowName: string) => {
    try {
      await navigator.clipboard.writeText(css);
      setCopiedShadow(shadowName);
      toast({
        title: "Copiado!",
        description: `CSS da ${shadowName} copiado para área de transferência.`,
      });
      setTimeout(() => setCopiedShadow(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o CSS.",
        variant: "destructive"
      });
    }
  };

  const shadowLevels = [
    {
      name: 'Elevation 1',
      class: 'shadow-elevation-1',
      usage: 'Cards básicos, elementos sutis',
      description: 'Sombra muito sutil para elementos próximos ao background'
    },
    {
      name: 'Elevation 2',
      class: 'shadow-elevation-2',
      usage: 'Cards principais, botões em repouso',
      description: 'Sombra padrão para a maioria dos componentes'
    },
    {
      name: 'Elevation 3',
      class: 'shadow-elevation-3',
      usage: 'Elementos hover, dropdowns',
      description: 'Sombra mais pronunciada para estados interativos'
    },
    {
      name: 'Elevation 4',
      class: 'shadow-elevation-4',
      usage: 'Modais, popups importantes',
      description: 'Sombra forte para elementos que se destacam'
    },
    {
      name: 'Elevation 5',
      class: 'shadow-elevation-5',
      usage: 'Elementos críticos, tooltips',
      description: 'Máxima elevação para elementos prioritários'
    }
  ];

  const specialShadows = [
    {
      name: 'Brand Glow',
      class: 'shadow-glow',
      usage: 'Botões primários, elementos de marca',
      description: 'Sombra colorida com a cor da marca'
    },
    {
      name: 'Brand Glow Large',
      class: 'shadow-glow-lg',
      usage: 'CTAs importantes, elementos hero',
      description: 'Sombra colorida maior para máximo impacto'
    },
    {
      name: 'Brand Shadow',
      class: 'shadow-brand',
      usage: 'Cards especiais, elementos destacados',
      description: 'Sombra sutil com toque da cor da marca'
    }
  ];

  const renderShadowGrid = (shadows: any[], title: string) => (
    <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
      <h3 className="text-lg font-semibold text-neutral-900 mb-6">{title}</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shadows.map((shadow) => (
          <div key={shadow.class} className="group">
            <div className="bg-gradient-to-br from-neutral-50 to-white p-8 rounded-xl border border-neutral-200 mb-4 flex items-center justify-center">
              <div className={`w-20 h-20 bg-white rounded-xl ${shadow.class} flex items-center justify-center border border-neutral-100`}>
                <div className="w-8 h-8 bg-gradient-brand rounded-lg"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-neutral-800">{shadow.name}</h4>
                <button
                  onClick={() => copyToClipboard(shadow.class, shadow.name)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-neutral-100 transition-all duration-200"
                  title="Copiar classe"
                >
                  {copiedShadow === shadow.class ? (
                    <Check size={14} className="text-success-500" />
                  ) : (
                    <Copy size={14} className="text-neutral-500" />
                  )}
                </button>
              </div>
              
              <code className="text-xs bg-neutral-100 px-2 py-1 rounded font-mono text-neutral-700 block">
                {shadow.class}
              </code>
              
              <p className="text-xs text-neutral-600 font-medium">
                {shadow.usage}
              </p>
              
              <p className="text-xs text-neutral-500">
                {shadow.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8 max-w-7xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <Sparkles size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sistema de Sombras</h2>
          <p className="text-gray-600 dark:text-gray-300">Elevação e profundidade através de sombras consistentes</p>
        </div>
      </div>

      {renderShadowGrid(shadowLevels, 'Elevação Padrão')}
      {renderShadowGrid(specialShadows, 'Sombras Especiais')}

      {/* Interactive Demo */}
      <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-6">Demonstração Interativa</h3>
        
        <div className="bg-gradient-to-br from-neutral-50 to-white p-12 rounded-xl border border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {shadowLevels.map((shadow, index) => (
              <div key={shadow.class} className="text-center">
                <div 
                  className={`w-16 h-16 bg-white rounded-xl ${shadow.class} mx-auto mb-3 border border-neutral-100 hover:scale-110 transition-transform duration-200 cursor-pointer flex items-center justify-center`}
                  onClick={() => copyToClipboard(shadow.class, shadow.name)}
                >
                  <span className="text-sm font-semibold text-neutral-600">{index + 1}</span>
                </div>
                <p className="text-xs text-neutral-600">{shadow.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Diretrizes de Uso</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Hierarquia</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Use elevação crescente para importância</li>
              <li>• Mantenha consistência entre componentes</li>
              <li>• Evite muitos níveis na mesma tela</li>
              <li>• Teste em diferentes backgrounds</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Performance</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Prefira box-shadow a filter</li>
              <li>• Use transform para animações</li>
              <li>• Evite sombras em elementos móveis</li>
              <li>• Considere modo escuro</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShadowSystem;
