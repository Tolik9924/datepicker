import React from 'react';
import Button from '../../Button/Button';

import style from './rangeDays.module.scss';

const RangeDays = ({
    darkLightMode,
    setShowRangeDays
}) => {

    const theme = darkLightMode ? 'calendarDark' : 'primary';

    return(
        <div className={style.rangeDays}>
            <Button theme={theme} onClick={() => setShowRangeDays(true)}>
                Range Days
            </Button>
        </div>
    );
}

export default RangeDays;
