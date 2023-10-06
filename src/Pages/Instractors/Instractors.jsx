
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/img/summer-camp-banner-img.png'
import img2 from '../../assets/images/img/summer-camp-flyer.jpg'
import img3 from '../../assets/images/img/summer-camp-game.jpg'
import img4 from '../../assets/images/img/summer-camp-junior.jpg'
import img5 from '../../assets/images/img/summer-camp.jpg'
import NavBar from '../../components/shared/NavBar/NavBar';
import Footer from '../../components/shared/Footer/Footer';

const Instractors = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 m-7 max-w-5xl mx-auto'>
                <div className="card bg-base-100 shadow-xl w-80 h-80">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>
                <div className="card bg-base-100 shadow-xl w-80 h-80">
                    <figure><img src={img5} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>
                <div className="card w-80 h-80 bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>
                <div className="card w-80 h-80 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>

                <div className="card w-80 h-80 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>
                <div className="card w-80 h-80 bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>
                <div className="card w-80 h-80 bg-base-100 shadow-xl">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>
                <div className="card w-80 h-80 bg-base-100 shadow-xl">
                    <figure><img src={img5} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>
                <div className="card w-80 h-80 bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body h-52">
                        <h2 className="">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className=" justify-end">
                            <Link to="/courses"><button className="btn hover:bg-cyan-200 shadow-lg shadow-cyan-200 items-center justify-center">Enroll Now</button></Link>
                        </div>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </>
    );
};

export default Instractors;