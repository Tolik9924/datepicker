import classNames from 'classnames';
import React from 'react';
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

import style from './monthYear.module.scss';

const MonthYear = ({
    darkLightMode
}) => {

    const mode = darkLightMode ? style.dark : style.light;

    const classMode = classNames(style.monthYear, mode);

    return (
        <div className={classMode}>
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
