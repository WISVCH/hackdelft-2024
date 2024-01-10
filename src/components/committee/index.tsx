import { h, FunctionalComponent } from "preact";

import * as style from "./style.scss";

const picture = new URL(
    "/static/committee.png?as=webp&width=1200",
    import.meta.url
);

/**
 * Renders the committee section.
 */
export const Committee: FunctionalComponent = () => (
    <section>
        {/* <div class={style.image}>
            <img src={picture as any} alt="HackDelft Committee" />
        </div> */}
        <div class={style.committee}>
            <h2>Meet The Committee</h2>
            <div class={style.container}>
                <div class={style.left}>
                    <div class={style.person}>
                        <div class={style.polygon}>
                            <img src={picture as any} alt="HackDelft Committee" />
                        </div>
                        <div>
                            <p class={style.function}>Chair</p>
                            <p class={style.name}>Marit Radder</p>
                        </div>
                    </div>
                    <div class={style.person}>
                        <div class={style.polygon}>
                            <img src={picture as any} alt="HackDelft Committee" />
                        </div>
                        <div>
                            <p class={style.function}>Secretary</p>
                            <p class={style.name}>Marjolein van der Berghe</p>
                        </div>
                    </div>
                    <div class={style.person}>
                        <div class={style.polygon}>
                            <img src={picture as any} alt="HackDelft Committee" />
                        </div>
                        <div>
                            <p class={style.function}>Treasure</p>
                            <p class={style.name}>Merle de Jong</p>
                        </div>
                    </div>
                </div>
                <div class={style.right}>
                    <div class={style.person}>
                        <div>
                            <p class={style.function}>Logistics</p>
                            <p class={style.name}>Marijn van der Tuin</p>
                        </div>
                        <div class={style.polygon}>
                            <img src={picture as any} alt="HackDelft Committee" />
                        </div>
                    </div>

                    <div class={style.person}>
                        <div>
                            <p class={style.function}>Promotion</p>
                            <p class={style.name}>Simon Deuten</p>
                        </div>
                        <div class={style.polygon}>
                            <img src={picture as any} alt="HackDelft Committee" />
                        </div>
                    </div>

                    <div class={style.person}>
                        <div>
                            <p class={style.function}>Acquisition</p>
                            <p class={style.name}>Scott Jochems</p>
                        </div>
                        <div class={style.polygon}>
                            <img src={picture as any} alt="HackDelft Committee" />
                        </div>
                    </div>
                </div>
                <div class={style.middle}>
                    <div class={style.person}>
                        <div class={style.polygon}>
                            <img src={picture as any} alt="HackDelft Committee" />
                        </div>
                        <div>
                            <p class={style.function}>Qualitate Qua</p>
                            <p class={style.name}>Robert van Dijk</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
