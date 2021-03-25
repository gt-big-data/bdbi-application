import React, { Component } from 'react'
import Calendar from "@ericz1803/react-google-calendar";
import './events.scss'
import { MenuGroup } from '@chakra-ui/menu';


const API_KEY = 'AIzaSyDFxU-YHy8b1p5quKxjaB_UTWW0Hu6PgNE'
const calendars = [
      {
        calendarId: "gtbigdata@gmail.com",  
      }
    ]


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
                apiKey={API_KEY}
                calendars={calendars}
            />
        </div>
    </>
        
        
}