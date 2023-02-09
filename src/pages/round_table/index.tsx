import React, { useState } from 'react'
import Content from './components/content'
import poster from '../../assets/roundTable/poster.png'
import './index.less'

export default function index() {
  const tabNames = ['开幕式', '圆桌第一期', '圆桌第二期', '敬请期待']
  const [nowContent, setNowContent] = useState(0)

  function changeContent(index: number) {
    return () => {
      setNowContent(index)
    }
  }
  return (
    <div className="main_root">
      <img src={poster} className="poster"></img>
      <ul className="switch">
        {tabNames.map((e, i) => (
          <li key={i} onClick={changeContent(i)} className={[nowContent === i ? 'active' : ''].join(' ')}>
            {e}
          </li>
        ))}
      </ul>
      <Content dataIndex={nowContent}></Content>
    </div>
  )
}
