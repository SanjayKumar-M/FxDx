import React from 'react'
import '../Styles/Current.css'
import TickerWidget from '../Components/TickerWidget'
import Trade from '../Components/Trade'
const Current = () => {
    return (
        <div id='curr-cont'>
            <h2>
                Market Summary (Current)
            </h2>
            <sub>
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad<br></br> litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut<br></br> commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.
            </sub>
            <TickerWidget />
            <Trade />
        </div>
    )
}

export default Current