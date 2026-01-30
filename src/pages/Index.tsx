const Index = () => {
  const whatsappLink = "http://wa.me/62994484199";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 py-32">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                A maioria das empresas não executa nem duas ações de marketing ao mesmo tempo.
                <span className="block mt-2">Algumas não fazem nada.</span>
                <span className="block">As que fazem, fazem tudo de forma genérica.</span>
              </p>
              <div className="border-l-2 border-primary pl-6 mb-10">
                <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                  Quem não executa marketing todos os dias está, na prática,
                  <span className="block">aceitando crescer menos do que poderia.</span>
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
                A ND Digital constrói sistemas completos de crescimento,
              </h1>
              <p className="text-xl md:text-2xl text-primary font-medium mb-10">
                conectando marketing, vendas e tecnologia.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-base font-semibold bg-primary text-primary-foreground hover:opacity-90"
              >
                Quero estruturar meu crescimento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              O problema não é falta de ferramenta.
            </h2>
            <div className="lg:text-right">
              <p className="text-3xl md:text-4xl text-primary font-semibold">
                É falta de sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Posicionamento */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <p className="text-xl text-muted-foreground">
              Agências tradicionais executam tarefas.
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Nós construímos infraestrutura.
            </h2>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Nossos Serviços
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { code: "ADHP", name: "Arquitetura Digital de Alta Performance", desc: "Desenvolvimento de sites e sistemas focados em conversão e escala." },
              { code: "ACRA", name: "AI Conversational Revenue Agents", desc: "Agentes de IA para ligações, WhatsApp e mensagens." },
              { code: "IRGF", name: "Internal Revenue Growth Framework", desc: "Estratégias internas de geração de receita sem dependência de tráfego." },
              { code: "CICA", name: "Customer Intelligence & CRM Architecture", desc: "Implementação de CRM e inteligência de dados." },
              { code: "LRA", name: "Lifecycle Relationship Automation", desc: "Sistemas de relacionamento e retenção." },
              { code: "IRE", name: "Incentivized Referral Engine", desc: "Sistema de indicação incentivada e escalável." },
              { code: "SCPS", name: "Strategic Content Performance System", desc: "Conteúdo estratégico com foco em demanda e conversão." },
              { code: "MCAF", name: "Multi-Channel Acquisition Framework", desc: "Gestão de anúncios com foco em ROI." },
              { code: "AIVGL", name: "AI Video Generation Lab", desc: "Criação de vídeos com IA para escala criativa." },
              { code: "VBIS", name: "Virtual Brand Influencer System", desc: "Influenciadoras virtuais com IA para marcas." },
            ].map((service) => (
              <div
                key={service.code}
                className="bg-card border border-border p-8 hover:border-primary/50"
              >
                <p className="text-xs font-semibold text-primary tracking-wider mb-3">
                  {service.code}
                </p>
                <h3 className="text-lg text-foreground font-medium mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-32 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { value: "06", label: "anos de mercado" },
              { value: "R$ 9M", label: "gerenciados" },
              { value: "R$ 25M", label: "gerados" },
              { value: "+170", label: "clientes" },
              { value: "+100M", label: "pessoas alcançadas" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-background border border-border p-8 text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Crescimento não acontece por acaso.
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Ele é construído com método, execução diária e sistemas.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 text-base font-semibold bg-primary text-primary-foreground hover:opacity-90"
          >
            Quero um diagnóstico estratégico
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
