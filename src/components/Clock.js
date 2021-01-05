import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            timeRemaining: {}
        }
    }



    render() {
        const data = this.state.timeRemaining
        return (
            <div>
                <div> DAYS{data.days}</div>
                <div> HRS{data.HOURS}</div>
                <div> MINS{data.MINUTES}</div>
                <div> SECONDS{data.SECONDS}</div>
            </div>
        );
    }

    componentDidMount() {
        this.birthday = this.props.birthdayFormState.startDate.toString();
        alert(this.birthday);
    }
}


export default Clock;