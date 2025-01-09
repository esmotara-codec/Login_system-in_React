import React from 'react';
import {NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='bg-orange-900'>
            <nav>
                <NavLink
                to="Home"
                className="">
                    Home

                </NavLink>
                <NavLink
                to="Home"
                className="">
                    About

                </NavLink>
                <NavLink
                to="Home"
                className="">
                    Contact Us

                </NavLink>
                <NavLink
                to="Home"
                className="">
                    Login

                </NavLink>
            </nav>
            
        </div>
    );
};

export default Home;