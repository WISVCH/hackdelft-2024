import { h, FunctionalComponent, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";

import { sponsorLogoMap } from "/data/sponsors";

import sponsorData from "/data/sponsors.json";

import * as style from "./style.scss";

/**
 * Renders the sponsors section.
 */
export const Sponsors: FunctionalComponent = () => (
    <section class={style.sponsors}>
        <h2>Sponsors</h2>
        {sponsorData.map((sponsor: SponsorCategory) => sponsorItem(sponsor))}
    </section>
);

export const sponsorItem = (category: SponsorCategory) => {
    const [sponsors, setSponsors] = useState([]);
    useEffect(() => {
        shuffleArray(category.items);
        setSponsors(category.items);
    }, []);

    return (
        <Fragment>
            <h3>{category.title}</h3>
            <ul class={style.sponsorlist}>
                {sponsors.map((sponsor: Sponsor) => (
                    <li key={sponsor.logoKey} data-type={category.type}>
                        <a
                            href={sponsor.url}
                            target="_blank"
                            rel="noopener"
                            title={sponsor.title}
                        >
                            <div class={style.img}>
                                <img
                                    src={sponsorLogoMap[
                                        sponsor.logoKey
                                    ].toString()}
                                    alt={sponsor.title}
                                />
                            </div>
                            <p>{sponsor.title}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

/**
 * Randomize the order of an array.
 * @param array The array to randomize.
 */
const shuffleArray = (array: any[]) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

interface SponsorCategory {
    type: "organisation" | "primary" | "secondary";
    title: string;
    items: Sponsor[];
}

interface Sponsor {
    logoKey: string;
    url: string;
    title: string;
}
