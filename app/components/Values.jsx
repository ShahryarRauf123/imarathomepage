'use client'

import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import {Josefin_Sans} from '@next/font/google'

const josefin_sans = Josefin_Sans({subsets: ["latin"], weight: ["400"]})


const Values = () => {
    return (
        <div className='w-full py-10 bg-white h-auto relative'>
            <div>
                <img className='w-full h-full' src="/images/business-park.jpg" alt="park"/>
            </div>
            <div className={josefin_sans.className} >
            <div
                className=" text-black absolute flex items-center justify-center inset-0">
                <h1 className="text-4xl pb-96 ">OUR CORE VALUES</h1>
            </div>
            </div>

            <div className="text-black absolute flex items-center justify-center inset-0 ">
                {/* MAIN DIV */}
                <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{
                once: true,
                amount: 0.7
            }}
                
                >
                <div className="bg-white bg-opacity-90 mx-5 p-12 rounded-lg">
                    <div className="flex">
                        <img className="pr-2 pb-2" src="/other/collaborate.svg" alt="asasd"/>
                        <ul className="text-2xl pt-2">INTEGRITY</ul>
                    </div>
                    <div className="text-sm">
                        <li>Ethics and business conduct</li>
                        <li>Honesty</li>
                        <li>Confidentiality of information</li>
                    </div>
                </div>
                </motion.div>
                {/* END MAIN DIV */}
                {/* MAIN DIV */}
                <motion.div
                 variants={fadeIn("up", 0.3)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{
                 once: true,
                 amount: 0.7
             }}
                 >
                <div className="bg-white bg-opacity-90 mx-5 p-12 rounded-lg">
                    <div className="flex">
                        <img className="pr-2 pb-2" src="/other/handshake.svg" alt="asasd"/>
                        <ul className="text-2xl pt-2">RELIABILITY</ul>
                    </div>
                    <div className="text-sm">
                        <li>Ownership</li>
                        <li>Trustworthy</li>
                        <li>Consistency and Discipline</li>
                    </div>
                </div>
                </motion.div>
                {/* END MAIN DIV */}
                {/* MAIN DIV */}
                <motion.div
                
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{
                once: true,
                amount: 0.7
            }}
                >
                <div className="bg-white bg-opacity-90 mx-5 p-12 rounded-lg">
                    <div className="flex">
                        <img className="pr-2 pb-2" src="/other/group.svg" alt="asasd"/>
                        <ul className="text-2xl pt-2">RESPECT</ul>
                    </div>
                    <div className="text-sm">
                        <li>Emotional Intelligence</li>
                        <li>Team Player</li>
                        <li>Respects Feedback</li>
                    </div>
                </div>
                </motion.div>
                {/* END MAIN DIV */}
                {/* MAIN DIV */}
                <motion.div
                 variants={fadeIn("up", 0.5)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{
                 once: true,
                 amount: 0.7
             }}
                 
                 >
                <div className="bg-white bg-opacity-90 mx-5 p-12 rounded-lg">
                    <div className="flex">
                        <img className="pr-2 pb-2" src="/other/innovation.svg" alt="asasd"/>
                        <ul className="text-2xl pt-2">INNOVATION</ul>
                    </div>
                    <div className="text-sm">
                        <li>Learning and Adaptability</li>
                        <li>Digital Literacy</li>
                        <li>Creativity and Agility</li>
                    </div>
                </div>
                </motion.div>
                {/* END MAIN DIV */}
                {/* MAIN DIV */}
                <motion.div
                 variants={fadeIn("up", 0.6)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{
                 once: true,
                 amount: 0.7
             }}
                 
                >
                <div className="bg-white bg-opacity-90 mx-5 p-12 rounded-lg">
                    <div className="flex">
                        <img className="pr-2 pb-2" src="/other/protest.svg" alt="asasd"/>
                        <ul className="text-2xl pt-2">DRIVE</ul>
                    </div>
                    <div className="text-sm">
                        <li>Positivity</li>
                        <li>Result Oriented Approach</li>
                        <li>Excellence in Education</li>
                    </div>
                </div>
                </motion.div>
                {/* END MAIN DIV */}
                
                
                
                
                
                

            </div>

        </div>
    )
}

export default Values