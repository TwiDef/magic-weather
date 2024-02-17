import React from 'react';

const Forecast: React.FC = () => {
    return (
        <div className='w-full mt-10'>
            <h4 className='uppercase'>hourly forecast</h4>
            <hr className='mt-1' />
            <div className='flex mt-4 justify-between'>
                <div className='flex items-center flex-col'>
                    <p>12:00 PM</p>
                    <img className='w-12' src="//cdn.weatherapi.com/weather/64x64/night/260.png" alt="" />
                    <p>59*</p>
                </div>
                <div className='flex items-center flex-col'>
                    <p>12:00 PM</p>
                    <img className='w-12' src="//cdn.weatherapi.com/weather/64x64/night/260.png" alt="" />
                    <p>59*</p>
                </div>
                <div className='flex items-center flex-col'>
                    <p>12:00 PM</p>
                    <img className='w-12' src="//cdn.weatherapi.com/weather/64x64/night/260.png" alt="" />
                    <p>59*</p>
                </div>
                <div className='flex items-center flex-col'>
                    <p>12:00 PM</p>
                    <img className='w-12' src="//cdn.weatherapi.com/weather/64x64/night/260.png" alt="" />
                    <p>59*</p>
                </div>
                <div className='flex items-center flex-col'>
                    <p>12:00 PM</p>
                    <img className='w-12' src="//cdn.weatherapi.com/weather/64x64/night/260.png" alt="" />
                    <p>59*</p>
                </div>
            </div>
        </div>
    );
};

export default Forecast;