import React from 'react';
import Banner from './Banner';
import Slider from './Slider';
import Extra from './Extra/Extra';
import PopularInstructors from '../PopularInstructor/PopularInstructors';
import PopularClasses from '../PopularInstructor/PopularClasses';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='bg-[#DBE8E7]'>
            
            <Helmet>
                <title>Yoku | Home</title>
            </Helmet>
            
            <Banner></Banner>
            <Extra></Extra>
            <PopularInstructors></PopularInstructors>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;