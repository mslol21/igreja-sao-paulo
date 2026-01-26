import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MassTimesSection } from "@/components/home/MassTimesSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { EventsSection } from "@/components/home/EventsSection";
import { QuickAccessSection } from "@/components/home/QuickAccessSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MassTimesSection />
      <AnnouncementsSection />
      <EventsSection />
      <QuickAccessSection />
    </Layout>
  );
};

export default Index;
