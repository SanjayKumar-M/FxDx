import React from 'react'
import '../Styles/Home.css'
import '../Utils/newlogo.png'
const Home = () => {
  return (
    <div>
      <nav>
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
    </div>
  )
}

export default Home