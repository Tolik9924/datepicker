import React from 'react';
import Button from '../../../Button/Button';
import Input from '../../../Input/Input';

import style from './inputRangeDays.module.scss';

const InputRangeDays = () => {
    
    return(
        <div className={style.container}>
            <div className={style.inputRangeDays}>
                    <Input />
                    <Input />
            </div>
            <div className={style.buttonSubmit}>
                <div>
                    <Button size='medium'>
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default InputRangeDays;
