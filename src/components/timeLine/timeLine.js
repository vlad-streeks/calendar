import React, { Component } from 'react';
import { Event } from '../event/event';

export class TimeLine extends Component{
    constructor(props) {
        super(props);
        this.Items = [];
        this.start = 0;
        this.finish = 0
        this.hoursAmount = 0;
        this.getHeight = this.getHeight.bind(this);
    }

    componentWillMount(){
        this.start = this.props.timeLine.start;
        this.finish = this.props.timeLine.finish;
        console.log( this.props, 'line-component');
        this.getHeight(this.start, this.finish-this.start)
    }

    getHeight(start, amount) {
        this.props.getHeight(start, amount);
    }

    createTimeLine(start, finish, step){
        this.Items.length = 0;
        for (let i = start; i <= finish; i++){
            if(i !== finish) {
                this.Items.push(`${ i }:00`);
                this.Items.push(`${ i }:${ step }`);
            } else {
                this.Items.push(`${ i }:00`);
            }
        }

    };

    render() {
        const events = this.props.calendarInitEvents;
        const{start,
            finish,
            step,
        } = this.props.timeLine;

        this.createTimeLine(start, finish, step);

        return (
            <div className='time-line'>
                <span> {
                    this.Items.map((item, i) =>
                    <div key={i} className='time-line_point'>{item}</div>
                    )
                } </span>
                <div ref={element => this.divRef = element} className='events-field'>
                    {events.map((item, i) => (
                        <Event start={item.start} duration={item.duration} title={item.title} i={i}/>
                        )
                    )}
                </div>
            </div>
        )
    };
}
