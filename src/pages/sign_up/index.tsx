import React from 'react'
import Header from '../../components/header'
import './index.less'

export default function index() {
	return (
		<>
			<Header></Header>
			<div className="sign_up_root">
				<div className="position">当前位置：首页{'>'}观众报名</div>
				<h1>观众报名</h1>
				<div className="info">
					<span>时间</span>
					<span>发布者</span>
				</div>
				<div className="content">........</div>
			</div>
		</>
	)
}
