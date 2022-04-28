import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Button from './components/Button/Button';
import Calendar from './components/Calendar/Calendar';
import InputRangeDays from './components/Calendar/RangeDays/InputRangeDays/InputRangeDays';
import { storeCalendar } from './store';

const App = () => {
  
    const [showCalendar, setShowCalendar] = useState(false);

    const styleButton = showCalendar ? 'buttonHide' : 'buttonShow';

    return (
    <div>   
        {showCalendar 
        &&
        <Provider store={storeCalendar}>
            <Calendar />
        </Provider>}

          <div className={styleButton}>
              <Button theme='primary' 
                      size='medium' 
                      onClick={() => setShowCalendar(!showCalendar)}>
                 {showCalendar ? 'Hide Calendar' : 'Show Calendar'}
              </Button>
          </div>
          <InputRangeDays />
    </div>
  );
}

export default App;
