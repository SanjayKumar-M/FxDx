import React from 'react'
import '../Styles/Community.css'
import People from '../Components/People'
const Community = () => {
    return (
        <div id='com-container'>
            <h1>Participants in Our Community</h1>
            <sub>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br></br> veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br></br>ad minim veniam, quis </sub>
            <div id='c-btn'>Join Community</div>
            <div id='ppp'><People /></div>
            
        </div>
    )
}

export default Community