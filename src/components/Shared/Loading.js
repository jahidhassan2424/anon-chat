import React from 'react';
import loader from '../../images/loader.gif';
const Loading = () => {
    return (
        <div className='text-center'>
            <img width={"50%"} src={loader} alt="" />
        </div>
    );
};

export default Loading;