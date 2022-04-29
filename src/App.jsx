import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Button from './components/Button/Button';
import Calendar from './components/Calendar/Calendar';
import InputRangeDays from './components/Calendar/RangeDays/InputRangeDays/InputRangeDays';
import Input from './components/Input/Input';
import Modal from './components/Modal/Modal';
import { storeCalendar } from './store';

const App = () => {
  
    const [showCalendar, setShowCalendar] = useState(false);
    const [darkLightMode, setDarkLightMode] = useState(false);

    const styleButton = showCalendar ? 'buttonHide' : 'buttonShow';

    return (
    <div>   
          <div className={'buttonShow'}>
              <Button theme='primary' 
                      size='medium' 
                      onClick={() => setShowCalendar(true)}>
                 Show Calendar
              </Button>
          </div>
            <Modal active={showCalendar} setActive={setShowCalendar}>
                <Provider store={storeCalendar}>
                    <Calendar darkLightMode={darkLightMode}
                        setDarkLightMode={setDarkLightMode} />
                    {/* <InputRangeDays darkLightMode={darkLightMode} /> */}
                </Provider>
            </Modal>
    </div>
  );
}

export default App;
