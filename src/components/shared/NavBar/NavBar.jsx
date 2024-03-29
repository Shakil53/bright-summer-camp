import { Fragment, useContext } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logoImg from '../../../assets/images/logo.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';



// const navigation = [

// { name: 'Home', href: '/', current: true },
// { name: 'Courses', href: '#', current: false },
// { name: 'Projects', href: '#', current: false },
// { name: 'Instractors', href: '#', current: false },
// { name: 'Gallery', href: '#', current: false },
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const { user, loggedOut } = useContext(AuthContext)


    //handle signOut
    const handleSignOut = () => {
        loggedOut()
            .then(() => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'warning',
                    title: 'logged out successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            })
            .catch(error => {
                console.log(error)
            })

    }

    return (

        <Disclosure as="nav" className="bg-gradient-to-r from-violet-600 to-indigo-200">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <motion.div initial={{ x: -150 }} animate={{ x: 0, y: -3, scale: 1.2 }} transition={{ duration: .5, type: 'spring', stiffness: 70 }} className="flex flex-shrink-0 items-center">
                                    <img
                                        className="w-10"
                                        src={logoImg}
                                        alt="Logo-summerCamp"
                                    />
                                </motion.div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-3">


                                        <Link className="btn btn-sm btn-outline text-gray-100 mt-1" to='/'>Home</Link>
                                        <Link className="btn btn-sm btn-outline text-gray-100 mt-1" to='/Courses'>Courses</Link>
                                        <Link className="btn btn-sm btn-outline text-gray-100 mt-1" to='/project'>Projects</Link>
                                        <Link className="btn btn-sm btn-outline text-gray-100 mt-1" to='/instractors'>Instractors</Link>

                                        {/* {navigation.map((item) => (
                                            <a

                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-800 text-white' : 'text-gray-100 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))} */}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {

                                    user ? <button onClick={handleSignOut} className="btn btn-sm btn-outline bg-[#42d8bf] text-gray-100 mr-3">Logout</button> :
                                        <>
                                            <Link className="btn btn-sm btn-outline bg-[#42d8bf] text-gray-100 mr-3" to='/register'>Register</Link>
                                            <Link className="btn btn-sm btn-outline bg-[#42d8bf]  text-gray-100 " to='/login'>Login</Link>
                                        </>
                                }

                                {/* <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>

                                    {/* notification------------- */}
                                {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}

                                {/* </button> */}

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-6 w-6 rounded-full"
                                                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
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
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <motion.div className="space-y-2 px-2 pb-3 pt-2 flex flex-col w-44"
                            whileHover={{ scale: 1.09, originX: 0 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                        >

                            <Link className="btn btn-sm btn-outline text-gray-100 mt-1" to='/Courses'>Courses</Link>
                            <Link className="btn btn-sm btn-outline text-gray-100 mt-1" to='/Projects'>Projects</Link>
                            <Link className="btn btn-sm btn-outline text-gray-100 mt-1" to='/Instractors'>Instractors</Link>
                            <Link className="btn btn-sm btn-outline text-gray-100 mt-1" to='/Gallery'>Gallery</Link>

                            {/* {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))} */}
                        </motion.div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>


    )
}
