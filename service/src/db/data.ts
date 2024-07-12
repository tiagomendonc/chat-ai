export interface MessageResponse {
  [key: string]: string;
}

export const responses: MessageResponse = {
  'Me diga sobre a diferença de um modelo de linguagem generalista e um modelo especializado.':
    'Modelos de linguagem generalistas, como GPT-3 e BERT, são treinados em vastos conjuntos de dados que cobrem uma ampla gama de tópicos, tornando-os versáteis para diversas aplicações, mas não necessariamente otimizados para tarefas específicas. Em contraste, modelos especializados, como BioBERT ou FinBERT, são treinados em dados específicos de um domínio, oferecendo maior precisão e relevância para tarefas dentro desse campo, mas com flexibilidade limitada fora dele. A escolha entre um modelo generalista e um especializado depende das necessidades específicas de precisão e abrangência da aplicação.',
  'Poderia me explicar melhor o processo de Fine-Tuning e um modelo de linguagem?':
    'O fine-tuning de um modelo de linguagem é o processo de pegar um modelo pré-treinado, geralmente em um grande corpus de dados gerais, e ajustá-lo para uma tarefa específica ou um domínio particular usando um conjunto menor de dados relevantes. Durante o fine-tuning, o modelo é treinado novamente, mas com uma taxa de aprendizado menor e por menos épocas, permitindo que ele aprenda os padrões específicos da nova tarefa sem esquecer o conhecimento geral adquirido anteriormente. Esse processo melhora significativamente o desempenho do modelo em aplicações específicas, como análise de sentimento, resposta a perguntas, ou classificação de textos em um determinado setor.',
  'O que seria uma function e como ela impacta uma inteligência artificial?':
    'Uma função (function) em programação é um bloco de código projetado para executar uma tarefa específica e pode ser reutilizado em diferentes partes de um programa. Em inteligência artificial, funções são fundamentais porque permitem modularidade, reutilização e organização de código, facilitando a implementação de algoritmos complexos. Funções bem definidas ajudam a quebrar problemas grandes em partes menores e gerenciáveis, tornando o desenvolvimento, teste e manutenção de modelos de IA mais eficientes. Além disso, funções permitem a abstração de operações matemáticas e lógicas, essencial para a construção e ajuste de modelos de aprendizado de máquina, impactando diretamente a eficiência e eficácia dos sistemas de IA.',
};
