import * as style from "./style.scss";
import { h, FunctionalComponent } from "preact";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "/src/components/icon";
import { Timer } from "/src/components/timer";

export const Navigation: FunctionalComponent = () => {

    const scrollToDiv = (target: any) => {
        if (document.getElementById(target)){
            window.scrollTo({top: document.getElementById(target).offsetTop})
        }
    }
    return (    
        <section class={style.navigation}>
            <div>
                <a onClick={() => scrollToDiv('aboutus')}>About us </a>
                <a onClick={() => scrollToDiv('pictures')}>Pictures</a>
                <a onClick={() => scrollToDiv('timetable')}>Timetable</a>
                <a onClick={() => scrollToDiv('sponsors')}>Sponsors</a>
                <a onClick={() => scrollToDiv('faq')}>FAQ</a>
                <span class={style.time}><span class={style.icon}><Icon icon={faStopwatch}/></span><Timer></Timer></span>
            </div>
        </section>
    );
}
