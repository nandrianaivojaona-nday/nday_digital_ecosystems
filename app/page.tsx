import Hero from "@/components/home/Hero";
import Vision from "@/components/home/Vision";
import Foundation from "@/components/home/Foundation";
import HowItWorks from "@/components/home/HowItWorks";
import CommunalDPI from "@/components/home/CommunalDPI";
import EcosystemIntro from "@/components/home/EcosystemIntro";
import PlatformSection from "@/components/home/PlatformSection";
import LivingLabs from "@/components/home/LivingLabs";
import CurrentInitiatives from "@/components/home/CurrentInitiatives";
import Impact from "@/components/home/Impact";
import GetInvolved from "@/components/home/GetInvolved";
import Chapter from "@/components/ui/Chapter";

export default function HomePage() {
  return (
    <main>

      {/* 1. Hero – special hero variant for large, immersive display */}
      <Chapter
        id="hero"
        title="Bridging Innovation and Community for a Sustainable Future"
        description="Building the Digital Public Infrastructure that empowers every Commune to innovate, collaborate and thrive."
        manifesto="A world where connected people enjoy a high quality standard of living."
        align="center"
        variant="hero"
      >
        <Hero />
      </Chapter>

      {/* 2. One shared foundation – narrative variant (default) */}
      <Chapter
        id="foundation"
        title="One shared foundation"
        description="Communities need more than isolated digital tools. They need trusted digital foundations that connect people, territories, services and knowledge. NdaY' Core provides that common foundation."
        align="center"
      >
        <div className="space-y-16">
          <HowItWorks />
          <Foundation />
        </div>
      </Chapter>

      {/* 3. Communes at the centre */}
      <Chapter
        id="communes"
        title="Communes at the centre"
        description="Every transformation begins where people live. Our Communal Digital Public Infrastructure enables local governments, citizens, associations and businesses to build together."
        align="center"
      >
        <CommunalDPI />
      </Chapter>

      {/* 4. From infrastructure to ecosystems */}
      <Chapter
        id="ecosystems"
        title="From infrastructure to ecosystems"
        description="Agriculture. Waste. Governance. Tourism. Health. Education. Each ecosystem grows from the same digital foundation while responding to local realities."
        align="center"
      >
        <div className="space-y-16">
          <EcosystemIntro />
          <PlatformSection />
        </div>
      </Chapter>

      {/* 5. Innovation in the field */}
      <Chapter
        id="innovation"
        title="Innovation in the field"
        description="Living Labs transform ideas into measurable solutions by connecting communities, researchers, entrepreneurs and institutions."
        align="center"
      >
        <LivingLabs />
      </Chapter>

      {/* 6. Growing together */}
      <Chapter
        id="growing-together"
        title="Growing together"
        description="Each new Commune strengthens the national network. Each ecosystem enriches the others. Together they form a resilient Digital Public Infrastructure for Madagascar."
        align="center"
      >
        <div className="space-y-16">
          <CurrentInitiatives />
          <Impact />
        </div>
      </Chapter>

      {/* 7. Join the movement */}
      <Chapter
        id="join"
        title="Join the movement"
        description="Whether you're a developer, a policymaker, a community leader, or a citizen – there's a place for you in the NdaY ecosystem."
        align="center"
        cta={{ label: "Start contributing today", href: "/contribute" }}
      >
        <GetInvolved />
      </Chapter>

    </main>
  );
}