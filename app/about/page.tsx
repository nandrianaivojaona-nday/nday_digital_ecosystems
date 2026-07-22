import Chapter from "@/components/ui/Chapter";
import PlatformSection from "@/components/home/PlatformSection";

export default function AboutPage() {
  return (
    <Chapter
      id="about"
      title="NdaY’ Digital Public Infrastructure Ecosystem"
      description="Connecting people, empowering communities, elevating life."
      align="center"
    >
      <PlatformSection />
    </Chapter>
  );
}