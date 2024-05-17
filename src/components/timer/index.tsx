import { h, FunctionalComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as style from "./style.scss";



export const Timer: FunctionalComponent = () => {
    const calculateTimeLeft = () => {
        const difference = (new Date("2024-05-25T13:30:00")).valueOf() - (new Date()).valueOf()

        let timeLeft = {};

        if (difference > 0) {
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setCountdown({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds,
              });
        } else {
            setCountdown({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
              });
        }
    };

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

    useEffect(() => {
        const interval = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div class={style.timer}>
            <div>
                {countdown.days} <span>d</span>
                {countdown.hours} <span>h</span>
                {countdown.minutes} <span>m</span>
                {countdown.seconds} <span>s</span>
            </div>
        </div>
    );
}