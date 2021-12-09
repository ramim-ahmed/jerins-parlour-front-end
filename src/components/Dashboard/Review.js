import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Review = ({ title }) => {
  const [photo, setPhoto] = useState("");
  const handleImageUpload = (event) => {
    const imageData = new FormData();

    imageData.set("key", "3e6fac7ec3639b70e8109cbdce0ca3ad");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)

      .then(function (response) {
        setPhoto(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const {
    reset ,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const review = { ...data, photo };
    fetch('https://sleepy-plains-11170.herokuapp.com/api/insert/review', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(review)
    })
    .then( res => res.json())
    .then( data => {
        if(data.insertedId){
            alert('Thanks, Your Valuable Review. Connect With Us.')
        }
        reset()
    })
  };
  return (
    <div>
      <div>
        <div>
          <h1 className="text-xl">{title}</h1>
        </div>
        <div className="mt-5">
          <section className="text-gray-600 body-font">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex w-full flex-col space-y-3">
                <div className="relative flex-grow md:w-2/5 w-4/5">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Your Name"
                    className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="relative flex-grow md:w-2/5  w-4/5">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Your Country"
                    className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    {...register("country", { required: true })}
                  />
                  {errors.country && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="relative flex-grow md:w-2/5  w-4/5">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="Designation"
                    className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    {...register("designation", { required: true })}
                  />
                  {errors.designation && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>

                <div className="relative flex-grow md:w-2/5 w-4/5">
                  <textarea
                    type="text"
                    id="full-name"
                    name="full-name"
                    placeholder="comments"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    cols="30"
                    rows="5"
                    {...register("comments", { required: true })}
                  ></textarea>
                  {errors.comments && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="relative flex-grow md:w-2/5 w-4/5">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                    for="user_avatar"
                  >
                    Upload Your Photo
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
                  SUBMIT
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Review;
