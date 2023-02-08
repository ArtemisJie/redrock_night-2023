import React from 'react'
import './index.less'

export default function index() {
  return (
    <header>
      <div className="logo"></div>
      <ul className="nav">
        <li className="index active">首页</li>
        <li className="geek">极客峰会</li>
      </ul>
      <div className="redrockLogo"></div>
    </header>
  )
}
