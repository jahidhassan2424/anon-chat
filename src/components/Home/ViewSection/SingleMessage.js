import React from 'react';

const SingleMessage = ({ chat }) => {
    return (
        <div>
            <h1 className='text-3xl'>{chat}</h1>
        </div>
    );
};

export default SingleMessage;