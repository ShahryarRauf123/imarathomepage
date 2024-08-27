'use client'

import {Josefin_Sans} from '@next/font/google'
import ProjectSlot from './ProjectSlot'
import ProjectImarat from './ProjectImarat'
import {useState} from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'


const josefin_sans = Josefin_Sans({subsets: ["latin"], weight: ["400"]})

const Projects = () => {

    const [selectedProject,
        setSelectedProject] = useState('');

    return (
        <div className='p-20 bg-white text-black pl-44'>

            <div className={josefin_sans.className}>
                <div className='col-span-1 pl-10'>
                    <motion.div 
                    
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{
                    once: true,
                    amount: 0.7
                }}
                    className=''>
                    <h1 className='text-3xl'>Developments</h1>
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
                    <p className='max-w-xs text-md pt-5 text-gray-900'>
                        IMARAT’s projects each exude their own unique design aesthetic, offering an
                        aspirational lifestyle within a thriving community, complemented by our
                        dedicated community management team.
                    </p>
                    </motion.div>

                </div>
                <div className="p-4 col-span-2 ">
                    <ProjectImarat selectedProject={selectedProject}/>
                </div>
            </div>

            <div className='items-center pt-10'>
                <ProjectSlot onSelectProject={setSelectedProject}/>

            </div>

        </div>
    )
}

export default Projects