import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getArticleBySlug, allArticles } from "@/data/blog-data";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background relative overflow-hidden">
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <Navbar />
        <div className="pt-28 md:pt-36 pb-20 px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-8">O artigo que você procura não existe ou foi removido.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related articles (same category, excluding current)
  const relatedArticles = allArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  // Parse markdown-like content into sections
  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) {
        elements.push(<br key={i} />);
      } else if (trimmed.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-lg md:text-xl font-bold text-foreground mt-8 mb-3">
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-xl md:text-2xl font-bold text-foreground mt-10 mb-4">
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("- **")) {
        const match = trimmed.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
        if (match) {
          elements.push(
            <li key={i} className="text-sm md:text-base text-muted-foreground mb-2 ml-4 list-disc">
              <strong className="text-foreground">{match[1]}</strong>
              {match[2] ? `: ${match[2]}` : ""}
            </li>
          );
        }
      } else if (trimmed.startsWith("- ")) {
        elements.push(
          <li key={i} className="text-sm md:text-base text-muted-foreground mb-2 ml-4 list-disc">
            {trimmed.replace("- ", "")}
          </li>
        );
      } else {
        // Handle inline bold
        const parts = trimmed.split(/(\*\*.*?\*\*)/g);
        elements.push(
          <p key={i} className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
            {parts.map((part, j) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong key={j} className="text-foreground font-semibold">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Tech Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

      <Navbar />

      {/* Article Header */}
      <article className="pt-28 md:pt-36 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 animate-fade-up">
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <Link to={`/blog?categoria=${encodeURIComponent(article.category)}`} className="hover:text-primary transition-colors">
              {article.category}
            </Link>
          </div>

          {/* Category Badge */}
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4 animate-fade-up">
            {article.category}
          </span>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight animate-fade-up stagger-1">
            {article.title}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground mb-6 animate-fade-up stagger-2">
            {article.description}
          </p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 animate-fade-up stagger-3">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-primary" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-primary" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              {article.readTime} de leitura
            </span>
          </div>

          {/* Cover Image */}
          <div className="relative rounded-lg overflow-hidden mb-10 animate-fade-up stagger-3">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="prose-custom animate-fade-up stagger-4">
            {renderContent(article.content)}
          </div>

          {/* CTA */}
          <div className="mt-12 p-6 md:p-8 bg-card border border-border rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              Quer aplicar essas estratégias no seu negócio?
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Fale com nossos especialistas e descubra como podemos ajudar.
            </p>
            <a
              href="http://wa.me/62994484199"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Fale com um especialista
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-10 md:py-16 px-4 md:px-6 bg-card">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8">
              Artigos Relacionados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  to={`/blog/${related.slug}`}
                  className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-primary/90 text-primary-foreground text-[10px] font-semibold rounded">
                      {related.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm md:text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {related.readTime}
                      </span>
                      <span>{related.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogArticle;
