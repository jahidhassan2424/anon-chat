import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';

import auth from './../../firebase.init';

const SocialLoginModal = ({ setSocialLoginModal }) => {


    return (
        <div>
            <input type="checkbox" id="socialLoginModal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div class="modal-action absolute top-0 right-2">
                        <label onClick={() => setSocialLoginModal(false)} for="socialLoginModal" class="btn rounded-full text-white font-bold ">x</label>
                    </div>
                    <h1 className='text-3xl font-bold mb-5 text-left lg:text-center'>Select a sign in option</h1>
                    <button class="text-lg btn hover:bg-zinc-900 w-full mb-3 "> <FontAwesomeIcon icon={faGoogle} className="text-white" /> &nbsp;Google Sign In</button>
                    <button class="text-lg hover:bg-zinc-900 btn w-full mb-3 "> <FontAwesomeIcon icon={faFacebook} className="text-white" /> &nbsp;Facebook Sign In</button>
                    <button class="text-lg hover:bg-zinc-900 btn w-full"><FontAwesomeIcon icon={faGithub} className="text-white" />&nbsp;Github Sign In</button>

                </div>
            </div>
        </div>
    );
};

export default SocialLoginModal;