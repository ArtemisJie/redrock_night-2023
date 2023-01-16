import { useState } from 'react'
import Replay from './pages/Replay'
import { NavLink, useRoutes } from 'react-router-dom'
import './App.css'
import routes from './routes/index'
function App() {
  const element = useRoutes(routes)
  return (
    <>
      <NavLink to='/replay'>to replay</NavLink>
      {element}
    </>
  )
}

export default App
