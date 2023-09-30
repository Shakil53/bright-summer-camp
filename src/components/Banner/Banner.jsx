import React from 'react';
import bannerImg from '../../assets/images/summer-camp-banner-img.png'
import TypingEffect from './TypingEffect';
import { motion } from 'framer-motion';


const Banner = () => {
    return (
        <div className="hero md:min-h-[450px] md:h-[550px]" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <motion.div animate={{ x: -80 }} transition={{ duration: .4, type: 'spring' }} className="w-full text-left ml-16">
                    <h1 className="mb-5 font-[mooli] text-xl md:text-5xl font-bold opacity-90">Wellcome to <br></br>Bright<span className='text-orange-400'> Summer Camp</span></h1>
                    {/* <p className="mb-5 font-[lato]">A Summer of Learning and Light.Where Knowledge Shines Bright</p> */}
                    <div animate={{ fontSize: 120 }} className="mb-5 font-[lato]">A Summer of Learning and Light. <TypingEffect></TypingEffect></div>
                    <motion.button
                        whileHover={{ scale: 1.09 }}
                        className="btn btn-outline btn-warning md:btn-sm btn-xs ">Explore now</motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;