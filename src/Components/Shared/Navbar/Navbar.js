/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import bootLogo from "./football-boots.png";

const navigation = [
  { name: "Home", to: "/home", current: true },
  { name: "Explore", to: "/explore", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { user, logOut } = useAuth();
  return (
    <div className="fixed">
      <Disclosure
        as="nav"
        className="bg-green-800 md:bg-white bg-opacity-95 md:bg-opacity-10 w-screen"
      >
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between align-center h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={bootLogo}
                      alt=""
                    />
                    <img
                      className="hidden lg:block h-12 w-auto"
                      src={bootLogo}
                      alt=""
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-green-500 text-white"
                              : "bg-yellow-400 bg-opacity-75 text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                      {user?.email ? (
                        <Link to="/dashboard">
                          <button className="bg-yellow-400 bg-opacity-75 text-white px-3 py-2 rounded-md text-sm font-medium">
                            Dashboard
                          </button>
                        </Link>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {user?.email ? (
                    <div className="align-middle">
                      <Link to="/cart" className="hidden md:inline">
                        <button className="px-4 mr-2 py-2 rounded-lg  bg-opacity-75 text-yellow-400 align-bottom">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                        </button>
                      </Link>
                      <button
                        onClick={logOut}
                        className="bg-gray-600 px-4 py-2 rounded-lg text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:font-bold"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link to="/login">
                      <button
                        type="button"
                        className="bg-blue-600 px-4 py-2 rounded-lg text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:font-bold"
                      >
                        Login
                      </button>
                    </Link>
                  )}

                  {/* Profile dropdown */}
                  {user?.photoURL && (
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-9 w-9 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-50 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none pb-2">
                          <Menu.Item>
                            {({ active }) => (
                              <span className="block px-4 py-2 text-sm text-gray-700">
                                {user.displayName}
                              </span>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <span className="px-4 pt-1 mb-2 text-sm text-gray-700">
                                {user.email}
                              </span>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )}
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden z-40">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Link
                    to={item.to}
                    className={classNames(
                      item.current
                        ? "bg-green-500 text-white"
                        : "bg-yellow-400 text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                {user?.email ? (
                  <div className="text-center">
                    <Link to="/dashboard">
                      <button className="bg-yellow-400 text-white block w-full text-left my-1 px-3 py-2 rounded-md text-base font-medium">
                        Dashboard
                      </button>
                    </Link>
                    <Link to="/cart" className="">
                      <button className="bg-yellow-400 text-white text-center block w-full my-1 px-3 py-2 rounded-md text-base font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 text-center"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                ) : (
                  <span></span>
                )}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
