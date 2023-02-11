import { useRef, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Routes from '@/routers/route'
import Header from '../../components/header/index'
import './index.less'

export default () => {
  const listRef = useRef<HTMLLIElement | null>(null)
  const secondList = useRef<HTMLUListElement | null>(null)
  useEffect(() => {
    listRef.current?.addEventListener('mouseover', () => {
      console.log(secondList.current?.style.display === 'none');
    })

  }, [])
  return (
    <div className="container">
      <div className="replayNav">
        <ul className="navBar">
          <li className="firstListItem" id='wholeReplay'>
            <span className="wholeReplayIcon"></span>
            <span className="fisrtListItemText">全程回放</span>
          </li>
          <li className="firstListItem" id='resultShow' ref={listRef}>
            <span className="resultShowIcon"></span>
            <div className="fisrtListResultShow">
              <span className="fisrtListItemText">成果展示</span>
              <span className="arrowIcon"></span>
              <ul className="secondList" ref={secondList}>
                <li className="secondListItem">
                  <NavLink to="/replay/video-play/video1">无处不在的云原生</NavLink>
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
            </div>
          </li>
          <li className='currentLocation'>
            <span className="iconfont">&#xe610;</span>
            <span className='currentLocationText'>
              首页 · 回放入口
            </span>
          </li>
        </ul>
        <div className='wholeReplayTitle'>
          <span className='wholeReplayTitleText'>全程回放
            <span className='wholeReplayTitleCurcle'></span>
          </span>
        </div>
        <div className="videoPlay">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
