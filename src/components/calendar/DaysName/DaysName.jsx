import classNames from 'classnames';
import React from 'react';

import style from './daysName.module.scss';

const DaysName = ({
    darkLightMode
}) => {

    const daysName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const mode = darkLightMode ? style.dark : style.light;

    const classMode = classNames(style.daysName, mode);

    return (
        <div className={classMode}>
            {daysName.map((dayName) => {
                return <div key={dayName} className={style.dayName}> {dayName} </div>
            })}
        </div>
    );
}

export default DaysName;
