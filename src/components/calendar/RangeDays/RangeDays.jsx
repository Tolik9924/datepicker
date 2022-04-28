import React from 'react';
import Button from '../../Button/Button';
import { useDispatch } from 'react-redux';

import { rangeDay } from '../../../store/calendarReducer';

import style from './rangeDays.module.scss';

const RangeDays = ({
    darkLightMode
}) => {

    const theme = darkLightMode ? 'calendarDark' : 'calendarLight';

    const dispatch = useDispatch();

    const rangeDayFunc = () => {
        const firstData = parseInt(prompt('Input First Data: '));
        const lastData = parseInt(prompt('Input Last Data: '));

        dispatch(rangeDay(firstData, lastData));
    }

    return(
        <div className={style.rangeDays}>
            <Button theme={theme} onClick={() => rangeDayFunc()}>
                Range Days
            </Button>
        </div>
    );
}

export default RangeDays;
