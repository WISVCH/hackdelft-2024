import { h, FunctionalComponent } from "preact";

import faqData from "/data/faq.json";

import * as style from "./style.scss";

/**
 * Renders the FAQ.
 * @returns The FAQ section of the page.
 */
export const FAQ: FunctionalComponent = () => (
    <section class={style.faq}>
        <h2>Frequently Asked Questions</h2>
        <ul>
            {faqData.map((q: Question, i: number) => (
                <li key={i}>
                    <details
                        open={window.matchMedia("(min-width: 768px)").matches}
                    >
                        <summary>{q.question}</summary>
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
