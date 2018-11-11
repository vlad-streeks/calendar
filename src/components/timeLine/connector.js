import { connect } from "react-redux";
import { TimeLine } from './timeLine';
import { getHeight } from "../../../actions";

function mapStateToProps(state){
    return {
        timeLine: state.timeLineReducer.timeLine,
        calendarInitEvents: state.eventReducer.calendarInitEvents
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHeight: (start, amount) => {
            dispatch(getHeight(start, amount));
        }
    }
}

export const TimeLineConnected = connect(mapStateToProps, mapDispatchToProps)(TimeLine);
