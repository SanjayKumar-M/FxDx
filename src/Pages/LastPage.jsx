import React from 'react'
import '../Styles/LastPage.css'
const LastPage = () => {
    return (
        <div id='last-container'>
            <div id='last-left'>
                <img src='https://s3-alpha-sig.figma.com/img/fbf0/510c/d7292545bf7da63d70375df2f8e28d12?Expires=1692576000&Signature=AjWhxvvqrZBchzHBwJ06yO~1-jubHD3ltXbxywNCCiTX3cusZMnyOW5AggiyEbkNkjNYMrCFGtQ9BRgtgDDFa6XdmiIHEg0UtiG7wRGmxNLPQlwsEiUUxLhDpXZvBewKEOYTHxgl7tye4JScsywIvpMrjYMiK-w~KT7IE0zkqMZ1TdeJhmPFjxcz~4NDAocbqEwJte051XF1yl5PZ-qk~fM20iJo5FIqr7gc-nbfKY4b3AW4D-z4JWNpEsa0AeLj-kvIONU2uRWe2B8iSyH5BSzacEbVjCYxczeqHwrOXaznu7ODejzMahNnPPl8uKkc6X1nY2pyhuz08AGUGmBJ1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='last'></img>
                <p>Jorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit. Nunc vulputate libero et<br></br> velit interdum, ac aliquet odio mattis.<br></br> Class aptent taciti sociosqu ad litora<br></br> torquent per conubia nostra, per inceptos <br></br>himenaeos. Curabitur tempus urna at<br></br> turpis condimentum lobortis.Jorem<br></br> ipsum dolor sit amet, consectetur<br></br> adipiscing elit. Nunc vulputate libero et <br></br>velit interdum, ac </p>
                <input id='last-input' placeholder='Enter Your Email'></input>
                <div id='input-start'>Get Started<svg xmlns="http://www.w3.org/2000/svg" width="33" height="34" viewBox="0 0 33 34" fill="none">
                    <path d="M5.48368 26.292C5.17494 25.94 5.02057 25.5501 5.02057 25.1222C5.02057 24.6943 5.17494 24.3216 5.48368 24.0038L12.2063 16.9001L5.44416 9.78635C5.13542 9.49631 4.98763 9.1166 5.00081 8.64721C5.01398 8.17785 5.17494 7.79483 5.48368 7.49814C5.78613 7.15274 6.14099 6.98696 6.54828 7.0008C6.95557 7.01464 7.31044 7.18042 7.61289 7.49814L15.5084 15.7925C15.6465 15.9375 15.7581 16.1066 15.8435 16.2998C15.9288 16.493 15.9715 16.6931 15.9715 16.9001C15.9715 17.1347 15.9288 17.347 15.8435 17.5369C15.7581 17.7267 15.6465 17.8942 15.5084 18.0392L7.65241 26.292C7.34997 26.6098 6.98851 26.7617 6.56805 26.7479C6.14758 26.734 5.78613 26.5821 5.48368 26.292Z" fill="white" />
                </svg></div>
            </div>

            <div id='last-right'>
                <div id='whole'>
                    <h3 id='last-head'>
                        MENU
                    </h3>

                    <ul id='last-list'>
                        <li>Home</li>
                        <li>Stats</li>
                        <li>Add Liquidity</li>
                        <li>Guide</li>
                    </ul>
                </div>
                <div id='whole'>
                    <h3 id='last-head'>
                        DOCS
                    </h3>
                    <ul id='last-list'>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div id='whole'>
                    <h3 id='last-head'>
                        RESOURCES
                    </h3>
                    <ul id='last-list'>
                        <li>Analytics</li>
                        <li>Earn Dashboard</li>
                        <li>Whitepaper</li>
                        <li>Github</li>
                        <li>Fees</li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default LastPage