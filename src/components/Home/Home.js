import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile/UserProfile';

const Home = () => {
    return (
        <div>
            <UserProfile></UserProfile>
            <Link to='/chat' className='text-3xl'>Anabil</Link>
        </div>
    );
};

export default Home;