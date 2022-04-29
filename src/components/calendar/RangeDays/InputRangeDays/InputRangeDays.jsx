import classNames from 'classnames';
import React from 'react';
import Button from '../../../Button/Button';
import Input from '../../../Input/Input';

import style from './inputRangeDays.module.scss';

const InputRangeDays = ({
    darkLightMode
}) => {

    const mode = darkLightMode ? style.dark : style.light;

    const classRangeDays = classNames(style.container, mode);

    const theme = darkLightMode ? 'calendarDark' : 'calendarLight';

    return (
        <div className={classRangeDays}>
            <div className={style.headerOfContainer}>
                <div className={style.nameOfContainer}>
                    Range Days
                </div>
                <div className={style.hideContainer}>
                    X
                </div>
            </div>
            <div className={style.firstData}>
                <Input span='First Day' size='small' theme='calendarLight' />
            </div>
            <div className={style.lastData}>
                <Input span='Last Day' size='small' theme='calendarLight' />
            </div>
            <div className={style.buttonSubmit}>
                <div>
                    <Button size='medium' theme={theme}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputRangeDays;
