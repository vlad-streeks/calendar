import { GET_FIELD_HEIGHT } from "../../constants";

let initialState = {
    start: 0,
    hoursAmount: 0
};

let heightFieldReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FIELD_HEIGHT:
            return {start:action.payload.start, hoursAmount:action.payload.amount};
        default:
            return state;
    }
};

export default heightFieldReducer;