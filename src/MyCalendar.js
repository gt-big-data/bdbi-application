import React, { Component } from 'react'
import Calendar from "react_google_calendar"
import './events.scss'

const calendar_configuration = {
    api_key: '',
    calendars: [
      {
        name: 'demo',
        url: 'gtbigdata@gmail.com'
      }
    ],
    dailyRecurrence: 700,
    weeklyRecurrence: 500,
    monthlyRecurrence: 20
}

export default class BDBICalendar extends Component {
    constructor(props) {
      super(props)
        this.state = {
          events: []
        }
    }

    render = () =>
    <>
        <h1 className = "events">Upcoming Events</h1>
        <div className= 'calendar-container'>
            <Calendar
                events={this.state.events}
                config={calendar_configuration}
            />
        </div>
    </>
        
        
}


