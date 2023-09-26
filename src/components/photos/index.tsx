import { h, FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { photosMap } from "/data/photos";

import * as style from "./style.scss";

/**
 * Renders the photos section.
 */
export const Photos: FunctionalComponent = () => {
    const gallery = useRef<HTMLDivElement | null>(null);
    const requestRef = useRef<number>(null);
    const shouldAnimate = useRef<boolean>(true);
    const lastScrolled = useRef<number>(0);

    const animate = (time: DOMHighResTimeStamp) => {
        if (!shouldAnimate.current) {
            requestRef.current = null;
            return;
        }

        requestRef.current = requestAnimationFrame(animate);

        if (gallery.current === null) {
            return;
        }

        const scaledTime = time * 0.06;
        const max = gallery.current.scrollWidth - gallery.current.clientWidth;
        gallery.current.scrollLeft = scaledTime % max;
        lastScrolled.current = scaledTime % max;
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        gallery.current.onscroll = (e) => {
            if (!shouldAnimate.current) return;

            const diff = lastScrolled.current - gallery.current.scrollLeft;
            if (Math.abs(diff) < 4) return;

            shouldAnimate.current = false;
        };

        () => {
            if (requestRef.current === null) return;

            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <section class={style.photos}>
            <h2>Photos</h2>
            <p>
                Take a look at last edition to get an impression of the event.
            </p>
            <div
                ref={gallery}
                class={style.gallery}
                onClick={() => (shouldAnimate.current = false)}
            >
                {photosMap.map((url) => (
                    <Photo url={url} />
                ))}
            </div>
        </section>
    );
};

const Photo: FunctionalComponent<PhotoProps> = (props) => {
    const [opened, setOpened] = useState<boolean>(false);

    const onClick = () => {
        setOpened(!opened);
    };

    const classes = `${style.image} ${opened ? style.fullimage : ""}`;

    return (
        <span class={classes} onClick={onClick}>
            <img
                src={props.url.toString()}
                alt="HackDelft 2019 photo"
                loading="lazy"
            />
        </span>
    );
};

interface PhotoProps {
    url: URL;
}
