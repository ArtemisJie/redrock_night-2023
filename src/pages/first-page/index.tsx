import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Controller, Autoplay } from 'swiper'
import Schedule from './components/schedule'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './index.less'
import { Link, useNavigate } from 'react-router-dom'
import title1Top from '/firstPage/title1Top.png'
import title1Bottom from '/firstPage/title1Bottom.png'
import resulticon1 from '/firstPage/resulticon1.png'
import resulticon2 from '/firstPage/resulticon2.png'
import resulticon3 from '/firstPage/resulticon3.png'
import resulticon4 from '/firstPage/resulticon4.png'
import smallBannerBg from '/firstPage/smallBannerBg.png'

interface ICalendar {
  num: number
  isDuration: boolean
}

export default function index() {
  const navigate = useNavigate()
  const scheduleName = ['峰会开幕式', '圆桌讨论']
  const resultData = [
    {
      title: '无处不在的云原生',
      content: '“无处不在的云原生”，是新一代开发者与开发环境的大势所趋，2022年1024程序员日，第二期Techo Day肟讯技术开放日旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践!',
      icon: resulticon1,
      link: '/replay/video-play/video5',
    },
    {
      title: '设计不止36技',
      content: '“无处不在的云原生”，是新一代开发者与开发环境的大势所趋，2022年1024程序员日，第二期Techo Day肟讯技术开放日旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践!',
      icon: resulticon2,
      link: '/replay/video-play/video2',
    },
    {
      title: '如何有效提升产研效率',
      content: '“无处不在的云原生”，是新一代开发者与开发环境的大势所趋，2022年1024程序员日，第二期Techo Day肟讯技术开放日旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践!',
      icon: resulticon3,
      link: '/replay/video-play/video3',
    },
    {
      title: 'Web端工具如何设计',
      content: '“无处不在的云原生”，是新一代开发者与开发环境的大势所趋，2022年1024程序员日，第二期Techo Day肟讯技术开放日旨在呈现腾讯更底层的云原生理念成果、全栈开发能力及最佳案例实践!',
      icon: resulticon4,
      link: '/replay/video-play/video4',
    },
  ]
  const [nowSchedule, setNowSchedule] = useState(0)
  const [navArr, setNavArr] = useState(false)
  const calendarSetting = {
    year: 2023,
    month: 4,
    duration: [12, 16],
  }
  const [calendar, setcalendar] = useState<ICalendar[]>([])
  useEffect(() => {
    const time = new Date(calendarSetting.year, calendarSetting.month - 1, 1)
    const arr = [7, 1, 2, 3, 4, 5, 6]
    const week = time.getDay()
    const d = new Date(calendarSetting.year, calendarSetting.month - 1, 0).getDate()
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
          isDuration: count >= calendarSetting.duration[0] + 1 && count <= calendarSetting.duration[1] + 1,
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
      <div className="main_root">
        <div
          className="banner"
          onMouseEnter={() => {
            setNavArr(true)
          }}
          onMouseLeave={() => {
            setNavArr(false)
          }}
        >
          <Swiper navigation={navArr} autoplay={{ delay: 8000 }} pagination={{ clickable: true }} loop={true} modules={[Navigation, Pagination, Controller, Autoplay]} className="mySwiper">
            <SwiperSlide>
              <div className="slide1">
                <img src={title1Bottom} alt="共码，共创，共未来。与新世界对话，为新技术发声。" className="titleBottom" />
                <img src={title1Top} alt="共码，共创，共未来。与新世界对话，为新技术发声。" className="titleTop" />
                <p className="subTitle">--重庆邮电大学第一届极客峰会</p>
                <button
                  className="btn"
                  onClick={() => {
                    navigate('/round-table')
                  }}
                >
                  了解更多
                </button>
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
            <Link to="/result-show">
              <div className="navPic3"></div>
              <p>成果展示</p>
            </Link>
          </li>
          <li>
            <Link to="/replay/video-play/video1">
              <div className="navPic4"></div>
              <p>回放入口</p>
            </Link>
          </li>
        </ul>
        <div className="arrange">
          <h1 className="title">日程安排</h1>
          <div className="slideBg"></div>
          <div
            className="small_banner"
            onMouseEnter={() => {
              setNavArr(true)
            }}
            onMouseLeave={() => {
              setNavArr(false)
            }}
          >
            <Swiper navigation={navArr} loop={true} modules={[Navigation]} className="mySwiper">
              <SwiperSlide>
                <img src={smallBannerBg} alt="" />
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
                  <div
                    key={i}
                    className={['day', e.isDuration ? 'duration' : '', e.num === calendarSetting.duration[0] ? 'border1' : '', e.num === calendarSetting.duration[1] ? 'border2' : ''].join(' ')}
                  >
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
                <button
                  onClick={() => {
                    navigate(e.link)
                  }}
                ></button>
                <img src={e.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
