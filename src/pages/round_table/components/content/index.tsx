import React, { useState } from 'react'
import photo1 from '../../../../assets/roundTable/photo1.png'
import avatar1 from '../../../../assets/firstPage/avatar1.png'
import avatar2 from '../../../../assets/firstPage/avatar2.png'
import avatar3 from '../../../../assets/firstPage/avatar3.png'
import hosts1 from '../../../../assets/roundTable/hosts1.png'
import './index.less'
import { Link } from 'react-router-dom'

interface IProps {
  dataIndex: number
}

const data = [
  {
    index: 0,
    img: photo1,
    topic: '无处不在的云原生',
    guests: '言身寸',
    introduction: `
    本期 Techo Day 腾讯技术开放日将围绕以下三个亮点为开发者朋友们分享一个主题：如何更好发挥云原生“高效能、高弹性、高可靠”的优势，需要更具备全栈开发能力，“生于云，长于云”的基础设施。
    两场腾讯云大咖分享：从全栈能力到开发者成长
    腾讯云副总裁刘颖主题演讲，腾讯云副总裁黄俊洪与CSDN副总裁邹欣的主题对话，从平台全栈开发能力，到开发者的实践成长，全面解析云原生对企业、对个人的成长路径！为广大开发者解析云原生意味着什么，技术如何选型和...`,
    avatar: avatar1,
    achievements: [
      {
        team: '红岩网校工作站',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: '信息管理研究所',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: 'YF105',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: '南山工作室',
        hosts: '演讲人',
        img: hosts1,
      },
    ],
  },
  {
    index: 1,
    img: photo1,
    topic: '无处不在的云原生2',
    guests: '言身寸',
    introduction: `
    本期 Techo Day 腾讯技术开放日将围绕以下三个亮点为开发者朋友们分享一个主题：如何更好发挥云原生“高效能、高弹性、高可靠”的优势，需要更具备全栈开发能力，“生于云，长于云”的基础设施。
    两场腾讯云大咖分享：从全栈能力到开发者成长
    腾讯云副总裁刘颖主题演讲，腾讯云副总裁黄俊洪与CSDN副总裁邹欣的主题对话，从平台全栈开发能力，到开发者的实践成长，全面解析云原生对企业、对个人的成长路径！为广大开发者解析云原生意味着什么，技术如何选型和...`,
    avatar: avatar2,
    achievements: [
      {
        team: '红岩网校工作站',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: '信息管理研究所',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: 'YF105',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: '南山工作室',
        hosts: '演讲人',
        img: hosts1,
      },
    ],
  },
  {
    index: 2,
    img: photo1,
    topic: '无处不在的云原生3',
    guests: '言身寸',
    introduction: `
    本期 Techo Day 腾讯技术开放日将围绕以下三个亮点为开发者朋友们分享一个主题：如何更好发挥云原生“高效能、高弹性、高可靠”的优势，需要更具备全栈开发能力，“生于云，长于云”的基础设施。
    两场腾讯云大咖分享：从全栈能力到开发者成长
    腾讯云副总裁刘颖主题演讲，腾讯云副总裁黄俊洪与CSDN副总裁邹欣的主题对话，从平台全栈开发能力，到开发者的实践成长，全面解析云原生对企业、对个人的成长路径！为广大开发者解析云原生意味着什么，技术如何选型和...`,
    avatar: avatar3,
    achievements: [
      {
        team: '红岩网校工作站',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: '信息管理研究所',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: 'YF105',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: '南山工作室',
        hosts: '演讲人',
        img: hosts1,
      },
    ],
  },
  {
    index: 4,
    img: photo1,
    topic: '无处不在的云原生4',
    guests: '言身寸',
    introduction: `
    本期 Techo Day 腾讯技术开放日将围绕以下三个亮点为开发者朋友们分享一个主题：如何更好发挥云原生“高效能、高弹性、高可靠”的优势，需要更具备全栈开发能力，“生于云，长于云”的基础设施。
    两场腾讯云大咖分享：从全栈能力到开发者成长
    腾讯云副总裁刘颖主题演讲，腾讯云副总裁黄俊洪与CSDN副总裁邹欣的主题对话，从平台全栈开发能力，到开发者的实践成长，全面解析云原生对企业、对个人的成长路径！为广大开发者解析云原生意味着什么，技术如何选型和...`,
    avatar: avatar1,
    achievements: [
      {
        team: '红岩网校工作站',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: '信息管理研究所',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: 'YF105',
        hosts: '演讲人',
        img: hosts1,
      },
      {
        team: '南山工作室',
        hosts: '演讲人',
        img: hosts1,
      },
    ],
  },
]

export default function index(props: IProps) {
  const [activeHosts, setActiveHosts] = useState(0)
  const { dataIndex } = props
  const { img, guests, topic, introduction, achievements, avatar } = data[dataIndex]

  function changeHosts(index: number) {
    return () => {
      setActiveHosts(index)
    }
  }

  return (
    <div className="nowContent">
      <img className="photo" src={img} alt="" />
      <Link to="/result-show">
        <div className="info">
          <div className="bg1"></div>
          <div className="bg2"></div>
          <div className="content">
            <img src={avatar} alt="" />
            <p>{topic}</p>
            <p>{guests}</p>
            <p>{introduction}</p>
          </div>
          <div className="quotation1"></div>
          <div className="quotation2"></div>
        </div>
      </Link>
      <div className="show">
        <h1>团队成果展示</h1>
        <ul className="exhibition">
          {achievements.map((e, i) => (
            <li className={[i === activeHosts ? 'active' : ''].join(' ')} onClick={changeHosts(i)} key={e.team}>
              <p>{e.team}</p>
              <p>{e.hosts}</p>
            </li>
          ))}
        </ul>
        <div className="bg1"></div>
        <div className="bg2"></div>
        <img src={achievements[activeHosts].img} alt="" />
      </div>
    </div>
  )
}
