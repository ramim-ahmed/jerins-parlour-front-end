import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Brand from "../../assets/Group 33092.png";
import useAuth from "../../hooks/useAuth";
const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <header style={{backgroundColor:'#fff8f5'}} className="text-gray-600 body-font fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <ScrollLink
            to="/"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer"
          >
            <span className="ml-3 text-xl">
              <img width="130px" src={Brand} alt="" />
            </span>
          </ScrollLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="mr-5 hover:text-gray-900 text-sm font-medium cursor-pointer"
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="service"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="mr-5 hover:text-gray-900 text-sm font-medium cursor-pointer"
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="testimonial"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="mr-5 hover:text-gray-900 text-sm font-medium cursor-pointer"
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="contact-us"
              spy={true}
              smooth={true}
              offset={-100}
              duration={1000}
              className="mr-5 hover:text-gray-900 text-sm font-medium cursor-pointer"
            >
              Contact Us
            </ScrollLink>
            {user.email && (
              <Link
                to="/dashboard"
                className="mr-5 hover:text-gray-900 text-sm font-medium cursor-pointer"
              >
                Dashboard
              </Link>
            )}
          </nav>
          {!user.email ? (
            <Link to="/login">
              <button className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 text-white rounded text-sm mt-4 md:mt-0">
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          ) : (
            <button
              onClick={logOut}
              className="inline-flex items-center bg-primary border-0 py-1 px-3 focus:outline-none hover:bg-pink-500 text-white rounded text-sm mt-4 md:mt-0"
            >
              Logout
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navigation;
