import classNames from 'classnames';
import React from 'react';

import style from './modal.module.scss';

const Modal = ({
    active,
    setActive,
    children,
    darkLightMode
}) => {

    const modeModal = active && style.active;
    const modeContent = active && style.activeContent;
    const darkLightContent = darkLightMode ? style.contentDark : style.contentLight;

    const classModal = classNames(style.modal, modeModal);
    const classContent = classNames(style.modalContent, modeContent, darkLightContent);

    return(
        <div className={classModal} onClick={() => setActive(false)}>
            <div className={classContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;
