import React, { useRef, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import IDCard from './id_card/index'
import './index.less'
import yinyanBg from '../../assets/result/yinyan-bg.png'
import people1 from '../../assets/result/Ellipse 155.png'
import people2 from '../../assets/result/Ellipse 155 (1).png'
import people3 from '../../assets/result/Ellipse 155 (2).png'
import people4 from '../../assets/result/Ellipse 155 (3).png'
import people5 from '../../assets/result/Ellipse 155 (4).png'
import people6 from '../../assets/result/Ellipse 155 (5).png'
import ppt1 from '../../assets/result/ppt1.png'
import ppt2 from '../../assets/result/ppt2.png'
import ppt3 from '../../assets/result/ppt1 (3).png'
import ppt4 from '../../assets/result/ppt1 (4).png'
import ppt5 from '../../assets/result/ppt1 (5).png'
import ppt6 from '../../assets/result/ppt1 (6).png'
import ppt7 from '../../assets/result/ppt1 (7).png'
import ppt8 from '../../assets/result/ppt1 (8).png'
import ppt9 from '../../assets/result/ppt1 (9).png'
import ppt10 from '../../assets/result/ppt1 (10).png'
import ppt11 from '../../assets/result/ppt1 (11).png'


export default function index() {
  const [idx, setIdx] = useState<number>(0)
  const peoplesRef = useRef<HTMLDivElement>(null)

  const people = [
    {
      name: '红岩网校工作站', src: people1, id: 'people1'
    },
    {
      name: '南山', src: people2, id: 'people2'
    },
    {
      name: '3', src: people3, id: 'people3'
    },
    {
      name: '4', src: people4, id: 'people4'
    },
    {
      name: '5', src: people5, id: 'people5'
    },
    {
      name: '6', src: people6, id: 'people6'
    }
  ]
  useEffect(() => {
    peoplesRef.current?.childNodes.forEach((item, idx) => {
      console.log((item as HTMLDivElement).className);
      item.addEventListener('click', () => {
        setIdx(idx)
        peoplesRef.current?.childNodes.forEach((item) => {
          (item as HTMLDivElement).className = 'people-show';
        });
        (item as HTMLDivElement).className += ' lighted'
        console.log((item as HTMLDivElement).className);
      })
    })
  }, [])
  return (
    <div className='result-show-container'>
      <div className="poster">
        <div className="text1"></div>
        <div className="text2"></div>
        <div className="text3">重庆邮电大学第一届极客峰会</div>
      </div>
      <div className='result-show-main'>
        <div className='result-nav-container'>
          <div className='result-nav'>
            <NavLink to='#video-replay' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              视频回放
            </NavLink>
            <NavLink to='#introduction' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              团队/嘉宾介绍
            </NavLink>
            <NavLink to='#content-replay' className={({ isActive }) => (isActive ? 'active' : undefined)}>
              内容回放
            </NavLink>
          </div>
        </div>
        <div className='introduction'>
          <span className='light'></span>
          <span className='introduction-title'></span>
          <div className='introduction-main'>
            <img src={yinyanBg}></img>
            “无处不在的云原生”，是新一代开发者与开发环境的大势所趋，
            2022年10月29日，第二期Techo Day 腾讯技术开放日隆重落幕！
            本期技术开放日以“云原生全栈开发与实践”为主题，
            旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践！
          </div>
          <div className='detail'>
            <span className='detail-text'>演讲嘉宾: 谢饭饭</span>
            <span className='detail-text'>所属团队/单位: 000000教育装备00000</span>
            <span className='detail-text'>演讲时间: 2020年07月21日一2021年03月12日</span>
            <span className='detail-text'>演讲地点:重庆邮电大学</span>
          </div>
        </div>
        <div id='video-replay'>
          <span className='light'></span>
          <span className='bg1'></span>
          <span className='bg2'></span>
          <span className='video-play-title'></span>
          <span className='meeting-title'></span>
          <span className='meeting-content'>会议描述会议描述会议描述会议一些会议描述一些会议描述一些会议描述会议描述会议描述会议描述会议一些会议描述一些会议描述一些会议描述会议描述会议描述会议描述会议一些会议描述一些会议描述一些会议描述会议描述会议</span>
          <div style={{ width: '78.89vw', height: '44.375vw', background: 'blue' }}></div>
        </div>
        <div id='introduction'>
          <span className='light'></span>
          <span className='introduction-title'></span>
          <div className='people-show-container' ref={peoplesRef}>
            {
              people.map((item, idx) => {
                return (
                  <div className='people-show' key={idx} id={item.id}>
                    <div className='avatar'>
                      <img src={item.src} />
                    </div>
                    <span className='name'>{item.name}</span>
                  </div>
                )
              })
            }
          </div>
          <IDCard idx={idx} />
        </div>
        <div id='content-replay'>
          <span className='light'></span>
          <span className='title'></span>
          <div className='cloud'>
            <span className='cloud-title'></span>
            <span className='cloud-introduction'>
              云原生技术使组织能够在新式动态环境（如公有云、私有云和混合云）中构建和运行可缩放的应用程序。 容器、服务网格、微服务、不可变基础结构和声明性 API 便是此方法的范例。
              这些技术实现了可复原、可管理且可观察的松散耦合系统。 它们与强大的自动化相结合，使工程师能够在尽量减少工作量的情况下，以可预测的方式频繁地进行具有重大影响力的更改。
            </span>
            <span className='cloud-ppt'>
              汇报PPT:
              <span className='cloud-ppt-alert'>
                (注意:版权和所有解释权归演讲者所有,禁止一切非法转载)
              </span>
            </span>
          </div>
          <div className='ppt-container'>
            <div className='top'>
              <img src={ppt1} className='ppt1' />
              <img src={ppt2} className='ppt2' />
              <img src={ppt3} className='ppt3' />
              <img src={ppt2} className='ppt2' />
              <img src={ppt2} className='ppt2' />
              <img src={ppt2} className='ppt2' />
              <img src={ppt4} className='ppt4' />
              <img src={ppt5} className='ppt5' />
            </div>
            <div className='down'>
              <img src={ppt6} className='ppt6' />
              <img src={ppt2} className='ppt2' />
              <img src={ppt1} className='ppt1' />
              <img src={ppt1} className='ppt1' />
              <img src={ppt1} className='ppt1' />
              <img src={ppt7} className='ppt7' />
              <img src={ppt8} className='ppt8' />
              <img src={ppt9} className='ppt9' />
              <img src={ppt10} className='ppt10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

