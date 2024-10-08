import FeatureCard from "./components/FeatureCard";
import Header from "./components/Header";
import MainFeatureCard from "./components/MainFeatureCard";
import { FeaturesParagraphs } from "./constants";

const Home = () => {
  return (
    <div className="bg-black flex flex-col">
      <section
        className="min-h-screen flex flex-col bg-cover bg-no-repeat bg-center  "
        style={{
          backgroundImage: `url(background.png)`,
        }}
      >
        <Header />
        <div className="flex flex-col flex-grow justify-center items-center text-center mt-10">
          <h1 className="text-white text-2xl mb-4 font-extrabold uppercase">
            Our charcoal is characterized by high quality and natural
            composition,
            <br /> which makes it an ideal choice <br /> for our users.
          </h1>
          <button className="text-white bg-orangy px-8 py-2 rounded-lg uppercase font-bold hover:bg-orange-600">
            Contact Us
          </button>
        </div>
      </section>
      <section className="w-full mt-20   ">
        <div className="flex items-center justify-center col-span-12">
          <h1 className="text-white uppercase font-bold text-center pb-[50px] ">
            the Best Sustainable Barbecue Charcoal you will ever use!
          </h1>
        </div>
        <div className="grid grid-cols-12 h-[600px] gap-6  px-4 md:px-20">
          <div className="col-span-4  text-white flex flex-col p-4 space-y-5 font-light text-sm leading-loose  ">
            <MainFeatureCard />
          </div>
          <div className="col-span-4  flex flex-col space-y-5">
            <FeatureCard paragraphs={FeaturesParagraphs[2]}></FeatureCard>
            <FeatureCard paragraphs={FeaturesParagraphs[3]}></FeatureCard>
          </div>

          <div className=" col-span-4  flex flex-col space-y-5">
            <FeatureCard paragraphs={FeaturesParagraphs[4]}></FeatureCard>
            <FeatureCard paragraphs={FeaturesParagraphs[5]}></FeatureCard>
          </div>
        </div>
      </section>
      <img className=" mt-[151px]" src="imgg.png" alt="" />
    </div>
  );
};

export default Home;
