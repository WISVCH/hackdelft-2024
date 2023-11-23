import { h, FunctionalComponent } from "preact";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import { Icon } from "/src/components";

import * as style from "./style.scss";

/**
 * Renders the about section.
 */
export const About: FunctionalComponent = () => (
    <section class={style.about}>
        <h2>About us</h2>
        <div class={style.columns}>
            <div class={style.column}>
                <h3>What?</h3>
                <p>
                    Hack to the future is an all-inclusive 24 hour hackathon where you solve fun challenges provided by our partner companies, win prizes, and have a good time!
                </p>
                <h3>Who?</h3>
                <p>
                    Any current university student can join the Hackathon and your team can consist of 1 to 4 students. The hackathon is beginner friendly and no prior knowledge is needed to attend but even for more experienced people there will surely be a challenge waiting.
                </p>
            </div>
            <div class={style.column}>
                <h3>When?</h3>
                <p>
                    Join us on May 25th and May 26th at TU Delft X. The entire event will run from saturday morning till sunday evening. Dinner is included and sleeping over on location is also possible. During these two days you will get 24 hours to solve a case.
                </p>
            </div>
        </div>
        <div>
        {/* <a
                class={style.tickets}
                href="https://forms.gle/VmVWSof6tLyaVyBB8"
                target="_blank"
            >
                <Icon icon={faTicket} pad />
                Sign up for the waiting list!
            </a> */}
            <a
                class={style.discord}
                href="https://discord.gg/rB2ucUaFnc"
                target="_blank"
            >
                <Icon icon={faDiscord} pad />
                Join Our Discord!
            </a>
        </div>
    </section>
);
