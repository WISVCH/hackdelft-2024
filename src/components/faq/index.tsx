import { h, FunctionalComponent } from "preact";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "/src/components/icon";

import faqData from "/data/faq.json";

import * as style from "./style.scss";

/**
 * Renders the FAQ.
 * @returns The FAQ section of the page.
 */
export const FAQ: FunctionalComponent = () => (
    <section class={style.faq} id='faq'>
        <h2>FAQ</h2>
        <ul>
            {faqData.map((q: Question, i: number) => (
                <li key={i}>
                    <details>
                        <summary>{q.question}<span class={style.icon}><Icon icon={faChevronDown}/></span></summary>
                        <p>{q.answer}</p>
                    </details>
                </li>
            ))}
        </ul>
    </section>
);

interface Question {
    question: string;
    answer: string;
}
