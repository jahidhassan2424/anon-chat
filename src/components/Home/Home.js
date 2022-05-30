import React, { useState } from 'react';
import OtherPerson from './OtherPerson/OtherPerson';
import UserProfile from './UserProfile/UserProfile';
import ViewSection from './ViewSection/ViewSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [showRightDrawer, setShowRightDrawer] = useState(true)
    const [showUserProfile, setShowUserProfile] = useState(false)

    return (
        <div>
            <div className='grid lg:grid-cols-[1fr,5fr] gap-5'>
                <div className='hidden lg:block'>
                    <UserProfile></UserProfile>
                </div>
                <div>
                    {
                        window.innerWidth < 576 && <div className='grid grid-cols-[10fr,1fr] px-3'>
                            <h2 class="card-title">Card title!</h2>  {/* Card titel will be the name of other person or group name*/}
                            <label
                                for="my-drawer-4"
                                class="drawer-button text-4xl text-primary"
                                onClick={() => {
                                    setShowRightDrawer(!showRightDrawer)
                                    setShowUserProfile = (!showUserProfile)
                                }}
                            ><FontAwesomeIcon icon={faCircleInfo} /></label>
                        </div>
                    }
                    {
                        window.innerWidth < 576
                            ?
                            showRightDrawer
                                ?
                                <ViewSection
                                    setShowViewSection={setShowRightDrawer}
                                    showViewSection={showRightDrawer}
                                ></ViewSection>
                                :
                                <OtherPerson
                                    setShowViewSection={setShowRightDrawer}
                                    showViewSection={showRightDrawer}

                                ></OtherPerson>
                            :
                            (showRightDrawer && !showUserProfile)
                                ?
                                <div className={`grid grid-cols-[4fr,1fr]`}>
                                    <div >
                                        <ViewSection
                                            setShowViewSection={setShowRightDrawer}
                                            showViewSection={showRightDrawer}
                                        ></ViewSection>
                                    </div>
                                    <div>
                                        <OtherPerson
                                            setShowViewSection={setShowRightDrawer}
                                            showViewSection={showRightDrawer}
                                        ></OtherPerson>
                                    </div>

                                </div>
                                :
                                <div >
                                    <div >
                                        <ViewSection
                                            setShowViewSection={setShowRightDrawer}
                                            showViewSection={showRightDrawer}
                                        ></ViewSection>
                                    </div>


                                </div>
                    }
                </div>

            </div>

        </div >
    );
};

export default Home;