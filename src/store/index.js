import { combineReducers, createStore} from "redux";
import { calendarReducer } from "./calendarReducer";

const rootReducer = combineReducers({
    calendar: calendarReducer
});

export const storeCalendar = createStore(rootReducer);
