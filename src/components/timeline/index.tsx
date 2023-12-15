import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { h, FunctionalComponent } from "preact";

import { Icon } from "/src/components/icon";

import { saturday, sunday } from "/data/timeline.json";

import * as style from "./style.scss";

/**
 * Renders the timeline section.
 */
export const Timeline: FunctionalComponent = () => (
    <section class={style.timeline} id='timetable'>
        <h2>Timetable</h2>
        <p>
            This is an indication of the schedule of the event! It is an
            indication, and therefore subject to change.
        </p>
        <div class={style.days}>
            <h3>Saturday</h3>
            <h3>Sunday</h3>
        </div>

        <div class={style.container}>
            <h3 class={style.mobiledays}>Saturday</h3>
            <div class={style.saturday}>
                {(saturday as TimelineEntry[]).map((entry) =>
                    renderEntry(entry)
                )}
            </div>
            <h3 class={style.mobiledays}>Sunday</h3>
            <div class={style.sunday}>
                {(sunday as TimelineEntry[]).map((entry) => renderEntry(entry))}
            </div>
        </div>
    </section>
);

const renderEntry = (entry: TimelineEntry) => (
    <div class={style.timelineEntry} id={"box-"+ entry.id}>
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
    id: string;
}
