import { useContext } from "react";
import { TestimonialDataContext } from "../context/TestimonialContext";



const useTestimonial = () => {
    return useContext( TestimonialDataContext )
}

export default useTestimonial;