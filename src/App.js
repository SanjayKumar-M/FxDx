import React from 'react'
import Home from './Pages/Home'
import Development from './Pages/Development'
import Trends from './Pages/Trends'
import Trust from './Pages/Trust'
import LastPage from './Pages/LastPage'
import Videos from './Pages/Videos'
import WorldPage from './Pages/WorldPage'
import Community from './Pages/Community'
import Review from './Pages/Review'
const App = () => {
  return (
    <div>
      <Home />
      <Development />
      <Trends />
      <Trust />
      <WorldPage /> 
      <Community />
      <Review />
      <Videos />
      <LastPage />
    </div>
  )
}

export default App