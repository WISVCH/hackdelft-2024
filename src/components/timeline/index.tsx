import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { h, FunctionalComponent } from "preact";

import { Icon } from "/src/components/icon";

import { saturday, sunday } from "/data/timeline.json";

import * as style from "./style.scss";

/**
 * Renders the timeline section.
 */
export const Timeline: FunctionalComponent = () => (
    <section class={style.timeline}>
        <h2>Schedule</h2>
        <p>
            This is an indication of the schedule of the event! It is an
            indication, and therefore subject to change.
        </p>
        <div class={style.container}>
            <div>
                <h3>Saturday</h3>
                {(saturday as TimelineEntry[]).map((entry) =>
                    renderEntry(entry)
                )}
            </div>
            <div>
                <h3>Sunday</h3>
                {(sunday as TimelineEntry[]).map((entry) => renderEntry(entry))}
            </div>
        </div>
    </section>
);

const renderEntry = (entry: TimelineEntry) => (
    <div class={style.timelineEntry}>
        <time>
            <Icon icon={faClock} height="12px" />
            {entry.time}
        </time>

        <div>
            <h4>
                <Icon icon={faCalendar} height="14px" />
                {entry.name}
            </h4>
            <span>{entry.description}</span>
        </div>
    </div>
);

interface TimelineEntry {
    time: string;
    name: string;
    description: string;
}
