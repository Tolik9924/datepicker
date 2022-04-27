import { Provider } from 'react-redux';
import './App.css';
import Calendar from './components/calendar/Calendar';
import Switch from './components/Checkbox/Checkbox';
import { storeCalendar } from './store';

function App() {
  return (
    <div className="App">
        <Provider store={storeCalendar}>
            <Calendar />
        </Provider>
    </div>
  );
}

export default App;
