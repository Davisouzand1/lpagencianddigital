import { useState } from "react";
import {
  Megaphone,
  TrendingUp,
  Target,
  PenTool,
  Brain,
  BarChart3,
  Clock,
  User,
  BookOpen,
  ArrowRight,
  Mail,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { name: "Marketing Digital", icon: Megaphone, count: 85 },
  { name: "Vendas", icon: TrendingUp, count: 62 },
  { name: "Anúncios", icon: Target, count: 47 },
  { name: "Conteúdo", icon: PenTool, count: 73 },
  { name: "Inteligência Artificial", icon: Brain, count: 56 },
  { name: "Analytics", icon: BarChart3, count: 39 },
];

const featuredArticle = {
  title: "Como a IA Está Revolucionando o Marketing Digital em 2026",
  description:
    "Descubra as estratégias mais avançadas de inteligência artificial aplicadas ao marketing digital e como empresas estão multiplicando seus resultados com automação inteligente.",
  category: "Inteligência Artificial",
  author: "Equipe ND Digital",
  readTime: "12 min",
  date: "05 Fev 2026",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
};

const featuredArticles = [
  {
    title: "5 Estratégias de Anúncios que Geram ROI de 10x",
    description: "Aprenda técnicas comprovadas para maximizar o retorno dos seus investimentos em tráfego pago.",
    category: "Anúncios",
    author: "Equipe ND Digital",
    readTime: "8 min",
    date: "03 Fev 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "CRM Inteligente: O Segredo das Empresas que Mais Crescem",
    description: "Como implementar um CRM que realmente gera resultados e retém clientes.",
    category: "Vendas",
    author: "Equipe ND Digital",
    readTime: "10 min",
    date: "01 Fev 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

const latestArticles = [
  {
    title: "Automação de WhatsApp: Guia Completo 2026",
    category: "Marketing Digital",
    date: "30 Jan 2026",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=400&q=80",
  },
  {
    title: "Como Criar Conteúdo que Converte em Vendas",
    category: "Conteúdo",
    date: "28 Jan 2026",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=400&q=80",
  },
  {
    title: "Google Ads vs Meta Ads: Qual Escolher?",
    category: "Anúncios",
    date: "25 Jan 2026",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&q=80",
  },
  {
    title: "Métricas que Todo Gestor de Marketing Precisa Acompanhar",
    category: "Analytics",
    date: "22 Jan 2026",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80",
  },
  {
    title: "Influenciadores Virtuais: O Futuro do Marketing",
    category: "Inteligência Artificial",
    date: "20 Jan 2026",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=400&q=80",
  },
  {
    title: "Funil de Vendas: Estratégia de A a Z",
    category: "Vendas",
    date: "18 Jan 2026",
    readTime: "14 min",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80",
  },
];

const Blog = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-20 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium">ND Digital Blog</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-tight animate-fade-up stagger-1">
            Insights que <span className="text-primary">transformam</span><br />
            negócios digitais
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 animate-fade-up stagger-2">
            Estratégias comprovadas de marketing digital, vendas, conteúdo e inteligência artificial
            para acelerar o crescimento do seu negócio.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 animate-fade-up stagger-3">
            {[
              { value: "+500", label: "Artigos" },
              { value: "+50K", label: "Leitores" },
              { value: "+100", label: "Estratégias" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-10 md:py-16 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-full mb-3">
              CATEGORIAS
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">Explore por Tema</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(isActive ? null : cat.name)}
                  className={`group flex flex-col items-center gap-3 p-4 md:p-6 border rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-primary/10 border-primary/50 scale-[1.02]"
                      : "bg-card border-border hover:border-primary/30 hover:bg-card/80"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-primary/20 border-primary/30"
                        : "bg-primary/10 border-primary/20 group-hover:scale-110"
                    } border`}
                  >
                    <Icon className={`w-5 h-5 text-primary transition-transform duration-300 ${!isActive && "group-hover:rotate-12"}`} />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-foreground text-center">{cat.name}</span>
                  <span className="text-[10px] md:text-xs text-muted-foreground">{cat.count} artigos</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-card relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-full mb-3">
              DESTAQUE
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground">Artigos em Destaque</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
            {/* Main Featured */}
            <a href="#" className="group block bg-background border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300">
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold rounded">
                    Em Destaque
                  </span>
                  <span className="px-2.5 py-1 bg-background/80 text-foreground text-[10px] md:text-xs font-medium rounded backdrop-blur-sm">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{featuredArticle.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{featuredArticle.author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featuredArticle.readTime}</span>
                </div>
              </div>
            </a>

            {/* Side Featured */}
            <div className="flex flex-col gap-4 md:gap-6">
              {featuredArticles.map((article, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex flex-col sm:flex-row bg-background border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 flex-1"
                >
                  <div className="relative w-full sm:w-40 md:w-48 h-40 sm:h-auto overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-background/80 text-foreground text-[10px] font-medium rounded backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <h3 className="text-sm md:text-base font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{article.description}</p>
                    <div className="flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-primary/10 via-card to-primary/5 border border-primary/20 rounded-lg p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-xs text-primary font-medium">+10.000 inscritos</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3">
                Receba insights <span className="text-primary">exclusivos</span>
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-lg mx-auto">
                Toda semana enviamos as melhores estratégias de marketing digital, vendas e IA direto na sua caixa de entrada.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Digite seu melhor e-mail"
                  required
                  className="flex-1 px-4 py-3 text-sm bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 whitespace-nowrap"
                >
                  {isSubscribed ? "✓ Inscrito com sucesso!" : "Inscrever-se"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-card relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8 md:mb-12">
            <div>
              <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-full mb-3">
                RECENTES
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground">Últimos Artigos</h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all">
              Ver todos <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {latestArticles.map((article, i) => (
              <a
                key={i}
                href="#"
                className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${0.1 * i}s` }}
              >
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary/90 text-primary-foreground text-[10px] font-semibold rounded">
                    {article.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm md:text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                    <span>{article.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <a href="#" className="inline-flex items-center gap-2 text-sm text-primary font-medium">
              Ver todos os artigos <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <BookOpen className="w-10 h-10 text-primary mx-auto mb-6" />
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Quer resultados <span className="text-primary">reais</span>?
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Conheça nossas soluções de crescimento digital e descubra como podemos transformar o seu negócio.
          </p>
          <a
            href="http://wa.me/62994484199"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 text-sm md:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            Fale com um especialista
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
