import { h, FunctionalComponent } from "preact";
import { faCalendarDay, faLocationDot, faTicket, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";



import * as style from "./style.scss";

import icon from "url:/static/HogeResolutieLogo.png?as=webp&width=500";
import { Icon } from "/src/components/icon";


/**
 * Renders the header of the site.
 */
export const Header: FunctionalComponent = () => (
    <header class={style.header} id='home'>
        <div class={style.container}>
            <img src={icon} alt="HackDelft" />
            <div class={style.text}>
                
                <p> <Icon icon={faCalendarDay}/> 25 and 26 May 2024</p>
                <p> <Icon icon={faLocationDot}/> X TU Delft Hall 1</p>
            </div>
            <div class={style.buttons}>
                <a href="https://discord.gg/rB2ucUaFnc" target="_blank">
                    <Icon icon={faDiscord} pad />
                    Join Discord
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScIeFxdTOsJnt7DQdpYPtcRsrYT-wHJDa2N1bVtCJNFaQtSIQ/viewform" target="_blank">
                    <Icon icon={faClipboardList} pad />
                    Sign-up form
                </a>

                <small> Unfortunatly the event is sold out but you can sign up for the waiting list below and have a chance of still claiming a spot!</small>
                {/* <a href="https://ch.tudelft.nl/activities/event/2024/hackaton/" target="_blank">
                    <Icon icon={faTicket} pad />
                    Buy Tickets
                </a> */}
                
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6cXDC7eyLyKr7F8pDm-0kJvlPPoUGydYaqSLxeHh8XIsePg/viewform?usp=sf_link" target="_blank">
                    <Icon icon={faClipboardList} pad />
                    Waiting list
                </a>
                {/*  */}
            </div>
        </div>
        
    </header>
);
