import { Fragment, h, render } from "preact";

import {
    About,
    Committee,
    FAQ,
    Footer,
    Header,
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
            <Navigation />
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
