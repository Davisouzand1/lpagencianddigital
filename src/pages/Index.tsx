import { 
  Globe, 
  MessageSquare, 
  TrendingUp, 
  Database, 
  RefreshCw, 
  Users, 
  FileText, 
  Megaphone, 
  Video, 
  Sparkles,
  Calendar,
  DollarSign,
  Target,
  UserCheck,
  Eye,
  ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const whatsappLink = "http://wa.me/62994484199";

  const services = [
    { name: "Arquitetura Digital de Alta Performance", desc: "Desenvolvimento de sites e sistemas focados em conversão e escala.", icon: Globe },
    { name: "Agentes de Receita Conversacional com IA", desc: "Agentes de IA para ligações, WhatsApp e mensagens.", icon: MessageSquare },
    { name: "Framework de Crescimento de Receita Interna", desc: "Estratégias internas de geração de receita sem dependência de tráfego.", icon: TrendingUp },
    { name: "Inteligência de Clientes e Arquitetura CRM", desc: "Implementação de CRM e inteligência de dados.", icon: Database },
    { name: "Automação de Relacionamento no Ciclo de Vida", desc: "Sistemas de relacionamento e retenção.", icon: RefreshCw },
    { name: "Motor de Indicação Incentivada", desc: "Sistema de indicação incentivada e escalável.", icon: Users },
    { name: "Sistema de Performance de Conteúdo Estratégico", desc: "Conteúdo estratégico com foco em demanda e conversão.", icon: FileText },
    { name: "Framework de Aquisição Multicanal", desc: "Gestão de anúncios com foco em ROI.", icon: Megaphone },
    { name: "Laboratório de Geração de Vídeos com IA", desc: "Criação de vídeos com IA para escala criativa.", icon: Video },
    { name: "Sistema de Influenciadores Virtuais de Marca", desc: "Influenciadoras virtuais com IA para marcas.", icon: Sparkles },
  ];

  const stats = [
    { value: "06", label: "anos de mercado", icon: Calendar },
    { value: "R$ 9M", label: "gerenciados", icon: DollarSign },
    { value: "R$\u00A025M", label: "em vendas", icon: Target },
    { value: "+170", label: "clientes atendidos", icon: UserCheck },
    { value: "+100M", label: "pessoas alcançadas", icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Tech Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Animated diagonal lines */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_35px,rgba(255,255,255,0.1)_35px,rgba(255,255,255,0.1)_70px)]" />
      </div>
      
      {/* Animated Gradient orbs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      {/* Floating tech dots */}
      <div className="fixed top-20 left-[10%] w-2 h-2 bg-primary/30 rounded-full pointer-events-none animate-float" />
      <div className="fixed top-40 right-[15%] w-1.5 h-1.5 bg-primary/20 rounded-full pointer-events-none animate-float" style={{ animationDelay: '1s' }} />
      <div className="fixed bottom-32 left-[20%] w-1 h-1 bg-primary/25 rounded-full pointer-events-none animate-float" style={{ animationDelay: '2s' }} />
      <div className="fixed bottom-48 right-[25%] w-2 h-2 bg-primary/15 rounded-full pointer-events-none animate-float" style={{ animationDelay: '3s' }} />

      <Navbar />

      {/* Hero */}
      <section id="inicio" className="flex items-center px-4 md:px-6 pt-28 md:pt-36 pb-10 md:pb-16 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Mobile: Title first, Desktop: Title on right */}
            <div className="order-2 lg:order-1 animate-fade-up stagger-2">
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 md:mb-8 animate-shimmer">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs md:text-sm text-primary font-medium">Sistema de Crescimento Digital</span>
              </div>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                A maioria das empresas não executa nem duas ações de marketing ao mesmo tempo.
                <span className="block mt-2 text-muted-foreground/80">Algumas não fazem nada.</span>
                <span className="block text-muted-foreground/80">As que fazem, fazem tudo igual.</span>
              </p>
              <div className="border-l-2 border-primary pl-4 md:pl-6 mb-8 md:mb-10 bg-gradient-to-r from-primary/5 to-transparent py-3 md:py-4">
                <p className="text-sm md:text-base lg:text-lg text-foreground font-medium leading-relaxed">
                  Quem não executa marketing todos os dias está, na prática,
                </p>
                <p className="text-sm md:text-base lg:text-lg text-primary font-medium leading-relaxed">
                  aceitando crescer menos do que poderia.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left animate-fade-up stagger-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-4 md:mb-8 leading-tight">
                A ND Digital constrói<br />
                <span className="text-primary">ecossistema completo</span><br />
                de crescimento
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium">
                conectando <span className="text-primary">marketing</span>, <span className="text-primary">vendas</span> e <span className="text-primary">tecnologia</span>.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-10 md:mt-16">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-4"
            >
              Quero estruturar meu crescimento
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-12 md:py-20 px-4 md:px-6 border-t border-border relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                O problema não é falta de ferramenta.
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold">
                É falta de sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posicionamento */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-card relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
              Agências tradicionais executam tarefas.
            </p>
            <div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Nós construímos <span className="text-primary">infraestrutura</span>.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 md:px-4 py-1 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
              SOLUÇÕES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Nossos Serviços
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border p-4 md:p-6 hover:border-primary/50 transition-all duration-300 hover:bg-card/80 relative overflow-hidden text-center animate-fade-up"
                  style={{ animationDelay: `${0.1 * (index % 4)}s` }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex flex-col items-center">
                    <div className="p-2 md:p-3 bg-primary/10 border border-primary/20 rounded-lg mb-3 md:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                      <IconComponent className="w-5 h-5 md:w-6 md:h-6 text-primary transition-transform duration-300 group-hover:rotate-12" />
                    </div>
                    <h3 className="text-sm md:text-base text-foreground font-semibold mb-1 md:mb-2">
                      {service.name}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8 md:mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-4"
            >
              Quero conhecer os serviços
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Números */}
      <section id="resultados" className="py-12 md:py-20 px-4 md:px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
              RESULTADOS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Nossos Resultados
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group bg-background border border-border p-4 md:p-8 flex flex-col items-center justify-center aspect-square animate-fade-up hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex items-center justify-center p-2 md:p-3 bg-primary/10 border border-primary/20 rounded-lg mb-3 md:mb-6 transition-transform duration-300 group-hover:scale-110">
                    <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary animate-float" style={{ animationDelay: `${index * 0.5}s` }} />
                  </div>
                  <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-1 md:mb-3 text-center">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground text-center">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 md:mb-8">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium">Pronto para crescer?</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-3 md:mb-4 leading-tight">
            Crescimento não acontece por acaso.
          </h2>
          <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
            Ele é construído com <span className="text-primary">método</span>, <span className="text-primary">execução diária</span> e <span className="text-primary">sistemas</span>.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-4 md:py-5 text-sm md:text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            Quero um diagnóstico estratégico
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
