import { useContext } from "react";
import { ServicesDataContext } from "../context/DataContext";

const useData = () => {
    return useContext(ServicesDataContext)
}

export default useData;