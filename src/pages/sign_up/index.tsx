import React from 'react'
import Footer from '../../components/footer'
import Header from '../../components/header'
import qrcode from '../../assets/introduction/qrcode.png'
import './index.less'

export default function index() {
  const releseTime = '2023.22 15：30'
  const data = {
    signupTime: {
      startTime: {
        year: 2023,
        month: 4,
        day: 12,
      },
      endTime: {
        year: 2023,
        month: 4,
        day: 16,
      },
      year: 2023,
      month: 4,
      day: 20,
    },
    discussTime: {
      startTime: {
        year: 2023,
        month: 4,
        day: 22,
      },
      endTime: {
        year: 2023,
        month: 4,
        day: 26,
      },
      year: 2023,
      month: 4,
      day: 24,
    },
  }
  return (
    <>
      <div className="sign_up_root">
        <h1>观众报名</h1>
        <div className="info">极客峰会项目组&nbsp;| {releseTime}</div>
        <h2>报名注意事项</h2>
        <div className="text">
          1.报名时间: 极客峰会开幕式开始时间：
          <span>
            {data.signupTime.year}年{data.signupTime.month}月{data.signupTime.day}日
          </span>
          ，开放报名时间：
          <span>
            {data.signupTime.startTime.year}年{data.signupTime.startTime.month}月{data.signupTime.startTime.day}日—{data.signupTime.endTime.year}年{data.signupTime.endTime.month}月
            {data.signupTime.endTime.day}日
          </span>
          ;
          <br /> 极客峰会同桌讨论开始时间：
          <span>
            {data.discussTime.year}年{data.discussTime.month}月{data.discussTime.day}日
          </span>
          ,开放报名时间：
          <span>
            {data.discussTime.startTime.year}年{data.discussTime.startTime.month}月{data.discussTime.startTime.day}日—{data.discussTime.endTime.year}年{data.discussTime.endTime.month}月
            {data.discussTime.endTime.day}日
          </span>
          。
          <br />
          2.报名方式:观众预约方式:扫描下方二维码进入极客峰会报名表;登录后,填写相关信息后，完成预约报名。
          <br />
          3.报名结果:报名结果我们将通过邮箱方式于1-2个工作日内回复您，无论成功与否，感激您的参与,使得这次极客峰会更加精彩。
          <br />
          4.请所有观众共同遵守疫情防控要求，佩戴好口罩，遵从工作人员引导，进入场馆时请出示相关证件(如学生证、-卡通)核验身份后 方可进入会场。
          <br />
          5.预约成功后，请尽量按照约定时间到场。
          <br />
          6.欲了解峰会相关信息请点击 峰会概况 进行了解，如有任何疑问可加入极客峰会QQ群: 1231451515151进行询问。
          <br />
        </div>
        <img src={qrcode} alt="" />
      </div>
    </>
  )
}
