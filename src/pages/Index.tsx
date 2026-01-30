const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-xl text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground mb-4">
            Build faster.
          </h1>
          <p className="text-base text-muted-foreground mb-8">
            Ship products with less friction.
          </p>
          <button className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90">
            Start now
          </button>
        </div>
      </section>

      {/* Market Problem */}
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            The problem
          </h2>
          <p className="text-muted-foreground">
            Teams waste time on repetitive tasks. Slow processes kill momentum.
          </p>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            A better way
          </h2>
          <p className="text-muted-foreground">
            We automate the boring stuff so you can focus on what matters.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
            What we do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">Strategy</h3>
              <p className="text-sm text-muted-foreground">Clear direction, defined goals.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">Clean interfaces, great UX.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium text-foreground mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">Fast, reliable, scalable code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers / Proof */}
      <section className="py-24 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-semibold text-primary mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Projects delivered</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-primary mb-2">98%</p>
              <p className="text-sm text-muted-foreground">Client satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-primary mb-2">3x</p>
              <p className="text-sm text-muted-foreground">Faster delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Ready to start?
          </h2>
          <p className="text-muted-foreground mb-8">
            Let's build something great together.
          </p>
          <button className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90">
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
