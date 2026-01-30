const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-6">
          Build something great.
        </h1>
        <p className="text-lg text-muted-foreground mb-10">
          A minimal starting point for your next project.
        </p>
        <button className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Index;
