import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Footer from '../../components/shared/Footer/Footer';
import SectionTitle from '../../components/shared/SectionTitle/SectionTitle';
import { AuthContext } from '../../Providers/AuthProvider';



const EnrollMent = () => {
    const enrollmentId = useLoaderData()
    const { user } = useContext(AuthContext)
    const { name, details, img, price, rating, _id } = enrollmentId;

    const handleEnroll = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = user?.displayName;
        const phone = form.phone.value;
        const bio = form.bio.value;
        const date = form.date.value;
        const amount = user?.price;
        const email = user?.email;
        // console.log(name, phone, bio, date, amount, email)
        const bookings = {
            customerName: name,
            email,
            date,
            phone,
            service: _id,
            price: price
        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        form.reset();
    }


    return (
        <>
            <SectionTitle heading={'Selected Course'}
                subHeading={'Booking Now'}
            ></SectionTitle>
            <div className='max-w-3xl w-1/2 m-auto mt-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img className='h-[180px] rounded-md' src={img} alt="course name" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-xl uppercase font-[mooli]">{name}</h2>
                        <p className='font-[mooli]  text-xs'>Details: {details}</p>
                        <p className='font-[mooli]  text-sm font-bold'><small>Price: ${price}</small></p>
                        <p className='font-[mooli]  text-xs'><small>Ratings: {rating}</small></p>
                        <div className="card-actions justify-end">
                            <Link to='/'><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>

                        </div>
                    </div>
                </div>

                {/* input */}
                <div>
                    <h2 className='text-2xl font-semibold text-center m-7 font-[mooli]'>Course Name: {name}</h2>
                </div>
                <form onSubmit={handleEnroll}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-11'>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name of Applicant:</span>

                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="name of student" className="input input-bordered max-w-xs md:w-[365px]" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email:</span>

                            </label>
                            <input type="email" name='email' required defaultValue={user?.email} placeholder="email" className="input input-bordered max-w-xs md:w-[365px]" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone number:</span>

                            </label>
                            <input type="text" name='phone' placeholder="phone number" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Date:</span>

                            </label>
                            <input type="date" name='date' placeholder="select your date" className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your bio:</span>

                            </label>
                            <textarea className="textarea textarea-bordered h-24 max-w-xs " name='bio' placeholder="Bio"></textarea>

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Amount:</span>

                            </label>
                            <input type="text" name='amount' placeholder="amount $" defaultValue={user?.price} className="input input-bordered w-full max-w-xs" />

                        </div>

                        <input className='btn btn-outline block md:w-[720px]' type='submit'></input>
                    </div>
                </form>
            </div >
            <Footer></Footer>
        </>
    );
};

export default EnrollMent;