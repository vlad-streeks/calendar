import { ADD_EVENT, DELETE_EVENT } from "../../constants";

let initialState ={
    calendarInitEvents: [
        {start:0, duration:15, title: 'Exercise'},
        {start:25, duration:30, title: 'Travel'},
        {start:30, duration:30, title: 'Plan day'},
        {start:60, duration:15, title: 'Exercise'},
        {start:100, duration:15, title: 'Code review'}
    ]
};

let eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                calendarInitEvents: [
                    ...state.calendarInitEvents,
                    {start: action.payload.start, duration:action.payload.duration, title:action.payload.title}
                ],
                timeLine: state.timeLine
            };
        case DELETE_EVENT:
            return [...state, {start: action.payload.start, duration:action.payload.duration, title:action.payload.title}];
        default:
            return state;
    }
};

export default eventReducer;