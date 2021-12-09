import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
const Book = ({ title }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookService, setBookService] = useState({});
  const { user } = useAuth();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchSingleService = async () => {
    const url = `https://sleepy-plains-11170.herokuapp.com/api/service?id=${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setBookService(data);
  };
  useEffect(() => {
    fetchSingleService();
  }, [fetchSingleService, id]);
  const { service_name, price } = bookService;

  const handleAddPlacedOrder = ({ _id, ...rest }) => {
    const book = {
      ...rest,
      user_name: user.displayName,
      user_email: user.email,
      status: "pending",
    };
    fetch("https://sleepy-plains-11170.herokuapp.com/api/insert/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your Services Successfully Placed.");
          navigate("/dashboard/booking-list");
        }
      });
  };
  return (
    <div>
      <div>
        <h1 className="text-xl">{title}</h1>
      </div>
      <div className="mt-5">
        <section className="text-gray-600 body-font">
          <div className="">
            <div className="flex w-full flex-col space-y-5">
              <div className="relative flex-grow md:w-2/5 w-4/5">
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  defaultValue={user.displayName}
                  className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow md:w-2/5  w-4/5">
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  defaultValue={user.email}
                  className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative flex-grow md:w-2/5 w-4/5">
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  defaultValue={service_name}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="mt-5 md:w-2/5 w-4/5">
              <h1>Your Service charged will be ${price}</h1>
              {id && (
                <button
                  onClick={() => handleAddPlacedOrder(bookService)}
                  className="text-white bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded mt-2"
                >
                  PLACED ORDER
                </button>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Book;
