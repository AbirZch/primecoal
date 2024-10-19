import Footer from "./components/Footer";
import Header from "./components/Header";


const About = () => {
  return (
    <div className=" bg-black min-h-screen ">
      <div
        className="bg-cover bg-no-repeat bg h-[500px]"
        style={{
          backgroundImage: `url(imgp4.png)`,
        }}
      >
        <Header />
      </div>
      <div className="flex  justify-center items-center">
        <span className="text-orangy text-center max-md:text-sm mt-20 text-3xl font-bold uppercase">
          About us
        </span>
      </div>
      <div className=" grid grid-cols-12 w-full gap-6 px-0 md:px-20   ">
        <div className=" flex flex-col col-start-2 col-span-10 max-sm:col-span-12 text-base max-sm:p-2 max-sm:text-xs p-7 rounded-lg space-y-5">
          <div className=" flex space-x-5 max-md:p-2 p-6 rounded-lg relative">
            <div className="flex  justify-center items-center">
              <p className="text-white  font-light  leading-loose 6">
                Welcome to PrimeCoal, a leader in the coal mining and energy
                industry. With decades of experience and a deep commitment to
                sustainable practices, we are dedicated to providing
                high-quality coal products that power homes, businesses, and
                industries around the world.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <span className="text-orangy text-center max-md:text-sm text-3xl font-bold uppercase">
          Our Mission
        </span>
      </div>
      <div className=" grid grid-cols-12 w-full gap-6 px-0 md:px-20   ">
        <div className=" flex flex-col col-start-2 col-span-10 max-sm:col-span-12 text-base max-sm:p-2 max-sm:text-xs p-7 rounded-lg space-y-5">
          <div className=" flex space-x-5 max-md:p-2 p-6 rounded-lg relative">
            <div className="flex  justify-center items-center">
              <p className="text-white  font-light  leading-loose 6">
                At PrimeCoal, our mission is to deliver reliable energy
                solutions through responsible coal mining operations. We
                understand the importance of balancing energy needs with
                environmental stewardship, and we work tirelessly to ensure that
                our practices respect both the land and the communities we
                serve.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center">
        <span className="text-orangy text-center max-md:text-sm text-3xl font-bold uppercase">
          Our Values
        </span>
      </div>
      <div className=" grid grid-cols-12 w-full gap-6 px-0 md:px-20   ">
        <div className=" flex flex-col col-start-2 col-span-10 max-sm:col-span-12 text-base max-sm:p-2 max-sm:text-xs p-7 rounded-lg space-y-5">
          <div className=" flex space-x-5 max-md:p-2 p-6 rounded-lg relative">
            <div className="flex  justify-center items-center">
              <p className="text-white  font-light leading-loose 6">
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-white">
                    <span className="font-semibold">Safety First:</span> The
                    safety of our employees, contractors, and surrounding
                    communities is our top priority. We maintain rigorous safety
                    protocols to ensure a secure and healthy working
                    environment.
                  </li>
                  <li className="text-white">
                    <span className="font-semibold">
                      Environmental Responsibility:
                    </span>{" "}
                    We are committed to minimizing our environmental impact
                    through innovative mining techniques, land reclamation, and
                    ongoing efforts to reduce emissions.
                  </li>
                  <li className="text-white">
                    <span className="font-semibold">
                      Excellence in Operations:
                    </span>{" "}
                    Our team of skilled professionals ensures efficient,
                    cost-effective mining operations while maintaining the
                    highest standards of quality and compliance.
                  </li>
                  <li className="text-white">
                    <span className="font-semibold">
                      Community Partnership:
                    </span>
                    We believe in giving back to the communities where we
                    operate. Through job creation, local investment, and
                    sustainable development initiatives, we strive to make a
                    positive, lasting impact.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
