import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const {_id, icon, service_name, description, price } = service;
  return (
   
      <div
        className={`p-4 md:w-1/3 flex flex-col text-center items-center ${
          price === 201 ? "shadow-lg" : ""
        }`}
      >
           <Link to={`dashboard/book/${service_name}/${_id}`}>
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-secendary bg-opacity-10 text-indigo-500 mb-5 flex-shrink-0">
          <img src={icon} alt="" />
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-semibold mb-3">
            {service_name}
          </h2>
          <h2 className="text-lg title-font font-medium mb-3 text-primary">
            ${price}
          </h2>
          <p className="leading-relaxed text-base">{description}</p>
        </div>
        </Link>
      </div>
    
  );
};

export default Service;
