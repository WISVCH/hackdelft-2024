import { Fragment, h, render } from "preact";
import * as style from "./global.scss";

import {
    About,
    Committee,
    FAQ,
    Footer,
    Header,
    Numbers,
    Navigation,
    Photos,
    Sponsors,
    Timeline,
} from "/src/components";

import "./global.scss";

/**
 * Start the application.
 */
const start = (): void => {
    render(
        <Fragment>
            <Header />
            <div class={style.gradient}>
                <Navigation />
                <Numbers />
            </div>
            <About />
            <Photos />
            <Timeline />
            <Sponsors />
            <FAQ />
            <Committee />
            <Footer />
        </Fragment>,
        document.body
    );
};

/**
 * Let's start!
 */
start();
