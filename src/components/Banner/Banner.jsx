import React from 'react';
import bannerImg from '../../assets/images/summer-camp-banner-img.png'
import TypingEffect from './TypingEffect';


const Banner = () => {
    return (
        <div className="hero min-h-[550px]" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full text-left">
                    <h1 className="mb-5 font-[mooli] text-xl md:text-5xl font-bold">Wellcome to <br></br>Bright<span className='text-orange-400'> Summer Camp</span></h1>
                    {/* <p className="mb-5 font-[lato]">A Summer of Learning and Light.Where Knowledge Shines Bright</p> */}
                    <div className="mb-5 font-[lato]">A Summer of Learning and Light. <TypingEffect></TypingEffect></div>
                    <button className="btn btn-outline btn-warning btn-sm md:btn-md">Explore now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;