import React, { useState } from 'react'
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
import navPic1 from '../../assets/firstPage/nav1.png'
import navPic2 from '../../assets/firstPage/nav2.png'
import navPic3 from '../../assets/firstPage/nav3.png'
import navPic4 from '../../assets/firstPage/nav4.png'

export default function index() {
  const scheduleName = ['峰会开幕式', '圆桌讨论']
  const resultName = ['题目1', '题目2', '题目3', '题目4', '题目5', '题目6', '题目7', '题目8', '题目9', '题目10']
  const [nowSchedule, setNowSchedule] = useState(0)
  const [calendar, setcalendar] = useState({
    year: 2023,
    month: 4,
    duration: [12, 16],
  })

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
              <img src={navPic1} alt="" />
              <p>报名通道</p>
            </Link>
          </li>
          <li>
            <Link to="/introduction/summary">
              <img src={navPic2} alt="" />
              <p>峰会概况</p>
            </Link>
          </li>
          <li>
            <img src={navPic3} alt="" />
            <p>成果展示</p>
          </li>
          <li>
            <img src={navPic4} className="pic4" alt="" />
            <p>回放入口</p>
          </li>
        </ul>
        <div className="arrange">
          <p className="title">日程安排</p>
          <div className="slideBg"></div>
          <div className="small_banner">
            <Swiper navigation={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper">
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
          </div>
          <div className="calendar">
            <div className="head">
              <span>峰会报名时间</span>
              <span>{`${calendar.year}/${calendar.month}`}</span>
            </div>
          </div>
          <div className="calendarBg"></div>
        </div>
        <div className="schedule">
          <h1>Event schedule</h1>
          <h2>活动日程</h2>
          <div className="tab">
            {scheduleName.map((e, i) => (
              <span key={i} className={nowSchedule === i ? 'active' : ''} onClick={changeSchedule(i)}>
                {e}
              </span>
            ))}
            <Schedule changedata={nowSchedule}></Schedule>
          </div>
        </div>
        <div className="result">
          <h1>Result display</h1>
          <h2>成果展示</h2>
          <ul>
            {resultName.map(e => (
              <li key={e} className="item">
                {e}
              </li>
            ))}
          </ul>
        </div>
        <footer>footer</footer>
      </div>
    </>
  )
}
