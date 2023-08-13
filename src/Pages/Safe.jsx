import React from 'react';
import '../Styles/Safe.css';

const Safe = () => {
    return (
        <div id="safecont">
            <img src='https://raw.githubusercontent.com/SanjayKumar-M/Twitter-Bot-using-Python/main/Screenshot%20from%202023-08-13%2022-10-31.png' alt='img' />
            <div id="safeRight">
                <h2 id="safeHead">
                    Completely safe & secure
                </h2>
                <sub id="safeSub">
                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate <br /> libero et velit interdum, ac aliquet odio mattis. Class aptent taciti <br /> sociosqu ad litora torquent per conubia nostra, per inceptos<br /> himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                </sub>
                <div id="safeBtn">
                    Learn More
                </div>
            </div>
        </div>
    );
};

export default Safe;
