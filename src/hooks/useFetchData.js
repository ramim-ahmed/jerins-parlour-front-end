import { useEffect, useState } from "react";

const useFetchData = () => {
    const [data, setData] = useState([]);
    const fetchServicesData = async () => {
      const res = await fetch('https://sleepy-plains-11170.herokuapp.com/api/all-services');
      const data = await res.json();
      setData(data)
    }
    useEffect( () => {
        fetchServicesData()
    }, [])

    return [data]
}

export default useFetchData;