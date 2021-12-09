import React from "react";
import Slide from "react-reveal/Slide";
import useTestimonial from "../../hooks/useTestimonial";
import Testimonial from "../Testimonial/Testimonial";
const Testimonials = () => {
  const [testimonialData] = useTestimonial();
  return (
    <Slide bottom>
      <div id='testimonial' className="bg-white my-10 py-16">
        <section class="text-gray-600 body-font">
          <div class="container px-5  mx-auto">
           <div className=' mb-14'>
           <h1 class="text-3xl font-semibold title-font text-gray-900 text-center">
              Testimonials
            </h1>
            <div className="flex justify-center mt-6">
              <div className="w-16 h-1 rounded-full bg-primary inline-flex"></div>
            </div>
           </div>
            <div class="flex flex-wrap -m-4">
              {testimonialData.map((data) => (
                <Testimonial key={data.id} data={data} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </Slide>
  );
};

export default Testimonials;
