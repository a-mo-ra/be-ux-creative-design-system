
import React, { useState } from 'react';
import { Type, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const TypographyScale = () => {
  const [copiedClass, setCopiedClass] = useState<string | null>(null);

  const typographyScale = [
    {
      name: 'Display 2XL',
      class: 'text-display-2xl',
      size: '72px / 4.5rem',
      usage: 'Hero headings, landing pages',
      example: 'Design que Inspira'
    },
    {
      name: 'Display XL',
      class: 'text-display-xl',
      size: '60px / 3.75rem',
      usage: 'Títulos principais, seções importantes',
      example: 'Biblioteca de Componentes'
    },
    {
      name: 'Display LG',
      class: 'text-display-lg',
      size: '48px / 3rem',
      usage: 'Títulos de página, headers',
      example: 'Sistema de Design'
    },
    {
      name: 'Display MD',
      class: 'text-display-md',
      size: '36px / 2.25rem',
      usage: 'Títulos de seção',
      example: 'Componentes UI'
    },
    {
      name: 'Display SM',
      class: 'text-display-sm',
      size: '30px / 1.875rem',
      usage: 'Subtítulos importantes',
      example: 'Tokens de Design'
    },
    {
      name: 'Display XS',
      class: 'text-display-xs',
      size: '24px / 1.5rem',
      usage: 'Títulos de cards, modais',
      example: 'Guia de Estilo'
    }
  ];

  const textSizes = [
    {
      name: 'Text XL',
      class: 'text-xl',
      size: '20px',
      usage: 'Lead paragraphs, introducoes',
      example: 'Este é um parágrafo introdutório que apresenta o conteúdo.'
    },
    {
      name: 'Text LG',
      class: 'text-lg',
      size: '18px',
      usage: 'Texto destacado, subtítulos',
      example: 'Texto destacado para chamar atenção do usuário.'
    },
    {
      name: 'Text Base',
      class: 'text-base',
      size: '16px',
      usage: 'Texto padrão, corpo do conteúdo',
      example: 'Este é o texto padrão usado na maioria dos conteúdos.'
    },
    {
      name: 'Text SM',
      class: 'text-sm',
      size: '14px',
      usage: 'Texto secundário, labels',
      example: 'Informações secundárias e rótulos de formulários.'
    },
    {
      name: 'Text XS',
      class: 'text-xs',
      size: '12px',
      usage: 'Captions, metadados',
      example: 'Legendas, timestamps e informações auxiliares.'
    }
  ];

  const copyToClipboard = async (className: string) => {
    try {
      await navigator.clipboard.writeText(className);
      setCopiedClass(className);
      toast({
        title: "Copiado!",
        description: `Classe ${className} copiada para a área de transferência.`,
      });
      setTimeout(() => setCopiedClass(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar a classe.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Type size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Sistema de Tipografia</h2>
          <p className="text-neutral-600">Escala tipográfica hierárquica para mobile e desktop</p>
        </div>
      </div>

      {/* Display Scale */}
      <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Display Scale</h3>
        <p className="text-neutral-600 text-sm mb-6">
          Para títulos, headings e elementos de destaque visual.
        </p>

        <div className="space-y-6">
          {typographyScale.map((item) => (
            <div key={item.class} className="group p-4 border border-neutral-200 rounded-lg hover:shadow-elevation-1 transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-neutral-700">{item.name}</span>
                    <code className="text-xs bg-neutral-100 px-2 py-1 rounded font-mono text-neutral-600">
                      {item.size}
                    </code>
                    <button
                      onClick={() => copyToClipboard(item.class)}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-neutral-100 transition-all duration-200"
                      title="Copiar classe"
                    >
                      {copiedClass === item.class ? (
                        <Check size={14} className="text-success-500" />
                      ) : (
                        <Copy size={14} className="text-neutral-500" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500 mb-3">{item.usage}</p>
                </div>
              </div>
              
              <div className={`${item.class} font-display font-semibold text-neutral-900 leading-tight`}>
                {item.example}
              </div>
              
              <code className="text-xs text-neutral-500 mt-2 block">
                className="{item.class} font-display font-semibold"
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Text Scale */}
      <div className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Text Scale</h3>
        <p className="text-neutral-600 text-sm mb-6">
          Para corpo de texto, parágrafos e conteúdo geral.
        </p>

        <div className="space-y-6">
          {textSizes.map((item) => (
            <div key={item.class} className="group p-4 border border-neutral-200 rounded-lg hover:shadow-elevation-1 transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium text-neutral-700">{item.name}</span>
                    <code className="text-xs bg-neutral-100 px-2 py-1 rounded font-mono text-neutral-600">
                      {item.size}
                    </code>
                    <button
                      onClick={() => copyToClipboard(item.class)}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-neutral-100 transition-all duration-200"
                      title="Copiar classe"
                    >
                      {copiedClass === item.class ? (
                        <Check size={14} className="text-success-500" />
                      ) : (
                        <Copy size={14} className="text-neutral-500" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-neutral-500 mb-3">{item.usage}</p>
                </div>
              </div>
              
              <div className={`${item.class} text-neutral-700 leading-relaxed`}>
                {item.example}
              </div>
              
              <code className="text-xs text-neutral-500 mt-2 block">
                className="{item.class} text-neutral-700"
              </code>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Guidelines */}
      <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Diretrizes Tipográficas</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Hierarquia Visual</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Use Display scales para títulos principais</li>
              <li>• Mantenha consistência no line-height</li>
              <li>• Contraste visual entre níveis hierárquicos</li>
              <li>• Limite a 3-4 tamanhos por página</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 mb-3">Legibilidade</h4>
            <ul className="space-y-2 text-neutral-600">
              <li>• Mínimo 16px para texto principal</li>
              <li>• Line-height entre 1.4-1.6 para leitura</li>
              <li>• Máximo 75 caracteres por linha</li>
              <li>• Teste em diferentes dispositivos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypographyScale;
