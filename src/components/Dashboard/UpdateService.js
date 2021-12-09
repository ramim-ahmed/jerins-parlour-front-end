import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
const UpdateService = ({ title }) => {
  const { id } = useParams();
  const [udpatedData, setUpdatedData] = useState({});
  const [icon, setIcon] = useState(udpatedData.icon);
  const serviceRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  useEffect(() => {
    fetch(`https://sleepy-plains-11170.herokuapp.com/api/find/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdatedData(data);
      });
  }, [id]);

  const handleImageUpload = (event) => {
    const imageData = new FormData();

    imageData.set("key", "3e6fac7ec3639b70e8109cbdce0ca3ad");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)

      .then(function (response) {
        setIcon(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUpdateService = (e) => {
    e.preventDefault();
    const service_name = serviceRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    const data = { service_name, description, price };

    const updatedService = { ...data, icon:icon || udpatedData.icon };
    fetch(`https://sleepy-plains-11170.herokuapp.com/api/udpate/service/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("updated successfully!");
        }
      });
  };
  return (
    <div>
      <div>
        <div>
          <h1 className="text-xl">{id}</h1>
        </div>
        <div className="mt-5">
          <section className="text-gray-600 body-font">
            <form onSubmit={handleUpdateService}>
              <div className="flex w-full flex-col space-y-3">
                <div className="relative flex-grow md:w-2/5 w-4/5">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="service name"
                    ref={serviceRef}
                    value={udpatedData.service_name}
                    className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative flex-grow md:w-2/5 w-4/5">
                  <textarea
                    type="text"
                    id="full-name"
                    name="full-name"
                    ref={descriptionRef}
                    placeholder="description"
                    defaultValue={udpatedData.description}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div className="relative flex-grow md:w-2/5  w-4/5">
                  <input
                    type="number"
                    id="full-name"
                    name="full-name"
                    placeholder="price"
                    ref={priceRef}
                    defaultValue={udpatedData.price}
                    className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative flex-grow md:w-2/5 w-4/5">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                    for="user_avatar"
                  >
                    Upload Image
                  </label>
                  <input
                    className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
                    aria-describedby="user_avatar_help"
                    id="user_avatar"
                    type="file"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <div className="mt-5 md:w-2/5 w-4/5">
                <button
                  type="submit"
                  className="text-white bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded mt-2"
                >
                  UDPATE
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
