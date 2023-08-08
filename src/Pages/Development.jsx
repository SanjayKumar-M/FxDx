import React from 'react'
import '../Styles/Development.css'

const Development = () => {
  return (
    <div id='dev'>

      <div id='left'>
        <h2>
          Development Of Our Best <br></br>Platform
        </h2>

        <sub id='dev-sub' >Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br></br>vulputate libero et velit interdum, ac aliquet odio mattis.</sub>
        <div id='statswhole'>
          <div id='stats'>
            <p>Our Users</p>
            <span>500K+</span>
          </div>
          <div id='stats'>
            <p>Active Transactions</p>
            <span>10M+</span>
          </div>
          <div id='stats'>
            <p>Brand Partner</p>
            <span>300+</span>
          </div>
        </div>
        <button id='dev-btn'>Know more</button>

      </div>
      <div id='right'>
        

          <svg xmlns="http://www.w3.org/2000/svg" width="602" height="516" viewBox="0 0 602 516" fill="none" id='background-svg'>
            <g filter="url(#filter0_f_1_3402)">
              <circle cx="301" cy="215" r="107" fill="#2962FF" />
            </g>
            <defs>
              <filter id="filter0_f_1_3402" x="0" y="-86" width="602" height="602" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="97" result="effect1_foregroundBlur_1_3402" />
              </filter>
            </defs>
          </svg>

          <img id='overlay-img' src='https://s3-alpha-sig.figma.com/img/dc40/a7d7/8c6faf11473ee8b5efe34298aee167f5?Expires=1692576000&Signature=Fo3CYTZFj5hcCJ5henudjTaDJBxfJdefiV8D6ErtmRVEGu-X-lawgFuf0aVGafIAG0D2nNppBfVpd2YMo1EM1jY-tmrB8pdP8hEuBevP6mCs3xxcqV79dJ9iz45ykLzcCxjzDG29XS8kyuSY4f0OL~jxBPmwoYBBWiINRW2at2lVmtPQMkCYR8MRSc76Pv-yje8Y7ayq~QCoP3jTJ-2C3Do7J~9Le7~suOeOqgzIhJiBgOhmqkuHYhiRABveHoEXnbGQK52yZFI7e9F-fplkVaNcbziotcWCMjvewYkoin8oVyVd7Oq7o5sHe3rZ-eSdC1hwHUB7MSJAgn5FEKUahQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='trade' ></img>
        </div>
      </div>

    
  )
}

export default Development