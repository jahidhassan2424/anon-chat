import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import avatar from '../../../images/avater.jpg';
import OtherPerson from './../OtherPerson/OtherPerson';
import ViewSection from './../ViewSection/ViewSection';
import UserProfile from './../UserProfile/UserProfile';
import auth from './../../../firebase.init';
const SingleChat = () => {
    const [showRightDrawer, setShowRightDrawer] = useState(true)
    const [user] = useAuthState(auth);
    const [isWindowSmall, setIsWindowSmall] = useState(false);

    const widthMeasurement = () => {
        setIsWindowSmall(window.innerWidth < 576)
    }
    console.log(isWindowSmall);
    useEffect(() => {
        setIsWindowSmall()
        window.addEventListener('resize', widthMeasurement);
        return () => window.removeEventListener('resize', widthMeasurement);
    }, [])


    return (
        <div>
            <div className='grid lg:grid-cols-[1fr,5fr] gap-5'>
                <div className='hidden lg:block'>
                    <UserProfile></UserProfile>
                </div>
                <div>
                    {
                        isWindowSmall && <div className='grid grid-cols-[1fr,10fr,1fr] px-3 justify-center items-center justify-items-center'>
                            <div>
                                <div class="avatar">
                                    <div class="w-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={avatar} alt="" /> {/* Other person's <photoUrl></photoUrl>*/}
                                    </div>
                                </div>

                            </div>
                            <h2 class="card-title">Card title!</h2>  {/* Card titel will be the name of other person or group name*/}
                            <label
                                for="my-drawer-4"
                                class="drawer-button text-4xl text-primary"
                                onClick={() => {
                                    setShowRightDrawer(!showRightDrawer)
                                }}
                            ><FontAwesomeIcon icon={faCircleInfo} /></label>
                        </div>
                    }
                    {
                        isWindowSmall
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
                            !showRightDrawer
                                ?
                                <div >
                                    <div >
                                        <ViewSection
                                            setShowViewSection={setShowRightDrawer}
                                            showViewSection={showRightDrawer}
                                        ></ViewSection>
                                    </div>


                                </div>
                                :
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
                    }
                </div>

            </div>

        </div >
    );
};

export default SingleChat;