import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import SocialLoginModal from '../Shared/SocialLoginModal';
import { updateProfile } from 'firebase/auth';
import Loading from './../Shared/Loading';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons';
import AnonymousRegistration from './AnonymousRegistration';


const Login = () => {
    const { register, handleSubmit } = useForm();
    const [socialSignIn, setSocialSignIn] = useState(false);

    //Open and close modal
    const [socialLoginModal, setSocialLoginModal] = useState(false);
    const [anonymousModal, setAnonymousModal] = useState(false);

    //Create account with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth); //{ sendEmailVerification: true }

    //Update Profile
    const [updateProfile, updating, UpdateProfileError] = useUpdateProfile(auth);

    const onSubmit = async data => {
        if ((data.password) !== (data.confirmPassword)) {
            return;
        }
        else {
            const displayName = data.name;
            await createUserWithEmailAndPassword(data.email, data.password);
            await updateProfile({ displayName })
            console.log("completed");


        }
    };
    if (error) {
        console.log(error);
    }
    if (user) {
        toast.success('Login Successfully');
    }

    if (updating || loading) {
        return <Loading></Loading>
    }
    return (
        <div className='flex justify-center mt-20'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <h1 className='text-5xl font-bold text-center mb-5 '>Register</h1>
                <figure><img src={logo} alt="Shoes" /></figure>


                <div class="card-body">
                    {/* Toggle Social Sign In  */}
                    <label onClick={() => setSocialLoginModal(true)} for="socialLoginModal" class="btn btn-outline modal-button bg-neutral text-white font-bold">Social Sign In</label>

                    {/* Become Anonymus  */}
                    <label onClick={() => setAnonymousModal(true)} for="anonymousRegister" class="btn btn-outline modal-button bg-secondary text-white font-bold"> <FontAwesomeIcon icon={faHatCowboy} /> &nbsp;Continue Anonymously</label>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Name Field */}
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text text-xl">Your Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" class="input text-lg border-zinc-400 border-2  w-full " {...register("name", { required: true })} />
                        </div>

                        {/* Email Field */}
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text text-xl">Your Email</span>
                            </label>
                            <input type="text" placeholder="Your Email" class="input text-lg border-zinc-400 border-2  w-full "
                                {...register("email", { required: true })}
                            />
                        </div>

                        {/* Password Field */}
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text text-xl">Your Password</span>
                            </label>
                            <input type="text" placeholder="Your Password" class="input text-lg w-full border-zinc-400 border-2 "
                                {...register("password", { required: true })}
                            />
                        </div>


                        {/*Confirm Password Field */}
                        <div class="form-control w-full ">
                            <label class="label">
                                <span class="label-text text-xl">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="Confirm Your Password" class="input text-lg w-full border-zinc-400 border-2 "
                                {...register("confirmPassword",
                                    { required: true })}
                            />
                        </div>
                        <div class="card-actions w-full">
                            <button type='submit' class="btn btn-primary w-full mt-5 font-bold text-white ">REGISTER</button>
                        </div>
                        <div>
                            <p className='text-lg'>Already have an Account? <Link to="/login" className='text-secondary font-bold'>Login</Link></p>
                        </div>
                    </form>
                </div>

            </div>

            {
                socialLoginModal && <SocialLoginModal
                    setSocialLoginModal={setSocialLoginModal}
                ></SocialLoginModal>
            }
            {
                anonymousModal && <AnonymousRegistration
                    setAnonymousModal={setAnonymousModal}
                ></AnonymousRegistration>
            }
        </div >
    );
};

export default Login;