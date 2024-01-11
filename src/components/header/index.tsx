import { h, FunctionalComponent } from "preact";
import { faCalendarDay, faLocationDot } from "@fortawesome/free-solid-svg-icons";
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
                
                <p> <Icon icon={faCalendarDay}/> 25 and 26 may 2024</p>
                <p> <Icon icon={faLocationDot}/> X TU Delft</p>
            </div>
            <div class={style.buttons}>
                {/* TODO: uncomment when tickets are online */}
                {/* <button>Tickets</button> */}
                {/* <button class={style.secondary}>Join Discord</button> */}
                <button href="https://discord.gg/rB2ucUaFnc" target="_blank">
                    <Icon icon={faDiscord} pad />
                    Join Discord
                </button>
            </div>
        </div>
        
    </header>
);
