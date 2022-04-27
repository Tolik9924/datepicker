export const defaultState = {
    days: [
        {id: null, today: false, chooseDay: false},
        {id: 1, today: false, chooseDay: false},
        {id: 2, today: false, chooseDay: false},
        {id: 3, today: false, chooseDay: false},
        {id: 4, today: false, chooseDay: false},
        {id: 5, today: false, chooseDay: false},
        {id: 6, today: false, chooseDay: false},
        {id: 7, today: false, chooseDay: false},
        {id: 8, today: false, chooseDay: false},
        {id: 9, today: false, chooseDay: false},
        {id: 10, today: false, chooseDay: false},
        {id: 11, today: false, chooseDay: false},
        {id: 12, today: false, chooseDay: false},
        {id: 13, today: false, chooseDay: false},
        {id: 14, today: false, chooseDay: false},
        {id: 15, today: false, chooseDay: false},
        {id: 16, today: false, chooseDay: false},
        {id: 17, today: false, chooseDay: false},
        {id: 18, today: false, chooseDay: false},
        {id: 19, today: false, chooseDay: false},
        {id: 20, today: false, chooseDay: false},
        {id: 21, today: false, chooseDay: false},
        {id: 22, today: false, chooseDay: false},
        {id: 23, today: false, chooseDay: false},
        {id: 24, today: true, chooseDay: false},
        {id: 25, today: false, chooseDay: false},
        {id: 26, today: false, chooseDay: false},
        {id: 27, today: false, chooseDay: false},
        {id: 28, today: false, chooseDay: false},
    ]
}

const CHOOSE_DATE = "CHOOSE_DATE";
const HIDE_CHOOSE_DATE = "HIDE_CHOOSE_DAT";

export const calendarReducer = (state = defaultState, action) => {
    switch(action.type) {
        case CHOOSE_DATE:
            return {
                ...state, days: state.days.map((day) =>
                    day.id === action.payload ? 
                    { ...day, chooseDay: !day.chooseDay } : 
                    { ...day }
                )
            }
        case HIDE_CHOOSE_DATE:
            return {
                ...state, days: state.days.map((day) =>
                    day.id !== action.payload ? 
                    { ...day, chooseDay: false } : 
                    { ...day }
                )
            }
        default:
            return state;
    }
}

export const chooseDayAction = (payload) => ({type: CHOOSE_DATE, payload});
export const hideChooseDayAction = (payload) => ({type: HIDE_CHOOSE_DATE, payload});
