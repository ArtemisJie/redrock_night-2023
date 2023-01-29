import  { NavLink, Outlet}  from 'react-router-dom'
import Routes from '@/routers/route'
import './index.less'
export default () => {
  return (
    <div className="container">
      <nav className="replayNav">
        <div className="geekIcon">
          <img className="geekIconImg" />
          <div className="geekIconText">
            <span className="geek_cn">极客峰会</span>
            <span className="geek_en">Geek Summit</span>
          </div>
        </div>
        <a className="linkText" id='mainPage'>首页</a>
        <a className="linkText" id='geekPage'>极客峰会</a>
        <div className="redrockIcon">
          <img className="redrockIconImg" />
          <div className="redrockIconText">
            <span className="redrock_cn">极客峰会</span>
          </div>
        </div>
      </nav>
      <div className="nav">
        <span className="navIcon"></span>
        <div className="navText">
          <span className="TextContent">{`当前位置：首页->回放入口`}</span>
        </div>
      </div>
      <div className="mainContent">
        <div className="sideBar">
          <ul className="fisrtList">
            <li className="fisrtListItem">
              <span className="arrowIcon"></span>
              <span className="fisrtListItemText">全程回放</span>
            </li>
            <li className="fisrtListItem">
              <span className="arrowIcon"></span>
              <div className="fisrtListResultShow">
                <span className="fisrtListItemText">成果展示</span>
                <ul className="secondList">
                  <li className="secondList">
                    <NavLink to="/replay/video-play/video1">to video1</NavLink>
                  </li>
                  <li className="secondList">
                    <NavLink to="/replay/video-play/video2">to video2</NavLink>
                  </li>
                  <li className="secondList">
                    <NavLink to="/replay/video-play/video3">to video3</NavLink>
                  </li>
                  <li className="secondList">
                    <NavLink to="/replay/video-play/video4">to video4</NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="videoPlay">
          <Outlet />
        </div>
      </div>
    </div>
  )
  }
