
import React, { useState } from 'react';
import { Copy, Check, Palette } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ColorTokens = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const colorCategories = [
    {
      name: 'Brand Colors',
      description: 'Cores principais da marca, use para elementos de destaque e identidade visual.',
      colors: [
        { name: 'brand-50', value: '#fef7ff', usage: 'Backgrounds sutis' },
        { name: 'brand-100', value: '#fdeeff', usage: 'Hover states suaves' },
        { name: 'brand-200', value: '#faddff', usage: 'Borders e divisores' },
        { name: 'brand-300', value: '#f5bbff', usage: 'Elementos inativos' },
        { name: 'brand-400', value: '#ed89ff', usage: 'Ícones secundários' },
        { name: 'brand-500', value: '#e455ff', usage: 'Cor principal da marca' },
        { name: 'brand-600', value: '#d932f7', usage: 'Hover em botões primários' },
        { name: 'brand-700', value: '#bc1de0', usage: 'Active states' },
        { name: 'brand-800', value: '#9818b8', usage: 'Texto em fundos claros' },
        { name: 'brand-900', value: '#7d1a95', usage: 'Headings importantes' }
      ]
    },
    {
      name: 'Neutral Colors',
      description: 'Escala de cinzas para textos, backgrounds e elementos estruturais.',
      colors: [
        { name: 'neutral-50', value: '#fafafa', usage: 'Background principal' },
        { name: 'neutral-100', value: '#f5f5f5', usage: 'Background cards' },
        { name: 'neutral-200', value: '#e5e5e5', usage: 'Borders suaves' },
        { name: 'neutral-300', value: '#d4d4d4', usage: 'Borders padrão' },
        { name: 'neutral-400', value: '#a3a3a3', usage: 'Texto placeholder' },
        { name: 'neutral-500', value: '#737373', usage: 'Texto secundário' },
        { name: 'neutral-600', value: '#525252', usage: 'Texto corpo' },
        { name: 'neutral-700', value: '#404040', usage: 'Texto títulos' },
        { name: 'neutral-800', value: '#262626', usage: 'Texto principal' },
        { name: 'neutral-900', value: '#171717', usage: 'Texto heading' }
      ]
    },
    {
      name: 'Status Colors',
      description: 'Cores semânticas para feedback, estados e notificações.',
      colors: [
        { name: 'success-500', value: '#22c55e', usage: 'Sucesso, confirmação' },
        { name: 'warning-500', value: '#f59e0b', usage: 'Avisos, atenção' },
        { name: 'error-500', value: '#ef4444', usage: 'Erros, exclusão' },
        { name: 'info-500', value: '#3b82f6', usage: 'Informação, neutralidade' }
      ]
    }
  ];

  const copyToClipboard = async (colorName: string, value: string) => {
    try {
      await navigator.clipboard.writeText(`bg-${colorName}`);
      setCopiedToken(colorName);
      toast({
        title: "Copiado!",
        description: `Token bg-${colorName} copiado para a área de transferência.`,
      });
      setTimeout(() => setCopiedToken(null), 2000);
    } catch (err) {
      toast({
        title: "Erro",
        description: "Não foi possível copiar o token.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
          <Palette size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Cores & Tokens</h2>
          <p className="text-neutral-600">Sistema completo de cores com tokens Tailwind CSS</p>
        </div>
      </div>

      {colorCategories.map((category) => (
        <div key={category.name} className="bg-white rounded-xl p-6 shadow-elevation-2 border border-neutral-200/50">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">{category.name}</h3>
            <p className="text-neutral-600 text-sm">{category.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {category.colors.map((color) => (
              <div
                key={color.name}
                className="group relative bg-neutral-50 rounded-lg p-3 border border-neutral-200 hover:shadow-elevation-2 transition-all duration-200"
              >
                <div
                  className="w-full h-12 rounded-lg mb-3 border border-neutral-200"
                  style={{ backgroundColor: color.value }}
                ></div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <code className="text-xs font-mono font-medium text-neutral-800 bg-neutral-100 px-2 py-1 rounded">
                      {color.name}
                    </code>
                    <button
                      onClick={() => copyToClipboard(color.name, color.value)}
                      className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-neutral-200 transition-all duration-200"
                      title="Copiar classe Tailwind"
                    >
                      {copiedToken === color.name ? (
                        <Check size={14} className="text-success-500" />
                      ) : (
                        <Copy size={14} className="text-neutral-500" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-xs text-neutral-500 uppercase tracking-wide font-medium">
                    {color.value}
                  </p>
                  
                  <p className="text-xs text-neutral-600">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Usage Guidelines */}
      <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-200/50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">Diretrizes de Uso</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium text-neutral-800 mb-2">✅ Boas Práticas</h4>
            <ul className="space-y-1 text-neutral-600">
              <li>• Use brand-500 como cor principal</li>
              <li>• Mantenha contraste 4.5:1 para textos</li>
              <li>• Use cores semânticas para feedback</li>
              <li>• Teste em modo escuro quando aplicável</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-neutral-800 mb-2">❌ Evite</h4>
            <ul className="space-y-1 text-neutral-600">
              <li>• Misturar escalas de cores diferentes</li>
              <li>• Usar cores muito vibrantes para texto</li>
              <li>• Ignorar acessibilidade</li>
              <li>• Criar variações não padronizadas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorTokens;
