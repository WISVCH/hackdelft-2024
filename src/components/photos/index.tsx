import { h, FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { photosMap } from "/data/photos";

import * as style from "./style.scss";

/**
 * Renders the photos section.
 */
export const Photos: FunctionalComponent = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0); // Initialize with the first photo

    const galleryContainer = useRef<HTMLDivElement | null>(null);
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

        return () => {
            if (requestRef.current === null) return;
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return (
        <section class={style.photos} id='pictures'>
            <h2>Pictures</h2>
            <div ref={galleryContainer} class={style.galleryContainer}>
                <div
                    ref={gallery}
                    class={style.gallery}
                    onClick={() => {
                        shouldAnimate.current = false;
                    }}
                >
                    {photosMap.map((url, index) => (
                        <Photo
                            key={index}
                            url={url}
                            setAnimate={() => {
                                shouldAnimate.current = true;
                            }}
                            setNavigate={(index) => setCurrentIndex(index)}
                            currentIndex={index}
                            totalPhotos={photosMap.length}
                            activeIndex={currentIndex}
                            startup={shouldAnimate.current}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Photo: FunctionalComponent<PhotoProps> = (props) => {
    const [opened, setOpened] = useState<boolean>(props.currentIndex === props.activeIndex);
    const [currentIndex, setCurrentIndex] = useState<number>(props.currentIndex);

    useEffect(() => {
        if(props.startup){
            setOpened(false);
        } else {
            setCurrentIndex(props.currentIndex);
            setOpened(props.currentIndex === props.activeIndex);
        }
    }, [props.currentIndex, props.activeIndex]);

    const onClick = () => {
        setOpened(!opened);
        props.setAnimate();
    };

    const navigate = (delta: number) => {
        const nextIndex = (currentIndex + delta + props.totalPhotos) % props.totalPhotos;
        setCurrentIndex(nextIndex);
        props.setNavigate(nextIndex); 
    };

    const classes = `${style.image} ${opened ? style.fullimage : ""}`;

    return (
        <span class={classes} onClick={onClick}>
            {opened && (
                <div class={style.fullimage}>
                    <div class={style.navigation}>
                        <div
                            class={`${style.arrow}`}
                            onClick={(e) => {
                                e.stopPropagation(); 
                                navigate(-1);
                            }}
                        >
                            &lt;
                        </div>
                        <div
                            class={`${style.arrow}`}
                            onClick={(e) => {
                                e.stopPropagation(); // Stop event propagation
                                navigate(1);
                            }}
                        >
                            &gt;
                        </div>
                    </div>
                    <img
                        src={props.url.toString()}
                        alt="HackDelft 2021 photo"
                        loading="lazy"
                    />
                </div>
            )}
            {!opened && (
                <img
                    src={props.url.toString()}
                    alt="HackDelft 2021 photo"
                    loading="lazy"
                />
            )}
        </span>
    );
};




interface PhotoProps {
    url: URL;
    setAnimate: () => void;
    setNavigate: (index: number) => void;
    currentIndex: number;
    totalPhotos: number;
    activeIndex: number;
    startup: boolean;
}

