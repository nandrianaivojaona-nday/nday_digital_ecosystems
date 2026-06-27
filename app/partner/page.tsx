export default function PartnersPage() {
    return (
      <div className="px-6 pb-20 text-white">
        <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-5xl items-start md:items-center">
          <div className="w-full space-y-10">
            <section className="glass-card p-8 text-center">
              <h1 className="mb-4 text-4xl font-bold">Partner with NdaY’</h1>
              <p>
                Build the future of digital ecosystems for sustainable development.
              </p>
            </section>
  
            <section className="glass-card p-8">
              <h2 className="mb-4 text-xl font-semibold">Why Partner?</h2>
              <ul className="space-y-2 text-sm">
                <li>Access a multi-sector ecosystem</li>
                <li>Engage directly with communities</li>
                <li>Contribute to national impact</li>
              </ul>
            </section>
  
            <section className="glass-card p-8">
              <h2 className="mb-4 text-xl font-semibold">Partnership Areas</h2>
              <ul className="space-y-2 text-sm">
                <li>Agriculture</li>
                <li>Tourism</li>
                <li>Governance</li>
                <li>Digital Infrastructure</li>
              </ul>
            </section>
  
            <section className="text-center">
              <button className="nav-link active">Become a Partner</button>
            </section>
          </div>
        </div>
      </div>
    );
  }
  