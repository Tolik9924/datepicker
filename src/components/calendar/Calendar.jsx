import React from 'react';

import style from './calendar.module.scss';
import Days from './Days/Days';
import DaysName from './DaysName/DaysName';
import MonthYear from './MonthYear/MonthYear';

const Calendar = () => {

    return(
        <div className={style.calendar}>
            <div className={style.monthYear}><MonthYear /></div>
            <div className={style.daysName}><DaysName /></div>
            <div className={style.days}><Days /></div>
            <div className={style.darkLightMode}>dark/light mode</div>
        </div>
    );
}

export default Calendar;
