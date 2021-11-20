/* This example requires Tailwind CSS v2.0+ */
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import bootLogo from './football-boots.png'


const navigation = [
  { name: 'Home', to: '/home', current: true },
  { name: 'Explore', to: '/explore', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const {user, logOut} = useAuth()
  return (
    <div className="fixed">
      <Disclosure as="nav" className="bg-white bg-opacity-10 w-screen">
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
                      <Link to={item.to} className={classNames(
                          item.current ? 'bg-green-500 text-white' : 'bg-yellow-400 bg-opacity-75 text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}>{item.name}</Link>
                    ))}
                    {
                  user?.email? <Link to="/dashboard"><button  className="bg-yellow-400 bg-opacity-75 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</button></Link> 
                  : <span></span>

                }
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                
                {
                  user?.email? <button onClick={logOut}  className="bg-gray-600 px-4 py-2 rounded-lg text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:font-bold">Logout</button> 
                  : <Link to="/login"><button type="button" className="bg-blue-600 px-4 py-2 rounded-lg text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:font-bold"
                >Login</button></Link>

                }
                
                {/* Profile dropdown */}
                {user?.photoURL && <Menu as="div" className="ml-3 relative">
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
                          <span
                            className='block px-4 py-2 text-sm text-gray-700'
                          >
                            {user.displayName}
                          </span>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            className='px-4 pt-1 mb-2 text-sm text-gray-700'
                          >
                            {user.email}
                          </span>
                        )}
                      </Menu.Item>
                      
                    </Menu.Items>
                  </Transition>
                </Menu>}
                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-green-500 text-white' : 'bg-yellow-400 hover:bg-yellow-600 text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </div>
  )
}