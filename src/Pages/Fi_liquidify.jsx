import Navigation2 from "../Components/Navigation2";
// import Star from "../Components/Star.jsx";
// import data from "../data/liquidity.json";
import TableSection from "../Components/TableSection.jsx";
import EducationalCard from "../Components/EducationalCard.jsx";

const Fi_liquidify = () => {
  return (
    <section className="bg-[#0F0619] pt-9">
      <Navigation2 currentTab={"Liquidify"} />
      <section className="flex flex-col min-h-[100vh] mx-auto max-w-[1296px] px-4 md:px-0 pt-20">
        <div className="space-y-4 itemx-center mb-8 md:mb-16">
          <TableSection />
        </div>

        {/* Eduction and Help */}

        <p className="text-xl md:text-2xl text-gray-200 mt-5 mb-5 font-bold">
          Education and Help
        </p>

        <section className="grid gap-9 mb-4">
          <EducationalCard
            image={"/liquidify1.png"}
            title={"Liquidity Pools"}
            subtitle={
              "Here, you can see what liquidify pools are, how to provide and withdraw liquidity, and how you're able to accure trading fees by being a liquiditt provider on SundaeSwap."
            }
          />

          <EducationalCard
            image={"/liquidify2.png"}
            title={"Impermanent Loss"}
            subtitle={
              "Providing liquidity and accuring trading fees always comes with a risk. By provoding liquidify, you expose yourself to impermanent low."
            }
          />
        </section>
      </section>
    </section>
  );
};

export default Fi_liquidify;
