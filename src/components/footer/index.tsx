import { h, FunctionalComponent } from "preact";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Icon } from "/src/components";

import * as style from "./style.scss";

/**
 * Renders the footer of the site.
 */
export const Footer: FunctionalComponent = () => {
    const scrollToDiv = (target: any) => {
        if (document.getElementById(target)) {
            window.scrollTo({ top: document.getElementById(target).offsetTop })
        }
    }

    return (
        <footer>
            <section class={style.footer}>
                <div class={style.container}>
                    <div class={style.innercontainer}>
                        <p>Site</p>
                        <a onClick={() => scrollToDiv('home')}>Home</a>
                        <a onClick={() => scrollToDiv('aboutus')}>About us </a>
                        <a onClick={() => scrollToDiv('pictures')}>Pictures</a>
                        <a onClick={() => scrollToDiv('timetable')}>Timetable</a>
                        <a onClick={() => scrollToDiv('sponsors')}>Sponsors</a>
                        <a onClick={() => scrollToDiv('faq')}>FAQ</a>                      
                    </div>
                    <div class={style.innercontainer}>
                        <p>Contact</p>
                        <a title="Send us an email!"
                            href="mailto:hackdelft@ch.tudelft.nl"
                            target="_blank"
                            rel="noopener"> hackdelft@ch.tudelft.nl </a>
                    </div>
                </div>
            </section>
        </footer>
    );
}