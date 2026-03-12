import { useMemo, useState } from "react";
import PlanetTabs from "../__molecules/PlanetTabs";
import SourceLink from "../__molecules/SourceLink";

function PlanetHero({ planet }) {
  const [activeTab, setActiveTab] = useState("overview");

  const description = useMemo(() => {
    if (activeTab === "structure") return planet.structure;
    if (activeTab === "geology") return planet.geology;
    return planet.overview;
  }, [activeTab, planet]);

  return (
    <section className="max-w-[1280px] mx-auto px-6 py-14 md:py-20">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center">
          <img
            src={planet.image}
            alt={planet.name}
            className="w-[180px] md:w-[280px] xl:w-[360px] object-contain"
          />
        </div>

        <div className="max-w-[420px] mx-auto xl:mx-0">
          <h2 className="text-[56px] md:text-[80px] uppercase font-semibold leading-none mb-6">
            {planet.name}
          </h2>

          <p className="text-white/80 text-sm md:text-base leading-7 mb-6">
            {description}
          </p>

          <SourceLink source={planet.source} />

          <div className="mt-8">
            <PlanetTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanetHero;
