export default function EcosystemIntro() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="glass-card rounded-xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
        <p className="text-base md:text-lg text-white/80 leading-relaxed">
          NdaY’ is a national digital ecosystem designed to foster
          sustainable development across Madagascar. By integrating public
          services, private innovation, and community participation, we
          build a resilient digital backbone for the nation.
        </p>
      </div>
      <div className="glass-card rounded-xl border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-sm">
        <p className="text-base md:text-lg text-white/80 leading-relaxed">
          Our platforms span agriculture, waste management, tourism, health,
          governance, and more – all working together to create a cohesive,
          accessible, and inclusive digital future.
        </p>
      </div>
    </div>
  );
}