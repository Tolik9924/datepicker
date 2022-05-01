import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Button from './components/Button/Button';
import Calendar from './components/Calendar/Calendar';
import InputRangeDays from './components/Calendar/RangeDays/InputRangeDays/InputRangeDays';
import Modal from './components/Modal/Modal';
import { storeCalendar } from './store';

const App = () => {

    const [showCalendar, setShowCalendar] = useState(false);
    const [showRangeDays, setShowRangeDays] = useState(false);
    const [darkLightMode, setDarkLightMode] = useState(false);

    return (
        <div>
            <div className={'buttonShow'}>
                <Button theme='primary'
                    size='medium'
                    onClick={() => setShowCalendar(true)}>
                    Show Calendar
                </Button>
            </div>
            <Provider store={storeCalendar}>
                <Modal active={showCalendar}
                    setActive={setShowCalendar}
                    darkLightMode={darkLightMode}>
                    <Calendar darkLightMode={darkLightMode}
                        setDarkLightMode={setDarkLightMode}
                        setShowRangeDays={setShowRangeDays} />
                </Modal>
                <Modal active={showRangeDays}
                        setActive={setShowRangeDays}
                        darkLightMode={darkLightMode}>
                    <InputRangeDays darkLightMode={darkLightMode}
                                    setShowRangeDays={setShowRangeDays} />
                </Modal>
            </Provider>
        </div>
    );
}

export default App;
