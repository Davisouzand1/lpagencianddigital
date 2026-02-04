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
import logo from "@/assets/logo.png";

const Index = () => {
  const whatsappLink = "http://wa.me/62994484199";

  const services = [
    { code: "ADHP", name: "Arquitetura Digital de Alta Performance", desc: "Desenvolvimento de sites e sistemas focados em conversão e escala.", icon: Globe },
    { code: "ACRA", name: "AI Conversational Revenue Agents", desc: "Agentes de IA para ligações, WhatsApp e mensagens.", icon: MessageSquare },
    { code: "IRGF", name: "Internal Revenue Growth Framework", desc: "Estratégias internas de geração de receita sem dependência de tráfego.", icon: TrendingUp },
    { code: "CICA", name: "Customer Intelligence & CRM Architecture", desc: "Implementação de CRM e inteligência de dados.", icon: Database },
    { code: "LRA", name: "Lifecycle Relationship Automation", desc: "Sistemas de relacionamento e retenção.", icon: RefreshCw },
    { code: "IRE", name: "Incentivized Referral Engine", desc: "Sistema de indicação incentivada e escalável.", icon: Users },
    { code: "SCPS", name: "Strategic Content Performance System", desc: "Conteúdo estratégico com foco em demanda e conversão.", icon: FileText },
    { code: "MCAF", name: "Multi-Channel Acquisition Framework", desc: "Gestão de anúncios com foco em ROI.", icon: Megaphone },
    { code: "AIVGL", name: "AI Video Generation Lab", desc: "Criação de vídeos com IA para escala criativa.", icon: Video },
    { code: "VBIS", name: "Virtual Brand Influencer System", desc: "Influenciadoras virtuais com IA para marcas.", icon: Sparkles },
  ];

  const stats = [
    { value: "06", label: "anos de mercado", icon: Calendar },
    { value: "R$ 9M", label: "gerenciados", icon: DollarSign },
    { value: "R$ 25M", label: "em vendas", icon: Target },
    { value: "+170", label: "clientes atendidos", icon: UserCheck },
    { value: "+100M", label: "pessoas alcançadas", icon: Eye },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background grid effect */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
      
      {/* Gradient orbs */}
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      {/* Logo Header */}
      <header className="w-full py-8 px-6 flex justify-center relative z-10">
        <img src={logo} alt="ND Digital" className="h-16 md:h-20 object-contain" />
      </header>

      {/* Hero */}
      <section className="flex items-center px-6 py-16 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-primary font-medium">Sistema de Crescimento Digital</span>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                A maioria das empresas não executa nem duas ações de marketing ao mesmo tempo.
                <span className="block mt-2 text-muted-foreground/80">Algumas não fazem nada.</span>
                <span className="block text-muted-foreground/80">As que fazem, fazem tudo de forma genérica.</span>
              </p>
              <div className="border-l-2 border-primary pl-6 mb-10 bg-gradient-to-r from-primary/5 to-transparent py-4">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                  Quem não executa marketing todos os dias está, na prática,
                  <span className="block text-primary">aceitando crescer menos do que poderia.</span>
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                A ND Digital constrói 
                <span className="text-primary"> sistemas completos</span> de crescimento,
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-10">
                conectando <span className="text-primary">marketing</span>, <span className="text-primary">vendas</span> e <span className="text-primary">tecnologia</span>.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-4"
              >
                Quero estruturar meu crescimento
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-20 px-6 border-t border-border relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                O problema não é falta de ferramenta.
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-4xl md:text-5xl lg:text-6xl text-primary font-bold">
                É falta de sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posicionamento */}
      <section className="py-20 px-6 bg-card relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <p className="text-xl md:text-2xl text-muted-foreground">
              Agências tradicionais executam tarefas.
            </p>
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Nós construímos <span className="text-primary">infraestrutura</span>.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              SOLUÇÕES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Nossos Serviços
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.code}
                  className="group bg-card border border-border p-8 hover:border-primary/50 transition-all duration-300 hover:bg-card/80 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-xs font-semibold text-primary tracking-wider">
                        {service.code}
                      </p>
                    </div>
                    <h3 className="text-lg text-foreground font-semibold mb-2">
                      {service.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-background border border-border p-8 flex flex-col items-center justify-center aspect-square"
                >
                  <div className="flex items-center justify-center p-3 bg-primary/10 border border-primary/20 rounded-lg mb-6">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-3 text-center">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground text-center">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pronto para crescer?</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Crescimento não acontece por acaso.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ele é construído com <span className="text-primary">método</span>, <span className="text-primary">execução diária</span> e <span className="text-primary">sistemas</span>.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:gap-4"
          >
            Quero um diagnóstico estratégico
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
