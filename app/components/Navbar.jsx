'use client'

import Link from 'next/link';
import {useState} from 'react';
import {motion} from "framer-motion"

export default function Navbar() {


    const [isMenuOpen,
        setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white shadow-md top-0 z-50 sticky">
            <div className=" mx-auto px-4 relative sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">

                        {/* Left Menu Items */}

                        <div className="hidden lg:flex space-x-20 items-center pl-20 ">
                            <motion.div
                                initial={{
                                opacity: 0
                            }}
                                animate={{
                                opacity: 1,
                                y: 4
                            }}
                                transition={{
                                duration: 0.25,
                                delay: 0.1
                            }}
                                key={1}>
                                <Link href="/development" className="text-gray-600 hover:text-black">
                                    DEVELOPMENTS
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{
                                opacity: 0
                            }}
                                animate={{
                                opacity: 1,
                                y: 4
                            }}
                                transition={{
                                duration: 0.25,
                                delay: 0.2
                            }}
                                key={1}>
                                <Link href="/world-of-imarat" className="text-gray-600 hover:text-black">
                                    WORLD OF IMARAT
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{
                                opacity: 0
                            }}
                                animate={{
                                opacity: 1,
                                y: 4
                            }}
                                transition={{
                                duration: 0.25,
                                delay: 0.3
                            }}
                                key={1}>
                                <Link href="/sustainability" className="text-gray-600 hover:text-black">
                                    SUSTAINABILITY
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Center Logo */}

                    <div className="flex justify-center flex-1 md:flex-none py-5">
                        <Link href="/" className="text-3xl font-semibold text-gray-800">
                            IMARAT
                        </Link>
                    </div>

                    {/* Right Menu Items */}

                    <div className="hidden lg:flex space-x-20 items-center pr-20">
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            y: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.4
                        }}
                            key={1}>

                            <Link href="/hospitality" className="text-gray-600 hover:text-black">
                                HOSPITALITY
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            y: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.5
                        }}
                            key={1}>
                            <Link href="/life-at-imarat" className="text-gray-600 hover:text-black">
                                LIFE AT IMARAT
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            y: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.6
                        }}
                            key={1}>
                            <Link href="/proptech" className="text-gray-600 hover:text-black">
                                PROPTECH
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}

                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-black focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                 className="lg:hidden pb-10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            x: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.1
                        }}
                            key={1}>
                            <Link href="/developments" className="block text-gray-600 p-3 hover:text-black">
                                DEVELOPMENTS
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            x: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.2
                        }}
                            key={1}>
                            <Link
                                href="/world-of-imarat"
                                className="block text-gray-600 p-3 hover:text-black">
                                WORLD OF IMARAT
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            x: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.3
                        }}
                            key={1}>
                            <Link
                                href="/sustainability"
                                className="block text-gray-600 p-3 hover:text-black">
                                SUSTAINABILITY
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            x: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.4
                        }}
                            key={1}>
                            <Link href="/hospitality" className="block text-gray-600 p-3 hover:text-black">
                                HOSPITALITY
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            x: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.5
                        }}
                            key={1}>
                            <Link
                                href="/life-at-imarat"
                                className="block text-gray-600 p-3 hover:text-black">
                                LIFE AT IMARAT
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            x: 4
                        }}
                            transition={{
                            duration: 0.25,
                            delay: 0.6
                        }}
                            key={1}>
                            <Link href="/proptech" className="block text-gray-600 p-3 hover:text-black">
                                PROPTECH
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
