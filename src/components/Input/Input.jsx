import React from 'react';

import classNames from 'classnames';

import style from './input.module.scss';

const Input = ({
    Icon,
    name = '',
    type = 'text',
    disabled = false,
    value,
    span,
    handleChange,
    size = 'medium',
    placeholder = ''
}) => {
    
    const classProps = classNames(style.input, style[`${size}Input`]);
    const classSpan = classNames(style.span, style[`${size}Span`]);
    
    return(
        <div className={style.formGroup}>
        <div className={classSpan}>
            {Icon && <i>{<Icon />} </i>}
            {span && <span>{span}</span>}
        </div>
        <input className={classProps} 
               placeholder={placeholder}
               type={type}
               name={name}
               disabled={disabled}
               onChange={handleChange}/>
    </div>
    );
}

export default Input;
