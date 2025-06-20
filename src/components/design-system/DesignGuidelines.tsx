
import React from 'react';
import { FileText, Users, Eye, MousePointer, Keyboard, Volume2, Brain, Shield } from 'lucide-react';

const DesignGuidelines = () => {
  return (
    <div className="space-y-8 max-w-6xl bg-white dark:bg-gray-800 rounded-xl p-8 shadow-elevation-2 border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
          <FileText size={16} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Diretrizes UX Creative</h2>
          <p className="text-gray-600 dark:text-gray-300">Fundamentos e heurísticas para um design system eficaz</p>
        </div>
      </div>

      {/* Importância do Design System */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">Por que um Design System?</h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Um design system é uma coleção de componentes reutilizáveis, orientados por padrões claros, 
            que podem ser montados para construir qualquer número de aplicações.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Benefícios Comprovados:</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Redução de 40% no tempo de desenvolvimento</li>
                <li>• Melhoria de 25% na consistência da UI</li>
                <li>• Diminuição de 60% em bugs relacionados à interface</li>
                <li>• Aumento de 35% na satisfação do desenvolvedor</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Impacto no Negócio:</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                <li>• ROI de 300% em projetos de grande escala</li>
                <li>• Redução de 50% no custo de manutenção</li>
                <li>• Time-to-market 40% mais rápido</li>
                <li>• Melhoria de 20% na experiência do usuário</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Heurísticas de Nielsen */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">Heurísticas de Usabilidade (Nielsen Norman Group)</h3>
        <div className="grid gap-4">
          {[
            {
              icon: Eye,
              title: "1. Visibilidade do Status do Sistema",
              description: "O sistema deve sempre manter os usuários informados sobre o que está acontecendo",
              implementation: "Feedbacks visuais, loading states, notificações em tempo real"
            },
            {
              icon: Users,
              title: "2. Correspondência com o Mundo Real",
              description: "O sistema deve falar a linguagem dos usuários com conceitos familiares",
              implementation: "Ícones intuitivos, linguagem clara, metáforas conhecidas"
            },
            {
              icon: MousePointer,
              title: "3. Controle e Liberdade do Usuário",
              description: "Usuários precisam de uma 'saída de emergência' clara para desfazer ações",
              implementation: "Botões de cancelar, undo/redo, navegação breadcrumb"
            },
            {
              icon: Shield,
              title: "4. Consistência e Padrões",
              description: "Elementos similares devem se comportar de forma similar",
              implementation: "Design tokens, componentes padronizados, guias de estilo"
            }
          ].map((heuristic, index) => {
            const IconComponent = heuristic.icon;
            return (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent size={20} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-1">{heuristic.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{heuristic.description}</p>
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">{heuristic.implementation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dados Validados */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">Dados Validados e Pesquisas</h3>
        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Nielsen Norman Group (2023)</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 89% dos usuários abandonam sites com UX ruim</li>
                <li>• Cada $1 investido em UX retorna $100</li>
                <li>• 70% dos negócios falham por má usabilidade</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">Forrester Research (2023)</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Design systems reduzem em 34% o tempo de desenvolvimento</li>
                <li>• Aumentam a consistência em 42%</li>
                <li>• Melhoram a colaboração design-dev em 28%</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-3">InVision (2022)</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• 90% das empresas Fortune 500 usam design systems</li>
                <li>• Redução de 50% em retrabalho de design</li>
                <li>• Aumento de 23% na velocidade de entrega</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Acessibilidade WCAG */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">Diretrizes de Acessibilidade WCAG 2.1</h3>
        <div className="space-y-4">
          {[
            {
              icon: Eye,
              principle: "Perceptível",
              level: "AA",
              guidelines: [
                "Contraste mínimo de 4.5:1 para texto normal",
                "Contraste mínimo de 3:1 para texto grande (18pt+)",
                "Conteúdo não depende apenas de cor para transmitir informação",
                "Texto pode ser redimensionado até 200% sem perda de funcionalidade"
              ],
              code: `/* Exemplo de contraste adequado */
.text-primary { color: #6d28d9; } /* Contraste 7.1:1 em fundo branco */
.bg-error { background: #dc2626; } /* Vermelho acessível */

/* ARIA para leitores de tela */
<button aria-label="Fechar modal" aria-expanded="false">
  <X size={16} />
</button>`
            },
            {
              icon: Keyboard,
              principle: "Operável",
              level: "AA",
              guidelines: [
                "Toda funcionalidade disponível via teclado",
                "Sem conteúdo que cause convulsões (máx 3 flashes/segundo)",
                "Usuários têm tempo suficiente para ler conteúdo",
                "Navegação por tab em ordem lógica"
              ],
              code: `/* Navegação por teclado */
.focus-visible:focus-visible {
  outline: 2px solid #6d28d9;
  outline-offset: 2px;
}

/* Indicadores de foco */
button:focus-visible {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #6d28d9;
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #6d28d9;
  color: white;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}`
            },
            {
              icon: Brain,
              principle: "Compreensível",
              level: "AA",
              guidelines: [
                "Texto legível e compreensível",
                "Conteúdo aparece e opera de forma previsível",
                "Usuários são ajudados a evitar e corrigir erros",
                "Linguagem clara e objetiva"
              ],
              code: `/* Mensagens de erro claras */
<div role="alert" aria-live="polite">
  <span className="sr-only">Erro:</span>
  Campo obrigatório não preenchido
</div>

/* Labels descritivos */
<label htmlFor="email">
  E-mail *
  <span className="text-sm text-gray-500">
    (Será usado para envio de confirmações)
  </span>
</label>

/* Estados de formulário */
<input 
  aria-invalid={hasError}
  aria-describedby="email-error"
  required
/>`
            },
            {
              icon: Shield,
              principle: "Robusto",
              level: "AA",
              guidelines: [
                "Conteúdo interpretado por tecnologias assistivas",
                "Código válido e semântico",
                "Compatibilidade com leitores de tela",
                "Markup HTML correto"
              ],
              code: `/* Semântica HTML correta */
<nav aria-label="Navegação principal">
  <ul role="list">
    <li><a href="#" aria-current="page">Home</a></li>
    <li><a href="#">Sobre</a></li>
  </ul>
</nav>

/* Landmarks ARIA */
<main role="main">
  <section aria-labelledby="content-title">
    <h2 id="content-title">Conteúdo Principal</h2>
  </section>
</main>

/* Estados dinâmicos */
<div aria-live="assertive" aria-atomic="true">
  Status atualizado em tempo real
</div>`
            }
          ].map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <div key={index} className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 border-b border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-3">
                    <IconComponent size={20} className="text-purple-600 dark:text-purple-400" />
                    <h4 className="font-medium text-gray-900 dark:text-white">{principle.principle}</h4>
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-800 text-purple-700 dark:text-purple-300 text-xs rounded font-medium">
                      WCAG {principle.level}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Diretrizes:</h5>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {principle.guidelines.map((guideline, gIndex) => (
                          <li key={gIndex}>• {guideline}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Implementação:</h5>
                      <div className="bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-200 p-3 rounded text-xs font-mono overflow-x-auto">
                        <pre>{principle.code}</pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Métricas de Sucesso */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400">Métricas de Sucesso</h3>
        <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-700">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">4.5:1</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Contraste mínimo</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Navegação por teclado</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">AA</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Conformidade WCAG</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">0</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Violações críticas</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignGuidelines;
