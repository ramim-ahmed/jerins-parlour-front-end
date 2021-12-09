import React, { useState } from "react";

const MakeAdmin = ({ title }) => {
  const [adminEmail, setAdminEmail] = useState("");
  const handleMakeAdmin = (e) => {
    e.preventDefault();
    const newAdmin = { adminEmail };
    console.log(newAdmin);
  };
  return (
    <>
      <div>
        <h1 className="text-xl">{title}</h1>
      </div>
      <div className="mt-3">
        <form>
          <div className="relative flex-grow md:w-2/5 w-4/5">
            <input
              type="text"
              id="full-name"
              onChange={(e) => setAdminEmail(e.target.value)}
              name="full-name"
              placeholder="write email...."
              className="w-full bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button
              onClick={handleMakeAdmin}
              type="submit"
              className="text-white bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 rounded mt-2"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MakeAdmin;
