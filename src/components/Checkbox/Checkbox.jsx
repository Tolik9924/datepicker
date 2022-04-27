import classNames from 'classnames';
import React from 'react';

import style from './checkbox.module.scss';


const Checkbox = ({
    span = '',
    checked,
    onChange,
    disabled = false,
}) => {

    return (
        <div>
            <span className={style.span}>{span}</span>
                <input type="checkbox"
                    id="switch"
                    className={style.chs}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled} />
                <label for="switch" className={style.toggle}>Toggle</label>
            </div>
    );
}

export default Checkbox;
