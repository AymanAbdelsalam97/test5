import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SERVICE_BY_ID } from "../../graphql";
import { useParams, useNavigate } from "react-router-dom";
const ServicesDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_SERVICE_BY_ID, {
    variables: { id: id },
  });
  const serviceData = data?.service;
  const [service, setService] = useState();
  useEffect(() => {
    setService(serviceData);
  }, [serviceData]);

  const description = serviceData?.description;
  const serviceName = serviceData?.serviceName;
  const picture = serviceData?.servicePicture?.url;
  const onclick = () => {
    navigate(-1);
  };
  return (
    <div>
      <section className="max-w-2xl mx-auto my-0">
        <h1 className="py-10 text-4xl font-bold text-center"> {serviceName}</h1>
        <img
          className="object-contain w-full max-h-96"
          src={picture}
          alt={serviceName}
        />
        <h3 className="p-5 text-2xl text-blue-500"></h3>
        <p className="py-5 text-2xl">{description}</p>
        <button
          onClick={onclick}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        >
          Keer terug
        </button>
      </section>
    </div>
  );
};

export default ServicesDetailPage;
