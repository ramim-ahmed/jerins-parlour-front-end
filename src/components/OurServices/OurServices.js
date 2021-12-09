import React from "react";
import Slide from 'react-reveal/Slide';
import useData from "../../hooks/useData";
import Service from "../Service/Service";
const OurServices = () => {
   const [data] = useData();
  return (
    <Slide right>
    <section id='service' className="my-10 bg-white py-16">
      <section className="text-gray-900 body-font">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
          <h1 className="font-semibold text-3xl text-center">
          Our Awesome <span className="text-primary">Services</span>
        </h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {
                data.map( ( service => <Service key={service._id} service={service} />))
            }
          </div>
          <button className="flex mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-pink-500 rounded text-lg">
            Explore More
          </button>
        </div>
      </section>
    </section>
    </Slide>
  );
};

export default OurServices;
