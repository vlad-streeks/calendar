import React from 'react';
import './calendar.css';

import { TimeLineConnected } from '../timeLine/connector';
import { AddNewEventFormConnected } from '../addEventForm/connector';

const Calendar = () =>{
    return(
        <div className='main-wrap'>
            <div className='calendar'>
                <TimeLineConnected />
            </div>
            <AddNewEventFormConnected/>
        </div>
    )
};

export default Calendar;


