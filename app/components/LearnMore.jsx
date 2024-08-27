'use client'

import {motion} from "framer-motion"
import {Josefin_Sans} from '@next/font/google'
import {fadeIn} from '../variants'

const josefin_sans = Josefin_Sans({subsets: ["latin"], weight: ["400"]})

const LearnMore = () => {
    return (
        <section className='bg-white '>

            <div className='flex items-center justify-center pt-52 pb-52'>
                <div className='bg-slate-100 flex p-10 rounded-2xl'>
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{
                        once: true,
                        amount: 0.7
                    }}
                        className='pl-20 pr-20 pt-10 bg-slate-200 my-10 mx-5 rounded-lg text-black grid place-items-center'>
                        <img className='rounded-md' src="/tech_imarat.jpg" alt="1"/>
                        <div className={josefin_sans.className}>
                            <h1 className='pt-8'>WORLD OF IMARAT</h1>
                        </div>
                        <div className={josefin_sans.className}>
                            <p className='max-w-xs text-sm pt-5 text-gray-900'>
                                Explore all the ways we shape your lifestyle and the real estate industry in
                                Pakistan
                            </p>
                        </div>
                        <div className='pt-4'>
                            <button
                                type="button"
                                class="text-white bg-gradient-to-br from-green-950 to-yellow-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
                                 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>

                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{
                        once: true,
                        amount: 0.7
                    }}
                        className='pl-20 pr-20 pt-10 bg-slate-200 my-10 mx-5 rounded-lg text-black grid place-items-center'>
                        <img className='rounded-md' src="/imarat_building.png" alt="1"/>
                        <div className={josefin_sans.className}>
                            <h1 className='pt-8'>DEVELOPMENTS</h1>
                        </div>
                        <div className={josefin_sans.className}>
                            <p className='max-w-xs text-sm pt-5 text-gray-900'>
                                Explore our world-class developments with more than 10M+ Sq. ft. area under
                                construction
                            </p>
                        </div>
                        <div className='pt-4'>
                            <button
                                type="button"
                                class="text-white bg-gradient-to-br from-green-950 to-yellow-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
                                 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>

                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("left", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{
                        once: true,
                        amount: 0.7
                    }}
                        className='pl-20 pr-20 pt-10 bg-slate-200 my-10 mx-5 rounded-lg text-black grid place-items-center'>
                        <img className='rounded-md' src="/building.png" alt="1"/>
                        <div className={josefin_sans.className}>
                            <h1 className='pt-8'>PROPTECH</h1>
                        </div>
                        <div className={josefin_sans.className}>
                            <p className='max-w-xs text-sm pt-5 text-gray-900'>
                                Using cutting-edge technology to transform blueprints into the best construction
                                reality
                            </p>
                        </div>
                        <div className='pt-4'>
                            <button
                                type="button"
                                class="text-white bg-gradient-to-br from-green-950 to-yellow-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200
                                 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>

                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default LearnMore