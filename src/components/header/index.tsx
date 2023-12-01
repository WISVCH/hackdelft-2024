import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

import icon from "url:/static/HogeResolutieLogo.png?as=webp&width=500";

/**
 * Renders the header of the site.
 */
export const Header: FunctionalComponent = () => (
    <header class={style.header}>
        <div class={style.container}>
            <img src={icon} alt="HackDelft" />
            <div class={style.text}>
                <p>25 and 26 may 2024</p>
                <p>X TU Delft</p>
            </div>
            <div class={style.buttons}>
                <button>Tickets</button>
                <button class={style.secondary}>Join Discord</button>
            </div>
        </div>
        
    </header>
);
