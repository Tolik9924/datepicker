import classNames from 'classnames';
import React, { useState } from 'react';
import Days from '../Days/Days';

import style from './day.module.scss';

const Day = ({
    day,
    chooseDay
}) => {

    const todayStyle = day.today && style.today;
    const chooseDayStyle = day.chooseDay && style.chooseDay;

    const classProps = classNames(style.day, todayStyle, chooseDayStyle);

    return (
        <div className={classProps}
            onClick={() => chooseDay(day.id)}>
            <div className={style.textDay}>{day.id}</div>
        </div>
    );
}

export default Day;
