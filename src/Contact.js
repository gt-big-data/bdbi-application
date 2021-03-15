import { Grid, Flex, Box} from "@chakra-ui/react"
import {useState, useRef, useEffect} from 'react'
import cont from './Contact.module.css'
import insta from './instagram.png'
import link from './linkedin.png'
import fb from './facebook.png'
import slack from './slack.png'
function Contact() {

    return(
        <div className={cont.container}>
            <div class="custom-shape-divider-top-1615768898">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                     <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class={cont.shapeFill}></path>
            </svg>
            </div>
            <div className={cont.inputContain}>
                <div className={cont.contactTitle}>
                    Contact Us
                </div>
                <form>
                    <label>
                        <input type="text" className={cont.nameField} placeholder="Name"></input>
                    </label>
                        <label>
                            <input type="text" className={cont.emailField} placeholder="Email"></input>
                        </label>
                    <label>
                        <textarea type="text" className={cont.messageField} placeholder="Message"></textarea>
                    </label>
                </form>
            </div>
            <div className={cont.mediaContain}>
            <div className={cont.mediaTitle}>
                    Social Media
                </div>
                <div className={cont.grid}>
                    <div className={cont.gridItem1}>
                        <img src={insta}></img>
                    </div>
                    <div className={cont.gridItem2}>
                        <img src={link}></img>
                    </div>
                    <div className={cont.gridItem3}>
                        <img src={fb}></img>
                    </div>
                    <div className={cont.gridItem4}>
                        <img src={slack}></img>
                    </div>
                </div>
            </div>
            <div className={cont.bottomLine}>

            </div>
        </div>
    )
}

export default Contact;