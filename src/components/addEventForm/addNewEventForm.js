import React, { Component } from 'react';

export default class AddNewEventForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            start:'',
            duration:'',
            title: ''
            };
        this.startTime = 0;
        this.hoursAmount = 0;
  
        this.startChange = this.startChange.bind(this);
        this.durationChange = this.durationChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
        this.addEventHandler = this.addEventHandler.bind(this);
    };

    componentWillMount() {
        this.startTime = this.props.eventField.start;
        this.hoursAmount = this.props.eventField.hoursAmount;
        console.log(this.startTime + 'start time')
    }

    calcStartPosition(timePx, start, hours) {
        let max = hours*60;
        let current = timePx - start*60
        console.log(current, max)
        if(current > 0 && current < max){
            return current
        } else {
            alert ('invalid time');
            return false
        }
    };

    convert(time) {
        let hours = Number(time.split(':')[0])*60;
        let minutes =  Number(time.split(':')[1]);
        let res = (hours+minutes);
        console.log(res);
        return res;
    }
	
    startChange(e){
        this.setState({start: e.target.value})
    }
    durationChange(e){
        this.setState({duration: e.target.value})
    }
    titleChange(e){
        this.setState({title: e.target.value})
    }
    addEventHandler(e) {
        let currentStartTime = this.calcStartPosition(this.convert(this.state.start), this.startTime, this.hoursAmount)
        if(currentStartTime){
            this.props.addEventHandler(
                currentStartTime,
                this.convert(this.state.duration),
                this.state.title
            );
        }
        
        console.log(this.state)
    }

    render() {
        return(
            <div className='form-wrap'>
                <form action="#">
                    <label htmlFor="start">Set start</label>
                    <input type="text" id='start' value={this.state.start} onChange={this.startChange} placeholder='11:30'/>
                    <label htmlFor="duration">Set duration</label>
                    <input type="text" id='duration' value={this.state.duration} onChange={this.durationChange} placeholder='0:30'/>
                    <label htmlFor="">Set title</label>
                    <input type="text" id="title" value={this.state.title} onChange={this.titleChange}/>
                    <input type="submit" value='ADD NEW EVENT' onClick={this.addEventHandler}/>
                </form>
            </div>
        )
    }
};
