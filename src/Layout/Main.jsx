import React from 'react';
import {Outlet} from 'react-router-dom'
import Footer from '../Pages/Footer/Footer';
import Navnar from '../Pages/Navbar/Navnar';

const Main = () => {
    return (
        <div>
            <Navnar></Navnar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;