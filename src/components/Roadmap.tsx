import { Pause, Flame, Phone, HandshakeIcon, Rocket, ArrowDown } from "lucide-react";

const steps = [
  { label: "PARAR O SCROLL", icon: Pause, desc: "Conteúdo que prende a atenção e interrompe o feed." },
  { label: "GERAR DEMANDA", icon: Flame, desc: "Despertar desejo e necessidade no público certo." },
  { label: "ATIVAR O COMERCIAL", icon: Phone, desc: "Leads qualificados prontos para conversar." },
  { label: "FECHAR VENDAS", icon: HandshakeIcon, desc: "Processos otimizados para converter oportunidades." },
  { label: "ESCALAR", icon: Rocket, desc: "Multiplicar resultados com sistemas e automação." },
];

const Roadmap = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative">
        {/* Title */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block px-3 md:px-4 py-1 bg-primary/10 text-primary text-xs md:text-sm font-semibold rounded-full mb-4">
            MÉTODO
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-3xl mx-auto">
            Enquanto outras agências vendem serviços, nós entregamos{" "}
            <span className="text-primary">um caminho.</span>
          </h2>
        </div>

        {/* Roadmap */}
        <div className="relative">
          {/* Vertical connecting line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 animate-pulse-line" />
          </div>

          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60" />
          </div>

          <div className="space-y-6 md:space-y-0">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              const isLast = index === steps.length - 1;

              return (
                <div key={step.label} className="relative">
                  {/* Desktop layout */}
                  <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center md:min-h-[140px]">
                    {/* Left content */}
                    <div className={`flex ${isEven ? "justify-end" : ""}`}>
                      {isEven && (
                        <div
                          className="group max-w-sm w-full p-5 bg-card/80 border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:bg-card backdrop-blur-sm animate-fade-up cursor-default"
                          style={{ animationDelay: `${0.15 * index}s` }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-mono text-primary/60">0{index + 1}</span>
                            <h3 className="text-sm font-bold text-foreground tracking-wider group-hover:text-primary transition-colors duration-300">
                              {step.label}
                            </h3>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center node */}
                    <div
                      className="relative z-10 flex flex-col items-center animate-fade-up"
                      style={{ animationDelay: `${0.15 * index}s` }}
                    >
                      <div className="relative">
                        {/* Outer glow ring */}
                        <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Pulsing ring */}
                        <div className="absolute -inset-1 border border-primary/30 rounded-full animate-ping opacity-20" />
                        {/* Main node */}
                        <div className="relative w-14 h-14 bg-background border-2 border-primary/50 rounded-full flex items-center justify-center hover:border-primary hover:scale-110 transition-all duration-300 group">
                          <IconComponent className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>
                      {/* Arrow between nodes */}
                      {!isLast && (
                        <div className="mt-3 mb-1">
                          <ArrowDown className="w-4 h-4 text-primary/40 animate-bounce" style={{ animationDuration: '2s', animationDelay: `${0.3 * index}s` }} />
                        </div>
                      )}
                    </div>

                    {/* Right content */}
                    <div className={`flex ${!isEven ? "justify-start" : ""}`}>
                      {!isEven && (
                        <div
                          className="group max-w-sm w-full p-5 bg-card/80 border border-border rounded-lg hover:border-primary/50 transition-all duration-500 hover:bg-card backdrop-blur-sm animate-fade-up cursor-default"
                          style={{ animationDelay: `${0.15 * index}s` }}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs font-mono text-primary/60">0{index + 1}</span>
                            <h3 className="text-sm font-bold text-foreground tracking-wider group-hover:text-primary transition-colors duration-300">
                              {step.label}
                            </h3>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                            {step.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div
                    className="md:hidden flex items-start gap-5 animate-fade-up"
                    style={{ animationDelay: `${0.12 * index}s` }}
                  >
                    {/* Node */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 bg-background border-2 border-primary/50 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="group flex-1 p-4 bg-card/80 border border-border rounded-lg hover:border-primary/50 transition-all duration-300 mb-2">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-mono text-primary/60">0{index + 1}</span>
                        <h3 className="text-sm font-bold text-foreground tracking-wider">
                          {step.label}
                        </h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
