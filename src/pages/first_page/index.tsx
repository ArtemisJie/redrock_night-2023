import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import Schedule from './components/schedule'
import Header from '../../components/header'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './index.less'
import { Link } from 'react-router-dom'
import title1Top from '../../assets/firstPage/title1Top.png'
import title1Bottom from '../../assets/firstPage/title1Bottom.png'
import resulticon1 from '../../assets/firstPage/resulticon1.png'
import resulticon2 from '../../assets/firstPage/resulticon2.png'
import resulticon3 from '../../assets/firstPage/resulticon3.png'
import resulticon4 from '../../assets/firstPage/resulticon4.png'
import smallBannerBg from '../../assets/firstPage/smallBannerBg.png'
import qrcode from '../../assets/firstPage/qrcode.png'

interface ICalendar {
  num: number
  isDuration: boolean
}

export default function index() {
  const scheduleName = ['峰会开幕式', '圆桌讨论']
  const resultData = [
    {
      title: '无处不在的云原生',
      content: '“无处不在的云原生”，是新一代开发者与开发环境的大势所趋，2022年1024程序员日，第二期Techo Day肟讯技术开放日旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践!',
      icon: resulticon1,
    },
    {
      title: '设计不止36技',
      content: '“无处不在的云原生”，是新一代开发者与开发环境的大势所趋，2022年1024程序员日，第二期Techo Day肟讯技术开放日旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践!',
      icon: resulticon2,
    },
    {
      title: '如何有效提升产研效率',
      content: '“无处不在的云原生”，是新一代开发者与开发环境的大势所趋，2022年1024程序员日，第二期Techo Day肟讯技术开放日旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践!',
      icon: resulticon3,
    },
    {
      title: 'Web端工具如何设计',
      content: '“无处不在的云原生”，是新一代开发者与开发环境的大势所趋，2022年1024程序员日，第二期Techo Day肟讯技术开放日旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践!',
      icon: resulticon4,
    },
  ]
  const [nowSchedule, setNowSchedule] = useState(0)
  const calendarSetting = {
    year: 2023,
    month: 4,
    duration: [12, 16],
  }
  const [calendar, setcalendar] = useState<ICalendar[]>([])
  useEffect(() => {
    const time = new Date(calendarSetting.year, calendarSetting.month - 1, 1)
    console.log(time.getDay())

    const arr = [7, 1, 2, 3, 4, 5, 6]
    const week = time.getDay()
    const d = new Date(calendarSetting.year, calendarSetting.month - 1, 0).getDate()
    console.log(d)

    let flag = true
    let count = 1
    const temp: ICalendar[] = []
    for (let i = 1; i <= 42; i++) {
      if (arr[week] === i) flag = false
      if (flag || count >= d) {
        temp.push({
          num: 0,
          isDuration: false,
        })
      } else {
        temp.push({
          num: count++,
          isDuration: i >= calendarSetting.duration[0] && i <= calendarSetting.duration[1] ? true : false,
        })
      }
      setcalendar(temp)
    }
  }, [])

  function changeSchedule(index: number) {
    return () => {
      setNowSchedule(index)
    }
  }
  return (
    <>
      <Header></Header>
      <div className="main_root">
        <div className="banner">
          <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper">
            <SwiperSlide>
              <div className="slide1">
                <img src={title1Bottom} alt="共码，共创，共未来。与新世界对话，为新技术发声。" className="titleBottom" />
                <img src={title1Top} alt="共码，共创，共未来。与新世界对话，为新技术发声。" className="titleTop" />
                <p className="subTitle">--重庆邮电大学第一届极客峰会</p>
                <button className="btn">了解更多</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        <ul className="navgation">
          <li>
            <Link to="/signup">
              <div className="navPic1"></div>
              <p>报名通道</p>
            </Link>
          </li>
          <li>
            <Link to="/introduction/summary">
              <div className="navPic2"></div>
              <p>峰会概况</p>
            </Link>
          </li>
          <li>
            <div className="navPic3"></div>
            <p>成果展示</p>
          </li>
          <li>
            <div className="navPic4"></div>
            <p>回放入口</p>
          </li>
        </ul>
        <div className="arrange">
          <h1 className="title">日程安排</h1>
          <div className="slideBg"></div>
          <div className="small_banner">
            <Swiper navigation={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper">
              <SwiperSlide>
                <div className="slide1">
                  <img src={smallBannerBg} alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </div>
          <div className="calendar">
            <div className="head">
              <span>峰会报名时间</span>
              <span>{`${calendarSetting.year}`}</span>
              <span className="slash">/</span>
              <span>{`${calendarSetting.month < 10 ? '0' + calendarSetting.month : calendarSetting.month}`}</span>
            </div>
            <div className="calenderBody">
              <div className="week">一</div>
              <div className="week">二</div>
              <div className="week">三</div>
              <div className="week">四</div>
              <div className="week">五</div>
              <div className="week">六</div>
              <div className="week">日</div>
              {calendar.map((e, i) => {
                return (
                  <div key={i} className={['day', e.isDuration ? 'duration' : ''].join(' ')}>
                    {e.num ? e.num : ''}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="calendarBg"></div>
        </div>
        <div className="schedule">
          <h1 className="title">活动日程</h1>
          <div className="tab">
            {scheduleName.map((e, i) => (
              <span key={i} className={nowSchedule === i ? 'active' : ''} onClick={changeSchedule(i)}>
                {e}
                <span className="border"></span>
              </span>
            ))}
          </div>
          <Schedule changedata={nowSchedule}></Schedule>
        </div>
        <div className="result">
          <h1 className="title">成果展示</h1>
          <ul>
            {resultData.map((e, i) => (
              <li key={i} className="item">
                <h2>{e.title}</h2>
                <p>{e.content}</p>
                <button></button>
                <img src={e.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <footer>
          <div className="logo"></div>
          <div className="qrCode">
            <span>
              与新世界对话
              <br />
              为新技术发声
            </span>
            <span>
              <img src={qrcode} alt="" />
            </span>
          </div>
          <div className="line"></div>
          <div className="text">
            <span className="copyright">COPYRIGHT @ 红岩网校工作站</span>
            <span className="email">邮箱：hr@geeksummit.cn</span>
          </div>
        </footer>
      </div>
    </>
  )
}
