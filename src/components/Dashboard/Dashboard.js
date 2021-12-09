import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import brand_img from "../../assets/Group 33097.png";
const Dashboard = () => {
  return (
    <section
      style={{ backgroundColor: "#F4F7FC" }}
      className="h-screen w-full md:flex "
    >
      <div className="sidebar bg-blue-800 md:w-1/5 p-5 ">
        <Link to="/">
          <div>
            <img src={brand_img} alt="" />
          </div>
        </Link>

        <ul className="mt-5 space-y-3 text-white">
          <li className=" hover:bg-blue-700 px-3 py-1 duration-300 cursor-pointer">
            <Link className="flex space-x-2 items-center" to="/dashboard/book">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Book
            </Link>
          </li>
          <li className=" hover:bg-blue-700 px-3 py-1 duration-300 cursor-pointer">
            <Link className="flex items-center" to="/dashboard/booking-list">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>{" "}
              Booking-List
            </Link>
          </li>
          <li className=" hover:bg-blue-700 px-3 py-1 duration-300 cursor-pointer">
            <Link className="flex items-center" to="/dashboard/review">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>{" "}
              Review
            </Link>
          </li>
        </ul>

        {/* admin user  */}
        <ul className="mt-5 space-y-3 text-white">
          <li className=" hover:bg-blue-700 px-3 py-1 duration-300 cursor-pointer">
            <Link
              className="flex space-x-2 items-center"
              to="/dashboard/book-list"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
              Book List
            </Link>
          </li>
          <li className=" hover:bg-blue-700 px-3 py-1 duration-300 cursor-pointer">
            <Link className="flex items-center" to="/dashboard/add-service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Add Service
            </Link>
          </li>
          <li className=" hover:bg-blue-700 px-3 py-1 duration-300 cursor-pointer">
            <Link className="flex items-center" to="/dashboard/make-admin">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Make Admin
            </Link>
          </li>
          <li className=" hover:bg-blue-700 px-3 py-1 duration-300 cursor-pointer">
            <Link className="flex items-center" to="/dashboard/manage-service">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
              Manage Services
            </Link>
          </li>
        </ul>
      </div>
      <div className="main_content md:w-4/5">
        <div className="shadow p-6 mb-3 w-full">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>
        <div className="px-5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
