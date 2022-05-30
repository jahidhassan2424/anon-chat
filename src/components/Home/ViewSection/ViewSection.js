import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import './ViewSection.css'
import avatar from '../../../images/avater.jpg';
import { useForm } from 'react-hook-form';
import SingleMessage from './SingleMessage';


const ViewSection = ({ setShowViewSection, showViewSection }) => {
    let viewsectionStatus;
    showViewSection ? viewsectionStatus = ' hidden ' : viewsectionStatus = "";
    const chats = ['Start Chat'];
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        chats.push(data.message);
        console.log(chats);
    };


    return (
        <div>
            {
                window.innerWidth < 576 || <div className='grid grid-cols-[1fr,3fr,1fr]  items-center px-5'>
                    <div>
                        <div class="avatar">
                            <div class="w-[20%] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-5">
                                <img src={avatar} alt="" /> {/* Other person's <photoUrl></photoUrl>*/}
                            </div>
                        </div>

                    </div>
                    <h2 class="card-title pl-10 text-center justify-center">Card title!</h2>
                    <label
                        for="my-drawer-4"
                        class="drawer-button text-3xl text-primary text-right"
                        onClick={() => setShowViewSection(!showViewSection)}
                    ><FontAwesomeIcon icon={faCircleInfo} /></label>
                </div>
            }
            <div class={`viewSectionBody card w-full bg-base-100 shadow-xl h-[96vh] shadow-lg `}>
                <div class={`card-body `}>
                    <div className='border h-full p-2 border-black'>
                        {
                            chats?.map((chat, index) => <SingleMessage
                                key={index}
                                chat={chat}
                            ></SingleMessage>)

                        }
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="card-actions mt-auto justify-end grid grid-cols-[100fr,1fr]">
                            <div className='w-full'>
                                <input type="text" placeholder="Type your message" class="input input-bordered input-accent w-full " {...register("message")} />

                            </div>
                            <div>
                                <button type='submit' class="btn btn-primary ">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default ViewSection;