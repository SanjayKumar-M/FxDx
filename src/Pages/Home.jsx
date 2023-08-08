import React from 'react'
import '../Styles/Home.css'
import '../Utils/newlogo.png'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div id='home'>
      <nav>
        <video autoPlay loop muted className="background-video">
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/1162316547389776267/TEAM/7532/134d/-1a90-4293-9f60-7fa36a13d100?Expires=1692576000&Signature=SA966DAyx0v47gtT8jkcvszwtHJoOC77M9Eu0uNvhcI0y7IidT7~YZWltyWGtmLH6PtsSaSqsxFnytjgJtRaACaSbNf~MguTTnVuvNQEpjz1~DSwGamIuD0x380QyZbK~HB-weXlIYMtX6egcoYaysBIMHcn0mAwpY8yXspCK8UJ8ZO8vgF7vY~h7xdaR6TJezmPHa~ugLnfoVaCG5sJ6iAM59pJRLyWIuJx4exK19NEvVp1nI6qN0kIUSgl49mlwGcSJmpaO94GqvCpQFRoTL9m2DrIxzhQMXqsWHTpNzXpTBV7iUxJGaQNgFlDr2ZAYCbx8ELnWRF9QxdGhuPTXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            type="video/mp4"
          />
        </video>
        <img src='https://s3-alpha-sig.figma.com/img/fbf0/510c/d7292545bf7da63d70375df2f8e28d12?Expires=1692576000&Signature=AjWhxvvqrZBchzHBwJ06yO~1-jubHD3ltXbxywNCCiTX3cusZMnyOW5AggiyEbkNkjNYMrCFGtQ9BRgtgDDFa6XdmiIHEg0UtiG7wRGmxNLPQlwsEiUUxLhDpXZvBewKEOYTHxgl7tye4JScsywIvpMrjYMiK-w~KT7IE0zkqMZ1TdeJhmPFjxcz~4NDAocbqEwJte051XF1yl5PZ-qk~fM20iJo5FIqr7gc-nbfKY4b3AW4D-z4JWNpEsa0AeLj-kvIONU2uRWe2B8iSyH5BSzacEbVjCYxczeqHwrOXaznu7ODejzMahNnPPl8uKkc6X1nY2pyhuz08AGUGmBJ1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='logo' />
        <ul>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Stats</a></li>
          <li><a href="/">Community </a></li>
          <li><a href="/">Add Liquidity</a></li>
          <li><a href="/">Guide</a></li>
          <li><a href="/">Contact</a></li>

        </ul>
        <button>FXDX on Algorand</button>
      </nav>

      <main>
        <h1>Decentralised Infrastructure for </h1>
        <h1>Perpetual Futures with <span id='home-span'>Limitless Liquidity</span></h1>

        <sub>Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class<br></br>aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.v Curabitur tempus urna at turpis<br></br>condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.</sub>
        <button id='btn'>Get Started</button>

      </main>
      <Footer />
    </div>
  )
}

export default Home