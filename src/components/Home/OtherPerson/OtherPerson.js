import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const OtherPerson = ({ setShowViewSection, showViewSection }) => {
    return (
        <div>
            <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content drawer-end">
                    {/* <!-- Page content here --> */}

                </div>
                <div class="drawer-side mt-10 shadow-lg">
                    <label for="my-drawer-4" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-hidden w-full bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <div class="card w-full bg-base-100 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">Card title!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div class="card-actions justify-end">
                                    <button class="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default OtherPerson;