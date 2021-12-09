import React, { createContext } from "react";
import useFetchTestimonial from "../hooks/useFetchTestimonialData";
export const TestimonialDataContext = createContext();
const TestimonialContext = (props) => {
  const [testimonialData] = useFetchTestimonial();
  console.log(testimonialData);
  return (
    <TestimonialDataContext.Provider value={[testimonialData]}>
      {props.children}
    </TestimonialDataContext.Provider>
  );
};

export default TestimonialContext;
