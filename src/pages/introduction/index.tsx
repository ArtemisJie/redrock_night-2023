import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import './index.less'
import icon1 from '/introduction/icon1.png'
import icon2 from '/introduction/icon2.png'

export default function index() {
  const { pathname } = useLocation()

  return (
    <>
      <div className="summary_root">
        <div className="tab">
          <div className="position">
            首页 ·&nbsp;
            {pathname.includes('summary') ? '峰会概况' : '邀请函'}
          </div>
          <ul className="top_bar">
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="summary">
                <span className="icon1">
                  <img src={icon1} alt="" />
                </span>
                峰会概况
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : undefined)} to="invitation">
                <span className="icon2">
                  <img src={icon2} alt="" />
                </span>
                邀请函
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  )
}
