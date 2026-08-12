import ModularDesignHero from "@/components/products/modular/ModularDesignHero";
import ModularDesignOverview from "@/components/products/modular/ModularDesignOverview";
import ModularDesignModules from "@/components/products/modular/ModularDesignModules";
import ModularDesignCategories from "@/components/products/modular/ModularDesignCategories";
import ModularDesignCTA from "@/components/products/modular/ModularDesignCTA";

export default function ModularDesignPage() {
  return (
    <main>
      <ModularDesignHero />

      <ModularDesignOverview />

      <ModularDesignModules />

      <ModularDesignCategories />

      <ModularDesignCTA />
    </main>
  );
}