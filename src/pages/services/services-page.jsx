import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_SERVICES } from "../../graphql";
import { Link } from "react-router-dom";
const ServicesPage = ({ limit }) => {
  const { loading, error, data } = useQuery(GET_ALL_SERVICES);
  const serviceData = data?.services;

  const [services, setServices] = useState();

  useEffect(() => {
    setServices(serviceData);
  }, [serviceData]);

  const service = serviceData?.slice(0, limit).map((service) => {
    const { id, serviceName, description, servicePicture } = service;
    const picture = servicePicture?.url;
    return (
      <li
        key={id}
        className="flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <Link to={`/services/${id}`} className="block">
          <img
            className="object-cover w-full h-56 rounded-t-lg"
            src={picture}
            alt={serviceName}
          />

          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {serviceName}
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Een fantastische Service aangeboden door de Artevelde Hogeschool
            </p>
            <button
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Lees meer
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </Link>
      </li>
    );
  });

  return (
    <ul className="flex flex-wrap gap-10 mx-auto my-10 max-w-7xl">{service}</ul>
  );
};

export default ServicesPage;
