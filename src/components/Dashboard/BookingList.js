import React, { useEffect, useState } from "react";
import Loading_Spinner from "../../assets/dribbble-spinner-800x600.gif";
import useAuth from "../../hooks/useAuth";
const BookingList = ({ title }) => {
  const [booking, setBooking] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const {user} = useAuth();
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchBooking = async () => {
    setIsloading(true);
    const res = await fetch(`https://sleepy-plains-11170.herokuapp.com/api/service/booking?email=${user.email}`);
    const data = await res.json();
    setBooking(data);
    setIsloading(false);
  };
  useEffect(() => {
    fetchBooking();
  }, []);

  const Booking = booking.map((book) => (
    <div key={book._id} >
      <div className="bg-white p-5 rounded-md">
        <div className="flex justify-between items-center mb-4">
          <img width="60px" src={book.icon} alt="" />
          <p className="bg-red-200 px-4 py-1 rounded-md">{book.status}</p>
        </div>
        <div>
          <h1 className="text-lg font-normal my-3">{book.service_name}</h1>
          <p className="text-gray-500">{book.description}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="m-3 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
      {isLoading && (
        <div className="loading flex justify-center items-center">
          <img width="130px" src={Loading_Spinner} alt="" />
        </div>
      )}
      {Booking}
    </div>
  );
};

export default BookingList;
