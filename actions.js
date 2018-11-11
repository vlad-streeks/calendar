import { ADD_EVENT, DELETE_EVENT, GET_TIME_LINE, GET_FIELD_HEIGHT
} from "./constants";


export let addEvent = (start, duration, title) => {
    return{
        type: ADD_EVENT,
        payload: {
            start, duration, title
        }
    }
};

export let deleteEvent = (itemNumber) => {
    return{
        type: DELETE_EVENT,
        payload: {
            itemNumber
        }
    }
}

export let getHeight = (start, amount) => {
    return{
        type: GET_FIELD_HEIGHT,
        payload: { start, amount }
    }
};

