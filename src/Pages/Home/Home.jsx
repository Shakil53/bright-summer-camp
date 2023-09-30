import React from 'react';
import NavBar from '../../components/shared/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../../components/shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;