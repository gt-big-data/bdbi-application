import { Grid, Flex, Box} from "@chakra-ui/react"
import {useState, useRef, useEffect} from 'react'
import cont from './Contact.module.css'
import insta from './instagram.png'
import link from './linkedin.png'
import fb from './facebook.png'
import slack from './slack.png'
import axios from 'axios'
import qs from 'qs'
function Contact() {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const submitEmailForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/send', null, { params: {
            name: name,
            subject: subject,
            message: message
          }}).then((response) => {
          if (response.data.status === 'success') {
              alert("Message Sent."); 
              resetForm();
          } else if (response.data.status === 'fail') {
              alert("Message failed to send.");
          }
        })
    }

    const resetForm = () => {
        setName('');
        setSubject('');
        setMessage('');
    }

    const nameTracker = (e) => {
        setName(e.target.value);
    }

    const subjectTracker = (e) => {
        setSubject(e.target.value);
    }

    const messageTracker = (e) => {
        setMessage(e.target.value);
    }

    return(
        <div className={cont.container}>
            <div class="custom-shape-divider-top-1615768898">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                     <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class={cont.shapeFill}></path>
            </svg>
            </div>
            <div className={cont.contentContain}>
            <div className={cont.bottomLine}>

            </div>
            <div className={cont.inputContain}>
                <div className={cont.contactTitle}>
                    Contact Us
                </div>
                <form onSubmit={submitEmailForm}>
                    <label>
                        <input type="text" value={name} className={cont.nameField} placeholder="Name" onChange={nameTracker}></input>
                    </label>
                        <label>
                            <input type="text" value={subject} className={cont.emailField} placeholder="Subject" onChange={subjectTracker}></input>
                        </label>
                    <label>
                        <textarea type="text" value={message} className={cont.messageField} placeholder="Message" onChange={messageTracker}></textarea>
                    </label>
                    <label>
                        <button className={cont.buttonField}>
                            Send Email
                        </button>
                    </label>
                </form>
            </div>
            <div className={cont.mediaContain}>
            <div className={cont.mediaTitle}>
                    Social Media
                </div>
                <div className={cont.grid}>
                    <div className={cont.gridItem1}>
                        <a href='https://www.instagram.com/'>
                            <img src={insta}></img>
                        </a>
                    </div>
                    <div className={cont.gridItem2}>
                        <a href = 'https://www.linkedin.com/home'>
                            <img src={link}></img>
                        </a>
                    </div>
                    <div className={cont.gridItem3}>
                        <a href='https://www.facebook.com/'>
                            <img src={fb}></img>
                        </a>
                    </div>
                    <div className={cont.gridItem4}>
                        <a href = 'https://slack.com'>
                            <img src={slack}></img>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact;