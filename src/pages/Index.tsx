const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
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
    </div>
  );
};

export default Index;
