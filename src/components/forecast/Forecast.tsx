import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Forecast.css';

const Forecast: React.FC = () => {
    const [filteredByHours, setFilteredByHours] = useState<any>([])
    const { hour, status } = useAppSelector(state => state.forecast)
    const { temp_type } = useAppSelector(state => state.currentInfo)
    let now = new Date().getTime()

    useEffect(() => {
        setFilteredByHours(hour ?
            hour.filter((h: any) => h.time_epoch > (+(now / 1000).toFixed())) :
            null)
    }, [hour])

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        className: "slide"
    };

    return (
        <div className='w-full mt-10'>
            <h4 className='uppercase'>hourly forecast</h4>
            <hr className='mt-1' />

            {status === 'error' ?
                <p className='text-center my-8 text-xl'>Something went wrong, try later</p> :
                filteredByHours?.length < 5 ?
                    <div className='flex items-center justify-center gap-6 mt-5'>
                        {hour && (hour.slice(19)).map((h: any, i: number) =>
                            /* {filteredByHours.map((h: any, i: number) => */
                            <div key={i} style={{ display: 'flex' }} className='flex items-center flex-col justify-center'>
                                <p className=' text-cyan-200 font-bold flex justify-center'>{(h.time).slice(11)}</p>
                                <p className='flex justify-center'>
                                    <img className='w-12 flex justify-center' src={h.condition.icon} alt="" />
                                </p>
                                <p className='flex justify-center'>
                                    {
                                        temp_type === 'c' ?
                                            Math.round(h.temp_c) + "°c"
                                            :
                                            Math.round(h.temp_f) + "°f"
                                    }
                                </p>
                            </div>)
                        }
                    </div>
                    :
                    <div className=''>
                        <Slider {...settings}>
                            {
                                filteredByHours ? filteredByHours.map((h: any, i: number) =>
                                    <div key={i} style={{ display: 'flex' }} className='flex items-center flex-col justify-center'>
                                        <p className=' text-cyan-200 font-bold flex justify-center'>{(h.time).slice(11)}</p>
                                        <p className='flex justify-center'>
                                            <img className='w-12 flex justify-center' src={h.condition.icon} alt="" />
                                        </p>
                                        <p className='flex justify-center'>
                                            {
                                                temp_type === 'c' ?
                                                    Math.round(h.temp_c) + "°c"
                                                    :
                                                    Math.round(h.temp_f) + "°f"
                                            }
                                        </p>
                                    </div>) : null
                            }
                        </Slider>
                    </div>}

        </div>
    );

};

export default Forecast;