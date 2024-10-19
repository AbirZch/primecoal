import { motion } from "framer-motion";
import Card from "./components/Card";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import { FeaturesParagraphs } from "./const";




const Home = () => {
  return (
    <div className="bg-black flex flex-col">
      <section className="min-h-screen flex flex-col bg-backgroundImg bg-cover bg-no-repeat bg-center ">
        <Header></Header>

        <div className="flex flex-col flex-grow justify-center items-center text-center mt-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white  xl:text-3xl text-xl mx-20 text-center max-sm:text-xs max-sm:mx-0 mb-4 font-extrabold max-sm:font-bold uppercase"
          >
            Our charcoal is characterized by high quality and natural
            composition,which makes it an ideal choice for{" "}
            <span className="text-orangy">our users.</span>
          </motion.h1>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-white bg-orangy px-8 py-2 rounded-lg uppercase font-bold hover:bg-orange-600"
          >
            Become a Distrubutor
          </motion.button>
        </div>
      </section>
      <section className="w-full mt-20   ">
        <div className="flex  items-center justify-center col-span-12">
          <h1 className="text-white max-sm:text-xs max-sm:font-medium max-sm:mx-4 uppercase font-bold text-center pb-[50px] ">
            the Best Sustainable Barbecue Charcoal you will ever use!
          </h1>
        </div>
        <div className="grid grid-cols-3 w-full max-lg:grid-cols-2  max-md:grid-cols-1 h-[600px]  max-xl:h-auto gap-6  px-4 md:px-20">
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            transition={{ duration: "0.3", ease: "easeOut" }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, translateX: "0" }}
            className=" col-span-1 row-span-2 h-full"
          >
            <MainCard></MainCard>
          </motion.div>
          {[2, 3, 4, 5].map((index) => (
            <motion.div
              initial={{ opacity: 0, translateY: "-10%", scale: "0" }}
              transition={{
                duration: "0.5",
                ease: "easeOut",
                delay: 0.1 * index,
              }}
              whileInView={{ opacity: 1, translateY: "0", scale: "100%" }}
              viewport={{ once: true }}
              className="col-span-1"
            >
              <Card paragraphs={FeaturesParagraphs[index]} />
            </motion.div>
          ))}

          {/*      <div className=" col-span-1  flex flex-col space-y-5">
            <div className=" bg-lightgray rounded-lg basis-full h-full">
              <div className=" text-white space-y-5 p-7 font-light text-sm leading-loose">
                <p>
                  made exclusively from natural materials. This ensures purity
                  and safety of use, which is especially important for
                  maintaining health.
                </p>
                <p>
                  Customer satisfaction guarantee: A strong return policy or
                  money-back guarantee if customers are not completely satisfied
                  with their purchase. This builds trust and shows confidence in
                  the product.
                </p>
              </div>
            </div>
            <div className=" bg-lightgray rounded-lg">
              <div className=" text-white space-y-5 p-7  basis-full  h-full  font-light text-sm leading-loose">
                <p>Competition-grade charcoal for BBQ enthusiast</p>
                <p>
                  Low smoke output: Highlight how the charcoal produces minimal
                  smoke, making it ideal for both outdoor and indoor (with
                  proper ventilation) grilling. This feature is particularly
                  appealing for those in urban settings or with close neighbors.
                </p>
              </div>
            </div>
          </div>

          <div className=" col-span-1  flex flex-col space-y-5">
            <div className=" bg-lightgray rounded-lg  h-full basis-full  ">
              <div className=" text-white space-y-5 p-7 font-light text-sm leading-loose">
                <p>
                  Variety of charcoal types: Offering a range of options to suit
                  different grilling needs
                </p>
                <p>
                  Eco-friendly packaging: Use recyclable or biodegradable
                  packaging materials. Highlight any initiatives to reduce
                  plastic use or carbon footprint in the production and
                  distribution process.
                </p>
              </div>
            </div>
            <div className=" bg-lightgray rounded-lg  ">
              <div className=" text-white space-y-5 p-7  font-light text-sm leading-loose">
                <p>
                  Competitive pricing: Highlight any bulk discounts,
                  subscription services, or special offers that provide value to
                  customers. Emphasize the balance of quality and affordability.
                </p>
                <p>
                  we offer fast and reliable shipping, with quick processing
                  times and partnerships with reliable carriers, and offers free
                  shipping on orders over a certain amount.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <img className=" mt-[151px]" src="imgg.png" alt="" />
    </div>
  );
   
  
}

export default Home
