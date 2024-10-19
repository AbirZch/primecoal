import React from "react";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const News = () => {
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
      -{" "}
      <div className="flex flex-col items-center ">
        <span className="text-orangy text-center mt-20 text-3xl font-bold uppercase">
          News
        </span>
        <div className="grid grid-cols-12">
          <div className=" flex flex-col bg-lightgray text-sm max-sm:p-2 max-sm:col-span-12 max-sm:text-xs max-sm:m-2 col-start-4 col-span-6 max-lg:col-span-10 max-lg:col-start-2 p-7 mt-10 rounded-lg space-y-5">
            <div className=" flex space-x-5 bg-black  p-6 rounded-lg relative">
              <div className="flex  justify-center items-center text-orangy">
                <span className=" font-bold text-3xl">01</span>
              </div>
              <div className=" flex text-white">
                <p className="">
                  we have announced that we have entered into a definitive
                  agreement to combine in an all-stock merger of equals to
                  create Core Natural... Resource
                </p>
              </div>
              <div className="absolute text-white bottom-[5px] right-5 ">
                <span className="">20.09.2024</span>
              </div>
            </div>
            <div className=" flex space-x-5 bg-black p-6 rounded-lg relative ">
              <div className="flex  justify-center items-center text-orangy">
                <span className=" font-bold text-3xl">02</span>
              </div>
              <div className=" flex text-white">
                <p className="">
                  our consultation process to assess shareholder views regarding
                  retaining or demerging its coal and carbon steel materials
                  business has returned a result in favour of retention
                </p>
              </div>
              <div className="absolute text-white bottom-[5px] right-5 ">
                <span className="">30.09.2024</span>
              </div>
            </div>
            <div className=" flex space-x-5 bg-black p-6 rounded-lg relative ">
              <div className="flex  justify-center items-center text-orangy">
                <span className=" font-bold text-3xl">03</span>
              </div>
              <div className=" flex text-white">
                <p className="">
                  we have decided to build a long-distance overland conveyor for
                  its Blue Creek Mine expansion in the city.
                </p>
              </div>
              <div className="absolute text-white bottom-[5px] right-5 ">
                <span className="">04.10.2024</span>
              </div>
            </div>
            <div className=" flex space-x-5 bg-black p-6 rounded-lg relative ">
              <div className="flex  justify-center items-center text-orangy ">
                <span className=" font-bold text-3xl">04</span>
              </div>
              <div className=" flex text-white">
                <p className="">
                  At MINExpo INTERNATIONAL®, the industry’s largest global
                  mining event, you will uncover new products and transformative
                  technology that can help you increase productivity and safety.
                </p>
              </div>
              <div className="absolute text-white bottom-[5px] right-5 ">
                <span className="">06.10.2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
    </div>
  );
};

export default News;
