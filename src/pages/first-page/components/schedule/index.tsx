import React, { useEffect, useState } from 'react'
import avatar1 from '/firstPage/avatar1.png'
import avatar2 from '/firstPage/avatar2.png'
import avatar3 from '/firstPage/avatar3.png'
import './index.less'

interface IProps {
  changedata: number
}

const data1 = [
  {
    index: 1,
    time: '9:30 - 9:45',
    content: '内容1',
    hosts: {
      name: '耳东陈',
      position: '重庆邮电大学计算机学院院长',
      avatar: avatar1,
    },
  },
  {
    index: 2,
    time: '9:45 - 10:15',
    content: '内容1',
    hosts: {
      name: '耳东陈',
      position: '重庆邮电大学计算机学院院长',
      avatar: avatar2,
    },
  },
  {
    index: 3,
    time: '10:15 - 10:45',
    content: '内容1',
    hosts: {
      name: '耳东陈',
      position: '重庆邮电大学计算机学院院长',
      avatar: avatar3,
    },
  },
  {
    index: 4,
    time: '10:45 - 11:00',
    content: '内容1',
    hosts: {
      name: '耳东陈',
      position: '重庆邮电大学计算机学院院长',
      avatar: avatar1,
    },
  },
]
const data2 = [
  {
    index: 1,
    time: '9:30 - 9:45',
    content: '内容2',
    hosts: {
      name: '耳东陈',
      position: '重庆邮电大学计算机学院院长',
      avatar: avatar1,
    },
  },
  {
    index: 2,
    time: '9:45 - 10:15',
    content: '内容2',
    hosts: {
      name: '耳东陈',
      position: '重庆邮电大学计算机学院院长',
      avatar: avatar2,
    },
  },
  {
    index: 3,
    time: '10:15 - 10:45',
    content: '内容2',
    hosts: {
      name: '耳东陈',
      position: '重庆邮电大学计算机学院院长',
      avatar: avatar3,
    },
  },
  {
    index: 4,
    time: '10:45 - 11:00',
    content: '内容2',
    hosts: {
      name: '耳东陈',
      position: '重庆邮电大学计算机学院院长',
      avatar: avatar1,
    },
  },
]
export default function index(props: IProps) {
  const { changedata } = props
  const [nowData, setNowData] = useState(data1)
  const [index, setIndex] = useState(0)
  useEffect(() => {
    switch (changedata) {
      case 0:
        setNowData(data1)
        break
      case 1:
        setNowData(data2)
        break
      default:
        setNowData(data1)
    }
  }, [changedata])

  function change(i: number) {
    return () => {
      setIndex(i)
    }
  }

  return (
    <div>
      <ul className="schedule_list">
        {nowData.map((e, i) => {
          return (
            <li key={i} className={[index === i ? 'active' : ''].join('')} onClick={change(i)}>
              <div className="card">
                <span className="content">{e.content}</span>
                <span className="hosts">
                  <div>
                    <p className="name">{e.hosts.name}</p>
                    <p className="position">{e.hosts.position}</p>
                  </div>
                  <img src={e.hosts.avatar} alt="" />
                </span>
                <div className="shadow"></div>
              </div>
              <span className="circle">
                <span className="triangle"></span>
              </span>
              <span className="time">{e.time}</span>
              <span className="line"></span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
