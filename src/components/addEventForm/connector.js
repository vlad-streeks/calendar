import { connect } from "react-redux";
import AddNewEventForm from './addNewEventForm';
import { addEvent } from '../../../actions.js';

function mapStateToProps(state){
    console.log(state.heightFieldReducer)
    return {
        eventField: state.heightFieldReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addEventHandler: (start, duration, title) => {
            dispatch(addEvent(start, duration, title));
        },
        // deleteEventHandler: (start, duration, title) => {
        //     dispatch(addEvent(start, duration, title));
        // }
    }
}

export const AddNewEventFormConnected = connect(mapStateToProps, mapDispatchToProps)(AddNewEventForm);
