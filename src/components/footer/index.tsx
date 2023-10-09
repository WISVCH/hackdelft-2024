import { h, FunctionalComponent } from "preact";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Icon } from "/src/components";

import * as style from "./style.scss";

/**
 * Renders the footer of the site.
 */
export const Footer: FunctionalComponent = () => (
    <footer class={style.footer}>
        <a
            title="Send us an email!"
            href="mailto:hackdelft@ch.tudelft.nl"
            target="_blank"
            rel="noopener"
        >
            <Icon icon={faEnvelope} pad />
        </a>
        <a
            title="View source code."
            href="https://github.com/WISVCH/hackdelft-2022"
            target="_BLANK"
        >
            <Icon icon={faGithub} pad />
        </a>
    </footer>
);
