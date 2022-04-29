import classNames from 'classnames';
import React, { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';

import style from './calendar.module.scss';
import Days from './Days/Days';
import DaysName from './DaysName/DaysName';
import MonthYear from './MonthYear/MonthYear';
import RangeDays from './RangeDays/RangeDays';

const Calendar = ({
    darkLightMode,
    setDarkLightMode
}) => {

    const mode = darkLightMode ? style.dark : style.light;

    const classMode = classNames(style.calendar, mode);

    const span =  darkLightMode ? 'Dark Mode' : 'Light Mode';

    return(
            <div className={classMode}>
                <div className={style.monthYear}>
                    <MonthYear darkLightMode={darkLightMode} />
                </div>
                <div className={style.daysName}>
                    <DaysName darkLightMode={darkLightMode} />
                </div>
                <div className={style.days}>
                    <Days darkLightMode={darkLightMode} />
                </div>
                <div className={style.darkLightMode}>
                    <Checkbox span={span}
                        onChange={() => setDarkLightMode(!darkLightMode)}
                        darkLightMode={darkLightMode} />
                </div>
                <div>
                    <RangeDays darkLightMode={darkLightMode} />
                </div>
            </div>
    );
}

export default Calendar;
