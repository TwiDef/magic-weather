import React from 'react';

const Cities: React.FC = () => {
    return (
        <ul className='cities flex justify-between flex-wrap  w-full'>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Paris</li>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Sydney</li>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Tokio</li>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Sochi</li>
            <li className='text-lg font-bold hover:underline cursor-pointer'>Alaska</li>
        </ul>
    );
};

export default Cities;