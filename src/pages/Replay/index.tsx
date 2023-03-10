import { useRef, useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Routes from '@/routers/route'
import Header from '../../components/header/index'
import arrow from '/replay/arrow-down.png'
import replayIcon from '/replay/replayIcon.png'
import resultIcon from '/replay/result.png'

import './index.less'

export default () => {
  const listRef = useRef<HTMLLIElement | null>(null)
  const secondList = useRef<HTMLUListElement | null>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const resultLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    (resultLinkRef.current as HTMLAnchorElement).className = 'inactive';
    (linkRef.current as HTMLAnchorElement).className = 'active'
    linkRef.current?.addEventListener('click', () => {
      (resultLinkRef.current as HTMLAnchorElement).className = 'inactive';
      (linkRef.current as HTMLAnchorElement).className = 'active'
    })
    listRef.current?.addEventListener('mouseover', () => {
      (secondList.current as HTMLUListElement).className = 'secondListShow'
    })
    listRef.current?.addEventListener('mouseout', () => {
      (secondList.current as HTMLUListElement).className = 'secondList'
    })
    resultLinkRef.current?.addEventListener('click', () => {
      (linkRef.current as HTMLAnchorElement).className = 'inactive';
      (resultLinkRef.current as HTMLAnchorElement).className = 'active';
      console.log(1);

    })
    secondList.current?.addEventListener('click', () => {
      (resultLinkRef.current as HTMLAnchorElement).className = 'active';
      (resultLinkRef.current as HTMLAnchorElement).className += ' active';
    })
  }, [])
  return (
    <div className="container">
      <div className="replayNav">
        <ul className="navBar">
          <li className="firstListItem" id='wholeReplay'>
            <NavLink ref={linkRef} to="/replay/video-play/video1">
              <span className="wholeReplayIcon">
                <img src={replayIcon} />
              </span>
              <span className='text'>????????????</span>
            </NavLink>
          </li>
          <li className="firstListItem" id='resultShow' ref={listRef}>
            <NavLink ref={resultLinkRef} to="/replay/video-play/video5">
              <span className="resultShowIcon">
                <img src={resultIcon} />
              </span>
              <span className='text'>????????????
                <span className="arrowIcon">
                  <img src={arrow} />
                </span></span>
            </NavLink>
            <ul className="secondList" ref={secondList}>
              <li className="secondListItem">
                <NavLink to="/replay/video-play/video5">????????????????????????</NavLink>
              </li>
              <li className="secondListItem">
                <NavLink to="/replay/video-play/video2">????????????36???</NavLink>
              </li>
              <li className="secondListItem">
                <NavLink to="/replay/video-play/video3">?????????????????????...</NavLink>
              </li>
              <li className="secondListItem">
                <NavLink to="/replay/video-play/video4">Web???????????????...</NavLink>
              </li>
            </ul>

          </li>
          <li className='currentLocation'>
            <span className='currentLocationText'>
              ?????? ?? ????????????
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
