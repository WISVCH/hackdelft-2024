import * as style from "./style.scss";
import { h, FunctionalComponent } from "preact";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "/src/components/icon";


export const Navigation: FunctionalComponent = () => (
    <section class={style.navigation}>
        <div>
            <a>About us</a>
            <a>Timetable</a>
            <a>Pictures</a>
            <a>Themes</a>
            <a>FAQ</a>
            <a>Sponsors</a>
            <a>Contact</a>
            <span class={style.time}><span class={style.icon}><Icon icon={faStopwatch}/></span>05d 05h 05m 05s</span>
        </div>
    </section>
);