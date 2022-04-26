import React from 'react';
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import style from './monthYear.module.scss';

const MonthYear = () => {
    return (
        <div className={style.monthYear}>
            <a>February</a> 
            <div>
                <VscChevronLeft className={style.arrow} /> 
                <a>2021</a> 
                <VscChevronRight className={style.arrow} />
            </div> 
        </div>
    );
}

export default MonthYear;
