"use client";

import { useState, useEffect } from "react";
import { Navigation, Footer } from "@/components/layout";
import { Hero } from "@/components/memorial/Hero";
import { HomeIntro } from "@/components/memorial/HomeIntro";
import { AboutSection } from "@/components/memorial/AboutSection";
import { BiographySection } from "@/components/memorial/BiographySection";
import { Timeline } from "@/components/memorial/Timeline";
import { Gallery } from "@/components/memorial/Gallery";
import { Documents } from "@/components/memorial/Documents";
import { Stories } from "@/components/memorial/Stories";
import { GalleryPreview } from "@/components/sidebar/GalleryPreview";
import { RecentUpdates } from "@/components/sidebar/RecentUpdates";
import { RemembranceDays } from "@/components/sidebar/RemembranceDays";

const validTabs = [
  "inicio",
  "sobre",
  "linha-do-tempo",
  "galeria",
  "documentos",
  "historias",
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("inicio");

  useEffect(() => {
    function handleHash() {
      const hash = window.location.hash.replace("#", "");
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    }
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <>
      <Hero />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-10">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <main className="min-w-0">
            {activeTab === "inicio" && (
              <div className="space-y-8 sm:space-y-10">
                <HomeIntro />
              </div>
            )}
            {activeTab === "sobre" && (
              <div id="sobre" className="scroll-mt-24 space-y-8 sm:space-y-10">
                <AboutSection />
                <BiographySection />
              </div>
            )}
            {activeTab === "linha-do-tempo" && <Timeline />}
            {activeTab === "galeria" && <Gallery />}
            {activeTab === "documentos" && <Documents />}
            {activeTab === "historias" && <Stories />}
          </main>
          <aside className="hidden min-w-0 space-y-5 lg:block lg:sticky lg:top-16">
            <RecentUpdates />
            <RemembranceDays />
            <GalleryPreview />
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}
