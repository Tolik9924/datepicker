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
    placeholder = '',
    theme = 'primary'
}) => {
    
    const classFormGroup = classNames(style.formGroup, style[`${theme}FormGroup`]);
    const classProps = classNames(style.input, style[`${size}Input`], style[`${theme}Input`]);
    const classSpan = classNames(style.span, style[`${size}Span`], style[`${theme}Span`]);
    
    return(
        <div className={classFormGroup}>
        <div className={classSpan}>
            {Icon && <i>{<Icon />} </i>}
            {span && <span>{span}</span>}
        </div>
        <input className={classProps} 
               placeholder={placeholder}
               type={type}
               name={name}
               disabled={disabled}
               onChange={handleChange}
               value={value}/>
    </div>
    );
}

export default Input;
