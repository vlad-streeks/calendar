import { GET_TIME_LINE } from "../../constants";

let initialState ={
    timeLine: {
        start: 8,
        finish: 17,
        step: 30
    }
};

let timeLineReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TIME_LINE:
            return {
                timeLine: state.timeLine
            };
        default:
            return state;
    }
};

export default timeLineReducer;