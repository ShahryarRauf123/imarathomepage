'use client'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Map = () => {
    return (
        <div className='w-full h-auto relative'>
            <img className='w-full h-full' src="/images/imarat_map.png" alt="map"/>
            <div className=" text-gray-700 absolute inset-0 mix-blend-multiply">
                <motion.div 
                 variants={fadeIn("right", 0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{
                 once: true,
                 amount: 0.7
             }}
                >
                    <h1 className='text-4xl pt-32 z-10 max-w-3xl m-10'>WE'VE GOT YOU COVERED IN OVER 5 COUNTRIES</h1>
                </motion.div>
                <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{
                once: true,
                amount: 0.7
            }}
                >
                <p className='text-xl m-10 max-w-sm'>More than
                    <strong> 200 offices </strong>and <strong>2000+ employees</strong>
                </p>
                </motion.div>
            </div>

        </div>
    )
}

export default Map