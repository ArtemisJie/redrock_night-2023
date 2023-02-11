import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.less'

export default function index() {
  return (
    <header>
      {/* 跳转到成果 */}
      <Link to={''}>
        <div className="logo"></div>
      </Link>
      <ul className="nav">
        <li className="index">
          <NavLink to={'index'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            首页
          </NavLink>
        </li>
        <li className="geek">
          <NavLink to={'round-table'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
            极客峰会
          </NavLink>
        </li>
      </ul>
      <div className="redrockLogo"></div>
    </header>
  )
}
