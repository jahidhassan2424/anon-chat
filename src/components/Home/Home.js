import React, { useState } from 'react';
import OtherPerson from './OtherPerson/OtherPerson';
import UserProfile from './UserProfile/UserProfile';
import ViewSection from './ViewSection/ViewSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
const Home = () => {
    const [showViewSection, setShowViewSection] = useState(true)

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
                                onClick={() => setShowViewSection(!showViewSection)}
                            ><FontAwesomeIcon icon={faCircleInfo} /></label>
                        </div>
                    }
                    {
                        window.innerWidth < 576
                            ?
                            showViewSection
                                ?
                                <ViewSection
                                    setShowViewSection={setShowViewSection}
                                    showViewSection={showViewSection}
                                ></ViewSection>
                                :
                                <OtherPerson
                                    setShowViewSection={setShowViewSection}
                                    showViewSection={showViewSection}

                                ></OtherPerson>
                            :
                            showViewSection
                                ?
                                <div className={`grid grid-cols-[4fr,1fr]`}>
                                    <div >
                                        <ViewSection
                                            setShowViewSection={setShowViewSection}
                                            showViewSection={showViewSection}
                                        ></ViewSection>
                                    </div>
                                    <div>
                                        <OtherPerson
                                            setShowViewSection={setShowViewSection}
                                            showViewSection={showViewSection}
                                        ></OtherPerson>
                                    </div>

                                </div>
                                :
                                <div >
                                    <div >
                                        <ViewSection
                                            setShowViewSection={setShowViewSection}
                                            showViewSection={showViewSection}
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