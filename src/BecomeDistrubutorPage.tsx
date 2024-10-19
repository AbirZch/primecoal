
import Footer from "./components/Footer";
import Header from "./components/Header";


const BecomeDistrubutorPage = () => {
  return (
    <div className=" bg-black min-h-screen ">
      <div
        className="bg-cover bg-no-repeat bg"
        style={{
          backgroundImage: `url(header.png)`,
        }}
      >
        <Header></Header>
      </div>
      <section>
        <div className=" grid grid-cols-12 w-full gap-6 px-4 md:px-20  md:mt-20 max-md:mt-10 ">
          <div className="flex max-md:justify-center object-cover col-span-3 max-md:col-span-12">
            <img className="h-[300px]  max-md:h-44" src="product.png" alt="" />
          </div>
          <div className="text-white flex flex-col space-y-5 font-light text-base leading-loose  max-md:col-span-12  col-span-6">
            <p>
              Weight: 1 kg <br /> Number of cubes: 72 <br /> Size: 25x25x25{" "}
              <br />
              Features: The box is additionally packed in heat resistant film
              ,Inside the box 2 individual bags Minimum order quantity: 30 kg
              Delivery: self-delivery from the warehouse in Moscow / by
              transportation company (cost not included) The transportation box
              contains 10 pack
            </p>
            <div className="grid-cols-12 grid  gap-6 justify-between ">
              <div className="   bg-lightgray flex flex-col  max-md:col-span-12 max-md:w-10/12 max-md:mx-auto justify-between rounded-lg px-7 py-2 text-center col-span-4">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
              <div className="   bg-lightgray flex flex-col  max-md:col-span-12 max-md:w-10/12 max-md:mx-auto justify-between rounded-lg px-7 py-2 text-center col-span-4">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
              <div className="  bg-lightgray flex flex-col  max-md:col-span-12 max-md:w-10/12 max-md:mx-auto justify-between rounded-lg px-7 py-2 text-center col-span-4">
                <p className="  ">price up to 100kg</p>
                <span className="text-orangy font-bold ">45$</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-12  mt-32 ">
        <div className="  bg-lightgray max-md:pb-5 gap-5 md:flex-row flex flex-col pb-4 max-md:col-span-12 max-md:w-10/12 max-md:mx-auto justify-between rounded-lg px-7 py-2 text-center col-start-2 col-end-12  ">
          <p className="text-white flex text-start md:w-1/3 max-md:text-sm text-lg mt-5">
            Become Our Distributor <br /> We invite you to become a part of our
            team and join our successful business of selling premium charcoal If
            you want to expand your product range and offer your customers the
            highest quality products, this is the offer for you!
          </p>
          <div className="max-md:col-span-12 md:w-2/3 md:mt-4  max-md:mt-10 text-white outline-none ">
            <div className=" grid grid-cols-2 gap-6 max-sm:grid-cols-1 max-md:gap-6 ">
              <input
                className=" bg-transparent max-md:col-span-1  hover:border hover:border-orangy focus:bg-orangy outline-none rounded-lg p-2 "
                name="email"
                placeholder="Email"
                type="email"
              />

              <input
                className="bg-transparent hover:border max-md:col-span-1 hover:border-orangy focus:bg-orangy outline-none rounded-lg p-2 "
                placeholder="Name"
                type="text"
              />

              <input
                className="bg-transparent hover:border max-md:col-span-1 hover:border-orangy focus:bg-orangy outline-none rounded-lg p-2"
                name="city"
                placeholder="City"
                type="text"
              />

              <input
                className="bg-transparent hover:border max-md:col-span-1 hover:border-orangy focus:bg-orangy outline-none rounded-lg p-2 "
                name="Company"
                placeholder="Company"
                type="text"
              />

              <input
                className="bg-transparent hover:border max-md:col-span-1 hover:border-orangy focus:bg-orangy outline-none rounded-lg p-2  "
                name="Phone Number"
                placeholder="Phone Number"
                type="tel"
              />

              <input
                className="bg-transparent hover:border max-md:col-span-1 hover:border-orangy focus:bg-orangy outline-none rounded-lg p-2  "
                name="quantity"
                placeholder="Quantity per month"
                type="number"
              />
            </div>
            <div className=" justify-end   flex  text-white outline-none   mt-4">
              <button className=" bg-orangy rounded-lg max-md:text-sm max-md:pb-1 pb-1 text-white font-bold px-4 py-2 uppercase  ">
                contact us
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BecomeDistrubutorPage

