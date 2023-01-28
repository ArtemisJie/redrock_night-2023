import React, { useEffect, useState } from 'react'
import './index.less'

interface IProps {
  changedata: number
}

const data1 = [
  {
    index: 1,
    time: '15:00',
    content: '巴拉巴拉',
    hosts: 'redrock',
  },
  {
    index: 2,
    time: '15:00',
    content: '巴拉巴拉',
    hosts: 'redrock',
  },
  {
    index: 3,
    time: '15:00',
    content: '巴拉巴拉',
    hosts: 'redrock',
  },
  {
    index: 4,
    time: '15:00',
    content: '巴拉巴拉',
    hosts: 'redrock',
  },
  {
    index: 5,
    time: '15:00',
    content: '巴拉巴拉',
    hosts: 'redrock',
  },
]
const data2 = [
  {
    index: 1,
    time: '15:00',
    content: '咕噜咕噜',
    hosts: 'bluemountain',
  },
  {
    index: 2,
    time: '15:00',
    content: '咕噜咕噜',
    hosts: 'bluemountain',
  },
  {
    index: 3,
    time: '15:00',
    content: '咕噜咕噜',
    hosts: 'bluemountain',
  },
  {
    index: 4,
    time: '15:00',
    content: '咕噜咕噜',
    hosts: 'bluemountain',
  },
  {
    index: 5,
    time: '15:00',
    content: '咕噜咕噜',
    hosts: 'bluemountain',
  },
]
export default function index(props: IProps) {
  const { changedata } = props
  const [nowData, setNowData] = useState(data1)
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

  return (
    <div>
      <ul className="schedule_list">
        {nowData.map((e, i) => {
          return (
            <li key={i}>
              <p className="time">{e.time}</p>
              <p className="content">{e.content}</p>
              <p className="hosts">{e.hosts}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
