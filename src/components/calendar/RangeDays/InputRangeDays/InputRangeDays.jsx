import classNames from 'classnames';
import React, { useState } from 'react';
import Button from '../../../Button/Button';
import Input from '../../../Input/Input';
import { useDispatch } from 'react-redux';

import style from './inputRangeDays.module.scss';
import { rangeDay } from '../../../../store/calendarReducer';

const InputRangeDays = ({
    darkLightMode,
    setShowRangeDays
}) => {

    const [firstData, setFirstData] = useState('');
    const [lastData, setLastData] = useState('');

    const dispatch = useDispatch();

    const mode = darkLightMode ? style.dark : style.light;

    const classRangeDays = classNames(style.container, mode);

    const themeButton = darkLightMode ? 'calendarDark' : 'primary';
    const themeInput = darkLightMode ? 'calendarDark' : 'calendarLight';

    const handleChangeFirstData = (e) => {
        e.preventDefault();
        setFirstData(e.target.value);
    }

    const handleChangeLastData = (e) => {
        e.preventDefault();
        setLastData(e.target.value);
    }

    const submitRangeDays = () => {
        dispatch(rangeDay(firstData, lastData));
        setShowRangeDays(false);
        setFirstData('');
        setLastData('');
    }

    return (
        <div className={classRangeDays}>
            <div className={style.headerOfContainer}>
                <div className={style.nameOfContainer}>
                    Range Days
                </div>
                <div className={style.hideContainer}
                     onClick={() =>  setShowRangeDays(false)}>
                    X
                </div>
            </div>
            <div className={style.firstData}>
                <Input span='First Day' size='small' 
                       theme={themeInput}
                       value={firstData}
                       handleChange={handleChangeFirstData} />
            </div>
            <div className={style.lastData}>
                <Input span='Last Day' 
                       size='small' 
                       theme={themeInput} 
                       value={lastData}
                       handleChange={handleChangeLastData} />
            </div>
            <div className={style.buttonSubmit}>
                <div>
                    <Button size='medium' 
                            theme={themeButton}
                            onClick={() => submitRangeDays()}>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputRangeDays;
