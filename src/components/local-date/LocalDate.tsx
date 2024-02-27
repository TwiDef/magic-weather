import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';

const LocalDate: React.FC = () => {
    let [localtime, setLocaltime] = useState<number>(0)

    const { localtime_epoch } = useAppSelector(state => state.locationInfo)

    useEffect(() => {
        if (localtime_epoch) {
            setLocaltime(localtime_epoch)
        }
    }, [localtime_epoch])

    const mounth = (new Date(localtime ? localtime * 1000 : 0)).getMonth()
    const date = (new Date(localtime ? localtime * 1000 : 0)).getDate()
    const day = (new Date(localtime ? localtime * 1000 : 0)).getDay()
    const hours = (new Date(localtime ? localtime * 1000 : 0)).getHours()
    const minutes = (new Date(localtime ? localtime * 1000 : 0)).getMinutes()


    const days = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const mounths = ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December']

    if (!localtime_epoch) return <div className='mt-4'>loading data...</div>

    return (
        <div className='flex mt-4'>
            <h3>{days[day]}, {date} {mounths[mounth]}</h3>
            <span className='px-2'>|</span>
            <h3>Local time: {`${hours}:${minutes < 10 ? '0' + minutes : minutes}`}</h3>
        </div>
    );
};

export default LocalDate;