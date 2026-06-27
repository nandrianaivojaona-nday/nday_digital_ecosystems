import React from "react";

export default function ConsolePage() {

  const ecosystems = [
    {
      name: "NdaY'Fako",
      description: "Waste Management Ecosystem",
      installed: true,
      link: "http://localhost:3001",
      className: "fako"
    },
    {
      name: "NdaY'Tsidika",
      description: "Tourism Ecosystem",
      installed: false,
      className: "tsidika"
    },
    {
      name: "NdaY'Tantsaha",
      description: "Agriculture Ecosystem",
      installed: false,
      className: "tantsaha"
    },
    {
      name: "NdaY'Hety",
      description: "Beauty Services Ecosystem",
      installed: false,
      className: "hety"
    },
    {
      name: "NdaY'Radoko",
      description: "Medical Drone Ecosystem",
      installed: false,
      className: "radoko"
    },
    {
      name: "NdaY'Ben'Tanàna",
      description: "Smart City Ecosystem",
      installed: false,
      className: "bentanana"
    }
  ];


  return (

    <div className="console">

      <aside className="sidebar">

        <h2 className="logo">NdaY'</h2>

        <ul>
          <li>Dashboard</li>
          <li>Ecosystems</li>
          <li>Partners</li>
          <li>API Keys</li>
          <li>Documentation</li>
          <li>Settings</li>
        </ul>

      </aside>


      <main className="dashboard">

        <h1>Ecosystem Modules</h1>

        <div className="ecosystem-grid">

          {ecosystems.map((eco) => (

            <div
              key={eco.name}
              className={`ecosystem-card ${eco.className}`}
            >

              <h2>{eco.name}</h2>

              <p>{eco.description}</p>

              {eco.installed ? (
                <span className="status installed">
                  Installed
                </span>
              ) : (
                <span className="status">
                  Available
                </span>
              )}

              <div className="actions">

                {eco.installed ? (
                  <a href={eco.link} target="_blank">
                    Open
                  </a>
                ) : (
                  <button>Install App</button>
                )}

                <button>Connect API</button>

                <button>Docs</button>

              </div>

            </div>

          ))}

        </div>

      </main>

    </div>

  );

}
