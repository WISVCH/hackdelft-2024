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
    <section class={style.container}>
        {/* <div class={style.image}>
            <img src={picture as any} alt="HackDelft Committee" />
        </div> */}
        <div class={style.committee}>
            <h2>Meet The Committee</h2>
            {/* <h3>From left to right</h3> */}
            <table>
                <tr>
                    <th>The Chair</th>
                    <td>Marit Radder</td>
                </tr>
                <tr>
                    <th>The Secretary</th>
                    <td>Marjolein van den Berghe</td>
                </tr>
                <tr>
                    <th>The Treasurer</th>
                    <td>Merle de Jong</td>
                </tr>
                <tr>
                    <th>The Head of Logistics</th>
                    <td>Marijn van der Tuin</td>
                </tr>
                <tr>
                    <th>The Commissioner of Promotional Affairs</th>
                    <td>Simon Deuten</td>
                </tr>
                <tr>
                    <th>The Head of Acquisition</th>
                    <td>Scott Jochems</td>
                </tr>            
                <tr>
                    <th>The Qualitate Qua</th>
                    <td>Robert van Dijk</td>
                </tr>
            </table>
        </div>
    </section>
);
