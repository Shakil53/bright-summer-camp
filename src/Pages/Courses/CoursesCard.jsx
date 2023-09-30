import React from 'react';

const CoursesCard = ({ course }) => {
    // console.log(course.details)
    const { name, img, price, details, rating } = course;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-[180px] rounded-md' src={img} alt="course name" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl uppercase font-[mooli]">{name}</h2>
                <p className='font-[mooli]  text-xs'>Details: {details}</p>
                <p className='font-[mooli]  text-sm font-bold'><small>Price: ${price}</small></p>
                <p className='font-[mooli]  text-xs'><small>Ratings: {rating}</small></p>
                <div className="card-actions justify-end">
                    <button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;