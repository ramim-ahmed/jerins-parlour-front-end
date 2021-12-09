import React from "react";
import { Link } from "react-router-dom";
import useData from "../../hooks/useData";
const ManageService = ({ title }) => {
  const [data] = useData();

  const handleDeleteService = (id) => {
    const proceed = window.confirm("Are You Sure Want To Delete");
    if (proceed) {
      fetch(`https://sleepy-plains-11170.herokuapp.com/api/delete/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Service Successfully Deleted!");
          }
        });
    }
  };

  const AllService = data.map((service) => (
    <tr key={service._id}>
      <td class="p-2 whitespace-nowrap">
        <div class="flex items-center">
          <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
            <img
              class="rounded-full"
              src={service.icon}
              width="40"
              height="40"
              alt="Alex Shatov"
            />
          </div>
          <div class="font-medium text-gray-800">{service.service_name}</div>
        </div>
      </td>
      <td class="p-2">
        <div class="text-left">{service.description}</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-left font-medium text-green-500">${service.price}</div>
      </td>
      <td class="p-2 whitespace-nowrap">
        <div class="text-lg text-center">
          <div className="space-x-1">
            <Link to={`/dashboard/update-service/${service._id}`}>
              <button type="button" className="hover:text-primary duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                  <path
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </Link>
            <button
              onClick={() => handleDeleteService(service._id)}
              type="button"
              className="hover:text-primary duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </td>
    </tr>
  ));
  return (
    <>
      <div>
        <h1 className="text-xl">{title}</h1>
      </div>
      <div>
        <section class=" bg-gray-100 text-gray-600 h-screen ">
          <div class="flex flex-col mt-5 h-screen">
            <div class="w-full mx-auto bg-white rounded-sm border border-gray-200">
              <div>
                <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Service</div>
                        </th>
                        <th class="p-2">
                          <div class="font-semibold text-left">Description</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-left">Price</div>
                        </th>
                        <th class="p-2 whitespace-nowrap">
                          <div class="font-semibold text-center">Action</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {AllService}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManageService;
