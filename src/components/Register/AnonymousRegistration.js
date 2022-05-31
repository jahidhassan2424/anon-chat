import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AnonymousRegistration.css'
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const AnonymousRegistration = ({ setAnonymousModal }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [userNameError, setUserNameError] = useState([])
    const onSubmit = data => {
        const password = data.password;
        const userName = data.userName;
        console.log("Data:", data);
        const userData = {
            password: password
        }
        console.log(userData);
        fetch(`http://localhost:5000/anonymousRegister/checkUserName/${userName}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 409) {
                    setUserNameError(data.message);
                    console.log(data.userNameValid);
                }
                else {
                    fetch(`http://localhost:5000/anonymousRegister/${userName}`, {
                        method: 'put',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify({ password })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged === true) {
                                toast.success('Anonymous Account created successfully');
                            }
                            else {
                                toast.error('Something went wrong!')
                            }
                        })

                }
            })
    };
    // useEffect(() => {
    //     fetch(`http://localhost/anonymousRegister/${userName}`)
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    // }, [])
    return (
        <div>
            <input type="checkbox" id="anonymousRegister" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div class="modal-action absolute top-0 right-2">
                        <label onClick={() => setAnonymousModal(false)} for="anonymousRegister" class="btn rounded-full text-white font-bold ">x</label>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mt-5'>
                            <div className='text-white bg-red-500 p-3 text-xl rounded-xl'>
                                <p> <FontAwesomeIcon icon={faCircle} /> Please note, Password recovery will not be possible for anonymous account</p>
                                <br />
                                <p> <FontAwesomeIcon icon={faCircle} /> All data will be lost after Signout</p>
                            </div>
                            <label class="label">
                                <span class="label-text text-lg">Type a unique username.</span>
                            </label>
                            <input type="text" placeholder="Username..." class="input input-bordered w-full "
                                {...register("userName", { required: true })} />
                            {
                                userNameError && <p className='text-red'>{userNameError}</p>
                            }
                            <label class="label mt-4">
                                <span class="label-text text-lg">Enter a Password</span>
                            </label>
                            <input type="text" placeholder="Password..." class="input input-bordered w-full "
                                {...register("password", { required: true })} />
                        </div>
                        <div>
                            <button className='btn w-full mt-5 font-bold text-white text-2xl' type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AnonymousRegistration;