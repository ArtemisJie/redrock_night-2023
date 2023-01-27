import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper"
import Schedule from './components/schedule'
import Header from '../../components/header'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './index.less'
import { Link } from 'react-router-dom';

export default function index() {
    const scheduleName = ['峰会开幕式', '圆桌讨论']
    const resultName = ['题目1', '题目2', '题目3', '题目4', '题目5', '题目6', '题目7', '题目8', '题目9', '题目10']
    const [nowSchedule, setNowSchedule] = useState(0)
    function changeSchedule(index: number) {
        return () => {
            setNowSchedule(index)
        }
    }
    return (
        <>
            <Header></Header>
            <div className='main_root'>
                <div className='banner'>
                    <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper">
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                    </Swiper>
                </div>
                <div className='mid'>
                    <ul className='nav'>
                        <li><Link to="/signup">报名通道</Link></li>
                        <li><Link to="/introduction">峰会概况</Link></li>
                        <li>成果展示</li>
                        <li>回放入口</li>
                    </ul>
                    <div className='small_banner'>
                        <Swiper navigation={true} pagination={true} loop={true} modules={[Navigation, Pagination]} className="mySwiper">
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='calendar'>
                        日历
                    </div>
                </div>
                <div className='schedule'>
                    <h1>Event schedule</h1>
                    <h2>活动日程</h2>
                    <div className='tab'>
                        {
                            scheduleName.map((e, i) => <span key={i} className={nowSchedule === i ? 'active' : ''} onClick={changeSchedule(i)}>{e}</span>)
                        }
                        <Schedule changedata={nowSchedule}></Schedule>
                    </div>
                </div>
                <div className='result'>
                    <h1>Result display</h1>
                    <h2>成果展示</h2>
                    <ul>
                        {
                            resultName.map((e) => <li className='item'>{e}</li>)
                        }
                    </ul>
                </div>
                <footer>
                    footer
                </footer>
            </div>
        </>
    )
}
