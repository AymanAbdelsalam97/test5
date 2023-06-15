import React from "react";
import { JumboTron } from "../components";
import { BlogPage, PortFolioPage, ServicesPage } from "../pages";
const HomePage = () => {
  return (
    <div>
      <JumboTron />
      <section className="portfolios-home">
        <h1 className="m-5 text-3xl text-center text-blue-800">PortFolios</h1>
        <PortFolioPage hideSearch={true} limit={6} />
      </section>
      <section className="blogs-home">
        <h1 className="m-5 text-3xl text-center text-blue-800">
          Blog-Communities
        </h1>
        <BlogPage hideSearch={true} limit={3} />
      </section>
      <section className="services-home">
        <h1 className="m-5 text-3xl text-center text-blue-800">Services</h1>
        <ServicesPage limit={3} />
      </section>
    </div>
  );
};

export default HomePage;
