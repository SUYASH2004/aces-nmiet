const Team = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
          Our Committee
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Meet the passionate team behind ACES
        </p>
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Coming Soon!
          </h2>
          <p className="text-muted-foreground">
            We're preparing something amazing to showcase our incredible team
            members. Check back soon to meet the dedicated individuals who make
            ACES possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
