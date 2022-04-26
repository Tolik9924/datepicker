import React from 'react';

import style from './daysName.module.scss';

const DaysName = () => {

    const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className={style.daysName}>
            {daysName.map((dayName) => {
                return <div key={dayName} className={style.dayName}> {dayName} </div>
            })}
        </div>
    );
}

export default DaysName;
