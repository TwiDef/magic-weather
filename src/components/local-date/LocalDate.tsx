import React from 'react';

const LocalDate: React.FC = () => {
    return (
        <div className='flex mt-4'>
            <h3>Tuesday, 31 May</h3>
            <span className='px-2'>|</span>
            <h3>Local time: 11:12 AM</h3>
        </div>
    );
};

export default LocalDate;