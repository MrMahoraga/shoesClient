import React from 'react'
import CreateCard from "./CreateCard";
import { motion } from 'framer-motion'
import Slider from "./Slider";
import Video from '../../assets/video/Video1.mp4';

export default function Home() {
    return (
        <div>
            <div className='flex flex-col'>
                <CreateCard />
                <Slider />
                <br />
            </div>

            <div className="relative h-[500px]">
                <video autoPlay loop muted className=" absolute inset-0 w-full h-[550px] object-cover">
                    <source src={Video} type="video/mp4" />
                    <div>okdfja</div>

                </video>

                <div className="relative z-10 flex justify-between px-32 pt-[200px] text-white">

                    <div>

                        <div className="flex justify-centre h-screen bg-transparent">
                            <motion.h1
                                className="text-white text-6xl font-bold absolute"
                                initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1.5, ease: 'easeOut', type: 'spring', stiffness: 120 }}
                                whileHover={{ scale: 1.2, textShadow: "0px 0px 12px rgba(255,255,255,1)", rotate: 5 }}
                                whileTap={{ scale: 0.95, rotate: -5 }}
                                exit={{ opacity: 0, scale: 0.5, rotate: 15 }}
                            >
                                JUST DO IT!
                            </motion.h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-screen'>

                

            </div>

        </div>
    )
} 
