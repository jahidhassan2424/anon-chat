import React from 'react';

const ViewSection = () => {
    return (
        <div>
            <div class="card w-full bg-base-100 shadow-xl h-[100vh]">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
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