import React from 'react';

export const Event = ({start, duration, title, i}) => (
         <div className='event-block' style={{top: start*2, height: duration*2}} key={i}>
            <p> {title} </p>
         </div>
);
