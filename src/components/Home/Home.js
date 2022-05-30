import React from 'react';
import OtherPerson from './OtherPerson/OtherPerson';
import UserProfile from './UserProfile/UserProfile';
import ViewSection from './ViewSection/ViewSection';

const Home = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-[1fr,4fr,1fr] gap-5'>
                <div className='hidden lg:block'>
                    <UserProfile></UserProfile>
                </div>
                <div>
                    <ViewSection></ViewSection>

                </div>
                <div className='hidden lg:block'>
                    <OtherPerson></OtherPerson>

                </div>
            </div>

        </div>
    );
};

export default Home;