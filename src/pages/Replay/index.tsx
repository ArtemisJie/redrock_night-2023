import { useRef, useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Routes from '@/routers/route'
import Header from '../../components/header/index'
import arrow from '../../assets/replay/arrow-down.png'
import replayIcon from '../../assets/replay/replayIcon.png'
import resultIcon from '../../assets/replay/result.png'

import './index.less'

export default () => {
  const listRef = useRef<HTMLLIElement | null>(null)
  const secondList = useRef<HTMLUListElement | null>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const resultLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    listRef.current?.addEventListener('mouseover', () => {
      (secondList.current as HTMLUListElement).className = 'secondListShow'
    })
    listRef.current?.addEventListener('mouseout', () => {

      (secondList.current as HTMLUListElement).className = 'secondList'
    })
    resultLinkRef.current?.addEventListener('click', () => {
      (resultLinkRef.current as HTMLAnchorElement).className = 'active';
    })
    secondList.current?.addEventListener('click', () => {
      (resultLinkRef.current as HTMLAnchorElement).className = 'active';
    })
  }, [])
  return (
    <div className="container">
      <div className="replayNav">
        <ul className="navBar">
          <li className="firstListItem" id='wholeReplay'>
            <NavLink ref={linkRef} className={({ isActive }) => (isActive ? 'active' : undefined)} to="/replay/video-play/video1">
              <span className="wholeReplayIcon">
                <img src={replayIcon} />
              </span>
              <span className='text'>全程回放</span>
            </NavLink>
          </li>
          <li className="firstListItem" id='resultShow' ref={listRef}>
            <NavLink ref={resultLinkRef} to="/replay/video-play/video5">
              <span className="resultShowIcon">
                <img src={resultIcon} />
              </span>
              <span className='text'>成果展示
                <span className="arrowIcon">
                  <img src={arrow} />
                </span></span>
            </NavLink>
            <ul className="secondList" ref={secondList}>
              <li className="secondListItem">
                <NavLink to="/replay/video-play/video5">无处不在的云原生</NavLink>
              </li>
              <li className="secondListItem">
                <NavLink to="/replay/video-play/video2">设计不止36技</NavLink>
              </li>
              <li className="secondListItem">
                <NavLink to="/replay/video-play/video3">如何有效提升产...</NavLink>
              </li>
              <li className="secondListItem">
                <NavLink to="/replay/video-play/video4">Web端工具如何...</NavLink>
              </li>
            </ul>

          </li>
          <li className='currentLocation'>
            <span className='currentLocationText'>
              首页 · 回放入口
            </span>
          </li>
        </ul>
        <div className='wholeReplayTitle'>
          <span className='wholeReplayTitleText'>
          </span>
        </div>
        <div className="videoPlay">
          <Outlet />
        </div>
        <div className='broaden'></div>
      </div>
    </div>
  )
}
