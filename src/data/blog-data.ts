import {
  Megaphone,
  TrendingUp,
  Target,
  PenTool,
  Brain,
  BarChart3,
} from "lucide-react";

export const categories = [
  { name: "Marketing Digital", icon: Megaphone, count: 85 },
  { name: "Vendas", icon: TrendingUp, count: 62 },
  { name: "Anúncios", icon: Target, count: 47 },
  { name: "Conteúdo", icon: PenTool, count: 73 },
  { name: "Inteligência Artificial", icon: Brain, count: 56 },
  { name: "Analytics", icon: BarChart3, count: 39 },
];

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
  content: string;
}

export const allArticles: Article[] = [
  {
    slug: "ia-revolucionando-marketing-digital-2026",
    title: "Como a IA Está Revolucionando o Marketing Digital em 2026",
    description:
      "Descubra as estratégias mais avançadas de inteligência artificial aplicadas ao marketing digital e como empresas estão multiplicando seus resultados com automação inteligente.",
    category: "Inteligência Artificial",
    author: "Equipe ND Digital",
    readTime: "12 min",
    date: "05 Fev 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    featured: true,
    content: `A inteligência artificial está transformando radicalmente a forma como fazemos marketing digital. Em 2026, as empresas que não adotaram IA em suas estratégias estão ficando para trás.

## O Cenário Atual

O marketing digital evoluiu de simples postagens em redes sociais para ecossistemas complexos de automação, personalização e análise preditiva. A IA é o motor por trás dessa transformação.

## Principais Aplicações da IA no Marketing

### 1. Personalização em Escala
A IA permite criar experiências únicas para cada usuário, analisando comportamentos, preferências e histórico de interações em tempo real.

### 2. Automação de Conteúdo
Ferramentas de IA podem gerar rascunhos de conteúdo, sugerir tópicos trending e otimizar textos para SEO automaticamente.

### 3. Chatbots Inteligentes
Os chatbots evoluíram de scripts básicos para agentes conversacionais capazes de resolver problemas complexos e gerar vendas.

### 4. Análise Preditiva
Algoritmos de machine learning preveem tendências de mercado, comportamento do consumidor e ROI de campanhas antes mesmo de serem lançadas.

## Resultados Comprovados

Empresas que implementaram IA em suas estratégias de marketing reportam:
- **40% de aumento** na taxa de conversão
- **60% de redução** no custo por aquisição
- **3x mais engagement** em campanhas personalizadas

## Conclusão

A IA não é mais uma tendência futura — é uma necessidade presente. As empresas que investirem agora em inteligência artificial para marketing terão uma vantagem competitiva significativa nos próximos anos.`,
  },
  {
    slug: "estrategias-anuncios-roi-10x",
    title: "5 Estratégias de Anúncios que Geram ROI de 10x",
    description: "Aprenda técnicas comprovadas para maximizar o retorno dos seus investimentos em tráfego pago.",
    category: "Anúncios",
    author: "Equipe ND Digital",
    readTime: "8 min",
    date: "03 Fev 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    featured: true,
    content: `Investir em anúncios pagos sem estratégia é jogar dinheiro fora. Conheça as 5 estratégias que nossos clientes usam para alcançar ROI de 10x.

## Estratégia 1: Segmentação por Intenção de Compra

Em vez de segmentar por dados demográficos, foque em sinais de intenção. Pessoas que pesquisam ativamente por soluções têm uma taxa de conversão 5x maior.

## Estratégia 2: Funil de Retargeting em Camadas

Crie sequências de retargeting que acompanham o usuário em diferentes estágios do funil, com mensagens cada vez mais específicas e persuasivas.

## Estratégia 3: Criativos Dinâmicos com IA

Use inteligência artificial para gerar variações de criativos automaticamente e testar centenas de combinações de imagem, texto e CTA.

## Estratégia 4: Otimização por Valor do Cliente

Configure suas campanhas para otimizar pelo valor do cliente ao longo do tempo (LTV), não apenas pelo custo por clique ou conversão inicial.

## Estratégia 5: Automação de Lances Baseada em Dados

Implemente estratégias de lances automatizados que ajustam em tempo real com base em dados históricos e sinais de mercado.

## Resultado

Quando combinadas, essas estratégias criam um sistema de aquisição previsível e escalável que gera ROI consistente de 10x ou mais.`,
  },
  {
    slug: "crm-inteligente-empresas-crescem",
    title: "CRM Inteligente: O Segredo das Empresas que Mais Crescem",
    description: "Como implementar um CRM que realmente gera resultados e retém clientes.",
    category: "Vendas",
    author: "Equipe ND Digital",
    readTime: "10 min",
    date: "01 Fev 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    featured: true,
    content: `Um CRM não é apenas uma ferramenta de gestão de contatos. Quando bem implementado, é o coração do crescimento de uma empresa.

## O Que é um CRM Inteligente?

Um CRM inteligente vai além do armazenamento de dados. Ele analisa comportamentos, prevê necessidades e automatiza ações para maximizar o valor de cada cliente.

## Pilares de um CRM Eficiente

### 1. Centralização de Dados
Todas as interações do cliente — e-mails, ligações, compras, suporte — em um único lugar.

### 2. Automação de Follow-ups
Sequências automáticas que mantêm o relacionamento ativo sem esforço manual.

### 3. Scoring de Leads
Classificação automática de leads por probabilidade de conversão, permitindo que a equipe de vendas foque nos mais promissores.

### 4. Análise de Churn
Identificação precoce de clientes em risco de cancelamento, permitindo ações preventivas.

## Implementação Prática

A implementação de um CRM inteligente deve ser feita em fases: configuração básica, migração de dados, treinamento da equipe e otimização contínua.

## Conclusão

Empresas com CRM bem implementado crescem em média 29% mais rápido que seus concorrentes. O investimento se paga em poucos meses.`,
  },
  {
    slug: "automacao-whatsapp-guia-completo-2026",
    title: "Automação de WhatsApp: Guia Completo 2026",
    description: "Tudo que você precisa saber para automatizar seu WhatsApp Business e escalar atendimento e vendas.",
    category: "Marketing Digital",
    author: "Equipe ND Digital",
    readTime: "7 min",
    date: "30 Jan 2026",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
    content: `O WhatsApp é o canal de comunicação mais utilizado no Brasil, e automatizá-lo pode transformar a forma como sua empresa atende e vende.

## Por Que Automatizar o WhatsApp?

Com mais de 120 milhões de usuários ativos no Brasil, o WhatsApp é onde seus clientes estão. A automação permite escalar o atendimento sem perder a personalização.

## Tipos de Automação

### Chatbots Simples
Respostas automáticas para perguntas frequentes, horário de funcionamento e informações básicas.

### Fluxos de Vendas
Sequências automatizadas que guiam o cliente do interesse à compra, com qualificação automática.

### Integração com CRM
Sincronização automática de conversas e dados com seu CRM para visão completa do cliente.

## Melhores Práticas

- Sempre ofereça opção de falar com humano
- Personalize as mensagens com nome do cliente
- Respeite horários de envio
- Monitore métricas de satisfação

## Ferramentas Recomendadas

Existem diversas ferramentas no mercado. O ideal é escolher uma que se integre com seu CRM e permita escalabilidade.`,
  },
  {
    slug: "conteudo-que-converte-vendas",
    title: "Como Criar Conteúdo que Converte em Vendas",
    description: "Estratégias práticas para criar conteúdo que não apenas engaja, mas gera receita real para seu negócio.",
    category: "Conteúdo",
    author: "Equipe ND Digital",
    readTime: "9 min",
    date: "28 Jan 2026",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400&q=80",
    content: `Criar conteúdo que apenas gera likes não paga as contas. Aprenda a criar conteúdo que realmente converte em vendas.

## O Problema do Conteúdo Sem Estratégia

A maioria das empresas cria conteúdo sem um objetivo claro de negócio. O resultado são milhares de seguidores que nunca compram nada.

## Framework de Conteúdo que Converte

### 1. Conteúdo de Atração
Posts e vídeos que atraem o público ideal para o seu ecossistema. Foco em problemas que seu produto resolve.

### 2. Conteúdo de Nutrição
Materiais que educam e constroem autoridade: e-books, webinars, newsletters com insights valiosos.

### 3. Conteúdo de Conversão
CTAs diretos, cases de sucesso, ofertas especiais e depoimentos que eliminam objeções.

## Métricas que Importam

Esqueça vanity metrics. Foque em: taxa de conversão do conteúdo, custo por lead gerado, e receita atribuída ao conteúdo.

## Conclusão

Conteúdo que converte segue uma estrutura clara e mensurável. Sem essa estrutura, você está apenas criando ruído.`,
  },
  {
    slug: "google-ads-vs-meta-ads",
    title: "Google Ads vs Meta Ads: Qual Escolher?",
    description: "Análise comparativa completa entre Google Ads e Meta Ads para ajudar você a investir melhor.",
    category: "Anúncios",
    author: "Equipe ND Digital",
    readTime: "6 min",
    date: "25 Jan 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80",
    content: `A eterna dúvida de quem investe em tráfego pago: Google Ads ou Meta Ads? A resposta não é simples, mas vamos te ajudar a decidir.

## Google Ads: Captura de Demanda

O Google Ads é ideal para capturar pessoas que já estão buscando ativamente por uma solução. A intenção de compra é alta, e o ROI tende a ser mais previsível.

### Quando Usar Google Ads
- Produtos/serviços com alta demanda de busca
- Negócios locais (Google Maps)
- E-commerce com catálogo amplo

## Meta Ads: Geração de Demanda

O Meta Ads (Facebook e Instagram) é perfeito para criar demanda, construir marca e alcançar públicos que ainda não conhecem sua solução.

### Quando Usar Meta Ads
- Produtos visuais ou aspiracionais
- Lançamentos e novidades
- Construção de audiência

## A Estratégia Ideal

Na prática, os melhores resultados vêm da combinação: use Meta Ads para gerar awareness e Google Ads para converter quem já está interessado.

## Orçamento

Para iniciantes, recomendamos começar com 60% Google Ads e 40% Meta Ads, ajustando conforme os dados.`,
  },
  {
    slug: "metricas-gestor-marketing",
    title: "Métricas que Todo Gestor de Marketing Precisa Acompanhar",
    description: "As métricas essenciais que separam gestores de marketing amadores dos profissionais.",
    category: "Analytics",
    author: "Equipe ND Digital",
    readTime: "5 min",
    date: "22 Jan 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
    content: `Dados sem interpretação são apenas números. Conheça as métricas que realmente importam para um gestor de marketing.

## Métricas de Aquisição
- **CAC (Custo de Aquisição de Cliente)**: Quanto custa trazer um novo cliente
- **CPL (Custo por Lead)**: Investimento necessário para gerar cada lead
- **Taxa de Conversão**: Percentual de visitantes que se tornam leads/clientes

## Métricas de Retenção
- **LTV (Lifetime Value)**: Valor total que um cliente gera ao longo do relacionamento
- **Churn Rate**: Percentual de clientes que cancelam por período
- **NPS (Net Promoter Score)**: Satisfação e propensão a recomendar

## Métricas de Engajamento
- **Taxa de Abertura de E-mails**: Eficácia dos assuntos
- **CTR (Click-Through Rate)**: Eficácia dos CTAs
- **Tempo na Página**: Relevância do conteúdo

## A Métrica Mais Importante

ROI. No final do dia, todo marketing deve ser medido pelo retorno sobre o investimento. Se uma ação não gera retorno, precisa ser revisada.`,
  },
  {
    slug: "influenciadores-virtuais-futuro-marketing",
    title: "Influenciadores Virtuais: O Futuro do Marketing",
    description: "Como influenciadores criados por IA estão mudando as regras do marketing de influência.",
    category: "Inteligência Artificial",
    author: "Equipe ND Digital",
    readTime: "11 min",
    date: "20 Jan 2026",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&q=80",
    content: `Influenciadores virtuais — personagens criados por inteligência artificial — estão transformando o marketing de influência como conhecemos.

## O Que São Influenciadores Virtuais?

São personagens digitais com aparência hiper-realista, criados e controlados por marcas usando IA. Eles têm personalidade, história e interagem com seguidores como qualquer influenciador humano.

## Vantagens

### Controle Total da Marca
Diferente de influenciadores humanos, os virtuais nunca geram polêmica, nunca se atrasam e sempre seguem o briefing.

### Escalabilidade
Um influenciador virtual pode estar em múltiplas campanhas simultaneamente, em qualquer idioma, 24 horas por dia.

### Custos Previsíveis
Sem cachês astronômicos. O investimento é em tecnologia e criação, com custos que diminuem com o tempo.

## Cases de Sucesso

Marcas como Magazine Luiza (Lu), Natura e Casas Bahia já utilizam influenciadores virtuais com grande sucesso no mercado brasileiro.

## Como Implementar

A criação de um influenciador virtual envolve: design do personagem, definição de personalidade, criação de conteúdo com IA e gestão de redes sociais.

## Conclusão

Os influenciadores virtuais não vão substituir os humanos, mas vão se tornar um complemento essencial nas estratégias de marketing.`,
  },
  {
    slug: "funil-vendas-estrategia-a-z",
    title: "Funil de Vendas: Estratégia de A a Z",
    description: "Guia definitivo para construir um funil de vendas que converte em cada etapa.",
    category: "Vendas",
    author: "Equipe ND Digital",
    readTime: "14 min",
    date: "18 Jan 2026",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
    content: `Um funil de vendas bem construído é a diferença entre crescer de forma previsível e depender de sorte.

## O Que é um Funil de Vendas?

É o caminho que um potencial cliente percorre desde o primeiro contato até a compra. Cada etapa tem um objetivo específico e métricas próprias.

## Etapas do Funil

### Topo do Funil (Awareness)
O potencial cliente descobre que tem um problema. Conteúdo educativo, posts em redes sociais e anúncios de awareness são as principais ferramentas.

### Meio do Funil (Consideração)
O lead já reconhece o problema e está avaliando soluções. E-books, webinars, cases de sucesso e e-mails de nutrição são essenciais.

### Fundo do Funil (Decisão)
O lead está pronto para comprar. Ofertas, demonstrações, trials gratuitos e depoimentos ajudam a fechar a venda.

## Métricas por Etapa

- **Topo**: Volume de visitantes e leads gerados
- **Meio**: Taxa de qualificação e engajamento
- **Fundo**: Taxa de conversão e ticket médio

## Automação do Funil

Use ferramentas de automação para mover leads automaticamente entre etapas, enviar conteúdo relevante e alertar a equipe de vendas no momento certo.

## Conclusão

O segredo de um funil eficiente é a otimização contínua. Analise os dados, identifique gargalos e ajuste cada etapa constantemente.`,
  },
];

export const getFeaturedArticles = () => allArticles.filter((a) => a.featured);
export const getLatestArticles = () => allArticles.filter((a) => !a.featured);
export const getArticleBySlug = (slug: string) => allArticles.find((a) => a.slug === slug);
export const getArticlesByCategory = (category: string) =>
  allArticles.filter((a) => a.category === category);
