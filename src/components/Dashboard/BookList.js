import React, { useEffect, useState } from "react";
import Loading_Spinner from "../../assets/dribbble-spinner-800x600.gif";
const BookList = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const fetchAllBooks = async () => {
    setIsloading(true);
    const res = await fetch("https://sleepy-plains-11170.herokuapp.com/api/allbooks");
    const data = await res.json();
    setAllBooks(data);
    setIsloading(false);
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const AllBooks = allBooks.map((book) => (
    <tr key={book._id}>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex items-center">
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap">{book.user_name}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{book.user_email}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">{book.service_name}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span
            aria-hidden
            class="absolute inset-0 opacity-50 rounded-full"
          ></span>
          <span class="relative">
            <form>
              <select value={book.status}>
                <option value={book.status} key="">
                  {book.status}
                </option>
                <option value="Aproved">Aproved</option>
              </select>
            </form>
          </span>
        </span>
      </td>
    </tr>
  ));

  return (
    <div>
      <div class="bg-white p-8 rounded-md w-full">
        <div class=" flex items-center justify-between">
          <div>
            <h2 class="text-gray-600 font-semibold">All Book Order</h2>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex bg-gray-50 items-center p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
              <input
                class="bg-gray-50 outline-none ml-1 block "
                type="text"
                name=""
                id=""
                placeholder="search..."
              />
            </div>
          </div>
        </div>
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      NAME
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      EMAIL ID
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      SERVICE
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading && (
                    <div className="loading flex justify-center items-center">
                      <img width="130px" src={Loading_Spinner} alt="" />
                    </div>
                  )}
                  {AllBooks}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookList;
