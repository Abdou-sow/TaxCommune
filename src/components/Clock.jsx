import React, { useEffect, useState } from 'react';
import "../styles/clock.css"

const Clock = () => {

    const [myClockDisplay, setMyClockDisplay] = useState("");

    // const showTime = () => {

    //     var date = new Date();
    //     var h = date.getHours(); // 0 - 23
    //     var m = date.getMinutes(); // 0 - 59
    //     var s = date.getSeconds(); // 0 - 59
    //     var session = "AM";

    //     if (h == 0) {
    //         h = 12;
    //     }

    //     if (h > 12) {
    //         h = h - 12;
    //         session = "PM";
    //     }

    //     h = (h < 10) ? "0" + h : h;
    //     m = (m < 10) ? "0" + m : m;
    //     s = (s < 10) ? "0" + s : s;

    //     var time = h + ":" + m + ":" + s + " " + session;

    //     // console.log("time :",typeof time);
    //     // document.getElementById("MyClockDisplay").innerText = time;
    //     setMyClockDisplay(time)
    //     // document.getElementById("MyClockDisplay").textContent = time;
    //     // console.log("okokok");

    //     setTimeout(showTime, 1000);

    // }

    // showTime();

    const changeClock = () => {
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";

        if (h == 0) {
            h = 12;
        }

        if (h > 12) {
            h = h - 12;
            session = "PM";
        }

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        var time = h + ":" + m + ":" + s + " " + session;

        // console.log("time :",typeof time);
        // document.getElementById("MyClockDisplay").innerText = time;
        setMyClockDisplay(time)
        
        // document.getElementById("MyClockDisplay").textContent = time;
        // console.log("okokok");

        // setTimeout(, 1000);
    }

    useEffect(() => {

        setInterval(changeClock, 1000)



    }, []);

    return (
        <div>
            <div id="MyClockDisplay" class="clock">{myClockDisplay}</div>
        </div>
    );
}

export default Clock;
