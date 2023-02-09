import React from 'react'
import { useRoutes } from 'react-router-dom'
import './App.less'
import Footer from './components/footer'
import Header from './components/header'
import routers from './routers/route'

function App() {
  const router = useRoutes(routers)

  return (
    <>
      <Header></Header>
      {router}
      <Footer></Footer>
    </>
  )
}

export default App
