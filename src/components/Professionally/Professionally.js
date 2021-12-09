import React from "react";
import CountUp from "react-countup";
import Slide from 'react-reveal/Slide';
import Facial_Beauty from "../../assets/Image/facial-face-beauty.png";
const Professionally = () => {
  return (
    <Slide bottom>
    <section className="my-10 py-16">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
           
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src={Facial_Beauty}
              />
             
            </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center space-y-5">
            <h1 class="text-2xl mb-4 font-semibold text-gray-900">
             Let us handle your
              <br class="hidden lg:inline-block" />
              screen <span className="text-primary">Professionally.</span>
            </h1>
            <p class="mb-8 leading-relaxed">
              With well written codes, we build amazing apps for all platforms,
              mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Purus commodo ipsum.
            </p>
            <div class="flex justify-center space-x-10">
              <div>
                <h1 className="text-3xl font-bold my-5 text-primary">
                  <CountUp duration={10} start={0} end={500} />+
                </h1>
                <p className="font-normal">Happy Customer</p>
              </div>
              <div>
                <h1 className="text-3xl font-bold my-5 text-primary">
                  <CountUp duration={2} start={0} end={16} />+
                </h1>
                <p className="font-normal">Total Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    </Slide>
  );
};

export default Professionally;
