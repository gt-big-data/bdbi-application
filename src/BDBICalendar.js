import React, { Component } from 'react'
import Calendar from "@ericz1803/react-google-calendar";
import './events.scss'
import calendarStyles from './Calendar.module.css'
import { MenuGroup, Box, Text } from '@chakra-ui/react';


const API_KEY = 'AIzaSyDFxU-YHy8b1p5quKxjaB_UTWW0Hu6PgNE'
const calendars = [
      {
        calendarId: "gtbigdata@gmail.com",  
      }
    ]


export default function BDBICalendar()  {


    return(
      <Box marginTop="175vh" className={calendarStyles.container}> 
       <Text align="center" fontWeight="bold" fontSize="3rem"  color="#3a53a2">Upcoming Events</Text>

            <Calendar
                apiKey={API_KEY}
                calendars={calendars}
            />


      </Box>
    )
        
        
}