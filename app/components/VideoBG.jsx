'use client'

import {motion} from "framer-motion"
import {Grey_Qo} from '@next/font/google'

const greyqo = Grey_Qo({subsets: ["latin"], weight: ["400"]})

const VideoBG = () => {
    return (
        <div className=' relative w-full h-auto'>
            <video className='w-full h-full' autoPlay loop muted src='/videoBg.mp4'></video>
            <div className="absolute inset-0 mix-blend-multiply">

                <motion.div
                    initial={{
                    opacity: 0
                }}
                    animate={{
                    opacity: 1,
                    x: 50
                }}
                    transition={{
                    duration: 0.5,
                    delay: 1.8
                }}
                    key={1}
                    className="pb-20 mr-20 pl-5 pt-44">
                    <div >

                        <img className=" scale-150" src="/logo_imarat.svg" alt="logo"/>

                    </div>
                </motion.div>
            </div>
            <div className="absolute inset-0">
                <div className="mr-20 pt-72">

                    <div>
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            x: 50
                        }}
                            transition={{
                            duration: 0.3,
                            delay: 2.5
                        }}
                            key={1}
                            className={greyqo.className}>

                            <p className="text-black absolute text-8xl">A Passion to Build</p>
                        </motion.div>
                        <motion.div
                            initial={{
                            opacity: 0
                        }}
                            animate={{
                            opacity: 1,
                            x: 50
                        }}
                            transition={{
                            duration: 0.3,
                            delay: 2.8
                        }}
                            key={1}
                            className="text-white absolute text-2xl pt-24">
                            <p>With 15+ mega projects nationwide,</p>
                            <p>Imarat is among the best construction companies in Pakistan.</p>
                        </motion.div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default VideoBG
