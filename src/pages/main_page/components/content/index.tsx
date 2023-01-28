import React from 'react'
import './index.less'

interface IProps {
	dataIndex: number
}

const data = [
	{
		index: 0,
		img: '..',
		topic: '主题1',
		guests: '嘉宾1',
		introduction: '简介1',
		achievements: [
			{
				team: '队1',
				hosts: '演讲人',
			},
			{
				team: '队2',
				hosts: '演讲人',
			},
			{
				team: '队3',
				hosts: '演讲人',
			},
			{
				team: '队4',
				hosts: '演讲人',
			},
			{
				team: '队5',
				hosts: '演讲人',
			},
		],
	},
	{
		index: 1,
		img: '..',
		topic: '主题2',
		guests: '嘉宾2',
		introduction: '简介2',
		achievements: [
			{
				team: '队1',
				hosts: '演讲人',
			},
			{
				team: '队2',
				hosts: '演讲人',
			},
			{
				team: '队3',
				hosts: '演讲人',
			},
			{
				team: '队4',
				hosts: '演讲人',
			},
			{
				team: '队5',
				hosts: '演讲人',
			},
		],
	},
	{
		index: 3,
		img: '..',
		topic: '主题3',
		guests: '嘉宾3',
		introduction: '简介3',
		achievements: [
			{
				team: '队1',
				hosts: '演讲人',
			},
			{
				team: '队2',
				hosts: '演讲人',
			},
			{
				team: '队3',
				hosts: '演讲人',
			},
			{
				team: '队4',
				hosts: '演讲人',
			},
			{
				team: '队5',
				hosts: '演讲人',
			},
		],
	},
	{
		index: 4,
		img: '..',
		topic: '主题4',
		guests: '嘉宾4',
		introduction: '简介4',
		achievements: [
			{
				team: '队1',
				hosts: '演讲人',
			},
			{
				team: '队2',
				hosts: '演讲人',
			},
			{
				team: '队3',
				hosts: '演讲人',
			},
			{
				team: '队4',
				hosts: '演讲人',
			},
			{
				team: '队5',
				hosts: '演讲人',
			},
		],
	},
]

export default function index(props: IProps) {
	const { dataIndex } = props
	const { img, guests, topic, introduction, achievements } = data[dataIndex]
	return (
		<div className="nowContent">
			<img src={img} alt="" />
			<div className="info">
				<p>{topic}</p>
				<p>{guests}</p>
				<p>{introduction}</p>
			</div>
			<ul className="exhibition">
				<li>团队成果展</li>
				{achievements.map(e => (
					<li key={e.team}>
						<p>{e.team}</p>
						<p>{e.hosts}</p>
					</li>
				))}
			</ul>
		</div>
	)
}
