import React from 'react';

import style from './days.module.scss';

const Days = () => {

    const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    return (
        <div className={style.days}>
            {days.map((day) => {
                return <div key={day} className={style.day}>{day}</div>;
            })}
        </div>
    );
}

export default Days;
