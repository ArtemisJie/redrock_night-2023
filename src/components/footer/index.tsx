import React from 'react'
import './index.less'
import qrcode from '/firstPage/qrcode.png'

export default function index() {
  return (
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
  )
}
