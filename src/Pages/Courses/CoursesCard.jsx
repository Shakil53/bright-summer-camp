import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const CoursesCard = ({ course }) => {
    const [item, setItem] = useState([])

    const navigation = useNavigate()

    const handleEnroll = (product) => {
        // navigation('/enrollment')
        console.log(product);
    }


    // console.log(course.details)
    const { name, img, price, details, _id, rating } = course;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-[180px] rounded-md' src={img} alt="course name" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl uppercase font-[mooli]">{name}</h2>
                <p className='font-[mooli]  text-xs'>Details: {details}</p>
                <p className='font-[mooli]  text-sm font-bold'><small>Price: ${price}</small></p>
                <p className='font-[mooli]  text-xs'><small>Ratings: {rating}</small></p>
                <div className="card-actions justify-end">
                    <Link to={`/enrollment/${_id}`}><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>

                </div>
            </div>
        </div>
    );
};

export default CoursesCard;