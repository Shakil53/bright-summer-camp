import React from 'react';
import NavBar from '../../components/shared/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Courses from '../Courses/Courses';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Courses></Courses>
        </div>
    );
};

export default Home;