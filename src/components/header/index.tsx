import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

import icon from "url:/static/logo_alt.png?as=webp&width=500";

/**
 * Renders the header of the site.
 */
export const Header: FunctionalComponent = () => (
    <header class={style.header}>
        <img src={icon} alt="HackDelft" />
        <span>
            <h2>Date: May 25th &amp; May 26th</h2>
            <h3>Location: TU Delft X</h3>
        </span>
    </header>
);
