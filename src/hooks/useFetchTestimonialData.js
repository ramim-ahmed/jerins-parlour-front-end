import { useEffect, useState } from "react";

const useFetchTestimonial = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    const fetchData = async () => {
        const res = await fetch('https://sleepy-plains-11170.herokuapp.com/api/user/reviews');
        const data = await res.json();
        setTestimonialData(data)
    }
    useEffect( () => {
        fetchData()
    }, []);
    return [testimonialData]
}

export default useFetchTestimonial;