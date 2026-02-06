import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  Clock,
  User,
  BookOpen,
  ArrowRight,
  Mail,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  categories,
  getFeaturedArticles,
  getLatestArticles,
  getArticlesByCategory,
  allArticles,
} from "@/data/blog-data";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const activeCategory = searchParams.get("categoria");

  const setActiveCategory = (category: string | null) => {
    if (category) {
      setSearchParams({ categoria: category });
    } else {
      setSearchParams({});
    }
  };

  const featuredArticles = getFeaturedArticles();
  const latestArticles = getLatestArticles();

  // Filtered articles based on active category
  const filteredFeatured = activeCategory
    ? featuredArticles.filter((a) => a.category === activeCategory)
    : featuredArticles;

  const filteredLatest = activeCategory
    ? getArticlesByCategory(activeCategory).filter((a) => !a.featured)
    : latestArticles;

  const allFiltered = activeCategory ? getArticlesByCategory(activeCategory) : null;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  const mainFeatured = featuredArticles[0];

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

          {/* Active filter indicator */}
          {activeCategory && (
            <div className="text-center mt-6">
              <span className="text-sm text-muted-foreground">
                Mostrando artigos de{" "}
                <span className="text-primary font-semibold">{activeCategory}</span>
              </span>
              <button
                onClick={() => setActiveCategory(null)}
                className="ml-3 text-sm text-primary hover:underline"
              >
                Limpar filtro
              </button>
            </div>
          )}
        </div>
      </section>

      {/* When filtering, show all filtered articles in a grid */}
      {activeCategory && allFiltered && allFiltered.length > 0 && (
        <section className="py-10 md:py-16 px-4 md:px-6 bg-card relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8">
              {activeCategory} <span className="text-muted-foreground text-lg font-normal">({allFiltered.length} artigos)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {allFiltered.map((article, i) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
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
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{article.description}</p>
                    <div className="flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                      <span>{article.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Articles (hidden when filtering) */}
      {!activeCategory && (
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
              {mainFeatured && (
                <Link
                  to={`/blog/${mainFeatured.slug}`}
                  className="group block bg-background border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-48 md:h-64 overflow-hidden">
                    <img
                      src={mainFeatured.image}
                      alt={mainFeatured.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 bg-primary text-primary-foreground text-[10px] md:text-xs font-semibold rounded">
                        Em Destaque
                      </span>
                      <span className="px-2.5 py-1 bg-background/80 text-foreground text-[10px] md:text-xs font-medium rounded backdrop-blur-sm">
                        {mainFeatured.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {mainFeatured.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{mainFeatured.description}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{mainFeatured.author}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{mainFeatured.readTime}</span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Side Featured */}
              <div className="flex flex-col gap-4 md:gap-6">
                {featuredArticles.slice(1).map((article) => (
                  <Link
                    key={article.slug}
                    to={`/blog/${article.slug}`}
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
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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

      {/* Latest Articles (hidden when filtering) */}
      {!activeCategory && (
        <section className="py-10 md:py-16 px-4 md:px-6 bg-card relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8 md:mb-12">
              <div>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-full mb-3">
                  RECENTES
                </span>
                <h2 className="text-2xl md:text-4xl font-bold text-foreground">Últimos Artigos</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {latestArticles.map((article, i) => (
                <Link
                  key={article.slug}
                  to={`/blog/${article.slug}`}
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
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
