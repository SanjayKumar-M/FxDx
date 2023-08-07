import React from 'react'
import '../Styles/Home.css'
import '../Utils/newlogo.png'
const Home = () => {
  return (
    <div>
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
      <div className='content'>
          <p>
          Decentralised Infrastructure for Perpetual Futures with <span>Limitless Liquidity</span>
          </p>
          <p className='sub'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis natus a sed quis. Unde quisquam nobis tempora officiis quos, iure a error id dolore optio, animi voluptatem, quas neque. Sint?
          </p>
          <button id='btn'>Get Started</button>
      </div>
    </div>
  )
}

export default Home