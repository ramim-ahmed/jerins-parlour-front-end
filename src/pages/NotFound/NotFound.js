import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container mx-auto py-10'>
            <div>
                <h1 className=' text-9xl font-light text-gray-600 text-center'>Sorry</h1>
                <p className='text-gray-600 text-5xl font-light mt-3 text-center'>we couldn't find that page</p>
                <p className='text-gray-600 text-5xl font-light mt-3 text-center'>try searching or go to <Link to='/'> <span className='text-blue-600'>Jerin Parlour Home Page</span> </Link> </p>
            </div>
        </div>
    );
};

export default NotFound;