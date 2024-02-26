import { h, FunctionalComponent } from "preact";

import { Icon } from "/src/components";

import * as style from "./style.scss";

/**
 * Renders the about section. 
 */
export const About: FunctionalComponent = () => (
    <section class={style.about} id="aboutus">
        <h2>About us</h2>
        <div class={style.columns}>
            <div class={style.column}>
                <h3>What?</h3>
                <p>
                    Embark on an exciting journey with Hack to the Future, a fully inclusive 24-hour hackathon experience. Immerse yourself in a dynamic environment where participants take on entertaining challenges presented by our amazing partner companies. Beyond the thrill of problem-solving, the event offers the chance to win exciting prizes and guarantees a good time for all involved. A brunch is also offered on sunday. To join this you will have to buy a different brunch ticket.
                </p>
                <h3>Who?</h3>
                <p>
                    Any current university student is welcome! Whether you're a beginner or an experienced individual, the hackathon welcomes all levels of expertise. Partner companies provide challenges for participants to solve. They foster a collaborative environment where students can showcase their skills and creativity.
                </p>
            </div>
            <div class={style.column}>
                <h3>When?</h3>
                <p>
                    Mark your calendars for May 25th and May 26th as we invite you to join us at TU Delft X for an exhilarating two-day event. The excitement kicks off on Saturday morning, extending all the way through Sunday evening. To enhance your experience, we've got dinner covered, and sleeping over at the venue is an option. Across these two days, participants will have a dedicated 24 hours to collaboratively tackle and solve a challenging case.
                </p>
            </div>
        </div>
    </section>
);
