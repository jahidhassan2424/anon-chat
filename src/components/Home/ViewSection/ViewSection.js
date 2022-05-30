import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const ViewSection = ({ setShowViewSection, showViewSection }) => {
    let viewsectionStatus;
    showViewSection ? viewsectionStatus = ' hidden ' : viewsectionStatus = "";
    console.log(viewsectionStatus);
    console.log(showViewSection);

    return (
        <div>
            {
                window.innerWidth < 576 || <div className='flex justify-end'>
                    <label
                        for="my-drawer-4"
                        class="drawer-button text-3xl text-primary "
                        onClick={() => setShowViewSection(!showViewSection)}
                    ><FontAwesomeIcon icon={faCircleInfo} /></label>
                </div>
            }
            <div class={`card w-full bg-base-100 shadow-xl h-[96vh] shadow-lg `}>
                <div class={`card-body `}>
                    <div className='border h-full p-2 border-black'>View Section</div>
                    <div class="card-actions mt-auto justify-end grid grid-cols-[100fr,1fr]">
                        <div className='w-full'>
                            <input type="text" placeholder="Type here" class="input input-bordered input-accent w-full " />

                        </div>
                        <div>
                            <button class="btn btn-primary ">Send</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ViewSection;