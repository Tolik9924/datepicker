import classNames from 'classnames';
import React from 'react';

import style from './day.module.scss';

const Day = ({
    day,
    chooseDay,
    darkLightMode
}) => {

    const modeToday = darkLightMode ? style.todayDark : style.todayLight;
    const todayStyle = day.today && modeToday;

    const chooseDayStyle = day.chooseDay && style.chooseDay;

    const modeRangeDay = darkLightMode ? style.rangeDayDark : style.rangeDayLight;
    const rangeDayStyle = day.rangeDay && modeRangeDay;

    const classProps = classNames(style.day, todayStyle, chooseDayStyle, rangeDayStyle);

    return (
        <div className={classProps}
            onClick={() => chooseDay(day.id)}>
            <div className={style.textDay}>{day.id}</div>
        </div>
    );
}

export default Day;
