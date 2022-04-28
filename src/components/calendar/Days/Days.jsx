import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseDayAction, hideChooseDayAction } from '../../../store/calendarReducer';
import Day from '../Day/Day';

import style from './days.module.scss';

const Days = ({
    darkLightMode
}) => {

    const dispatch = useDispatch();

    const days = useSelector(state => state.calendar.days);

    
    const chooseDay = (id) => {
        dispatch(chooseDayAction(id));
        dispatch(hideChooseDayAction(id));
    }

    return (
        <div className={style.days}>
            {days.map((day) => {
            return <Day key={day.id} 
                        day={day} 
                        chooseDay={chooseDay}
                        darkLightMode={darkLightMode} />
        })}
        </div>
    );
}

export default Days;
