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
        <h2>About</h2>
        <p>
            Join us on May 25th and May 26th in this all-inclusive 24 hour
            hackathon where you solve fun challenges provided by our partner
            companies, win prizes, and have a good time!
        </p>
        <p>
            Tickets are not available yet but check back here soon!
        </p>
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
