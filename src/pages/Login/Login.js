import React from 'react';
import brand_img from '../../assets/Group 33092.png';
import useAuth from '../../hooks/useAuth';
const Login = () => {
    const {signInGoogle} = useAuth()
    return (
        <div className='contaier mx-auto h-screen w-screen flex justify-center items-center'>
            <div className='space-y-5 border rounded-xl border-gray-400 p-5 h-2/4 w-2/4 flex flex-col items-center justify-center text-center'>
                <div>
                    <img width='150px' src={brand_img} alt="" />
                </div>
                <div>
                    <div>
                        <button onClick={signInGoogle} className='border-2 border-primary py-1 px-4 rounded-xl focus:ring-2 focus:ring-red-400 hover:bg-primary hover:text-white duration-300 focus:border-opacity-0'>Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;