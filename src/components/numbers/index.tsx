import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";




/**
 * Renders the about section.
 */
export const Numbers: FunctionalComponent = () => (
    <section class={style.numbers}>
        <div class={style.columns}>

            <div class={style.column}>
                <h2>120</h2>
                <h3>attendees</h3>
            </div>

            <div class={style.column}>
                <h2>4</h2>
                <h3>cases</h3>
            </div>

            <div class={style.column}>
                <h2>24</h2>
                <h3>hours</h3>
            </div>

        </div>
    </section>
);
