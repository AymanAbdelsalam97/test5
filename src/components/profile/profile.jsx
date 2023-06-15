import React from "react";
import { Link } from "react-router-dom";
const Profile = ({ data }) => {
  const { email, profile, username } = data;
  const {
    aboutMe,
    address,
    city,
    country,
    firstname,
    lastname,
    postalCode,
    profilePicture,
  } = profile;
  const picture = profilePicture.url;

  return (
    <section className="py-1 bg-blueGray-50">
      <div className="w-full px-4 mx-auto mt-6 lg:w-8/12">
        <div className="relative flex flex-col w-full min-w-0 mb-6 break-words border-0 rounded-lg shadow-lg bg-blueGray-100">
          <div className="px-6 py-6 mb-0 bg-white rounded-t">
            <div className="flex justify-between text-center">
              <h6 className="text-xl font-bold text-blueGray-700">
                My account
              </h6>
              <button
                className="px-4 py-2 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
                type="button"
              >
                <Link to={`settings`}>Settings</Link>
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
            <form>
              <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                User Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      username
                    </label>
                    <input
                      type="text"
                      readOnly
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue={username}
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Email address
                    </label>
                    <input
                      readOnly
                      type="email"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue={email}
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      First Name
                    </label>
                    <input
                      readOnly
                      type="text"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue={firstname}
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Last Name
                    </label>
                    <input
                      readOnly
                      type="text"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue={lastname}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                Contact Information
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-12/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      readOnly
                      type="text"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue={address}
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      City
                    </label>
                    <input
                      readOnly
                      type="email"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue={city}
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Country
                    </label>
                    <input
                      readOnly
                      type="text"
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue={country}
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:w-4/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      Postal Code
                    </label>
                    <input
                      type="text"
                      readOnly
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring"
                      defaultValue={postalCode}
                    />
                  </div>
                </div>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
              <h6 className="mt-3 mb-6 text-sm font-bold uppercase text-blueGray-400">
                About Me
              </h6>
              <div className="flex flex-wrap">
                <div className="w-full px-4 lg:w-12/12">
                  <div className="relative w-full mb-3">
                    <label
                      className="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                      htmlFor="grid-password"
                    >
                      About me
                    </label>
                    <textarea
                      type="text"
                      readOnly
                      className="w-full px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-0 rounded shadow placeholder-blueGray-300 text-blueGray-600 focus:outline-none focus:ring h-96"
                      rows={4}
                      defaultValue={aboutMe}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-2">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="w-full px-4 mx-auto text-center md:w-6/12">
                <div className="py-1 text-sm font-semibold text-blueGray-500">
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                  >
                    {" "}
                    Creative Tim
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Profile;
