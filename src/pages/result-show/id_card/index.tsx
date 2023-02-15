import React from 'react'
import './index.less'

export default function index(props: { idx: number }) {
  const { idx } = props;
  const data = [
    {
      name: '红岩网校工作站', content: '重庆邮电大学红岩网校是党委领导下的由学生自己管理的网上思想政治工作阵地。\n自2000年10月成立以来,\n一直以"思想交流的园地、党团宣传的窗口、理论学习的课堂、师生联系的纽带"为建站目标,\n以"团结、奋斗、爱国、奉献"的"红岩精神"为核心,\n "为同学服务"为理念,打造与时俱进的大学生思想政治教育新媒体阵地。\n', result: '掌上重邮、重邮帮'
    },
    {
      name: '南山', content: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', result: 'nnnn、kkk'
    },
    {
      name: '3', content: 'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhxxxxxxxxxxxxxxxxxxxxxxxxx', result: 'nnnn、kkk'
    },
    {
      name: '4', content: 'xxxxxjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjxxxxxxxxxxxxxx', result: 'nnnn、kkk'
    },
    {
      name: '5', content: 'xxxxxxxxxxxxxxxxxxxxxxxuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuxxxxxxxxx', result: 'nnnn、kkk'
    },
    {
      name: '6', content: 'xxxxxuuuxxxxxxxxtttttttttttttttttttttttttttxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', result: 'nnnn、kkk'
    }
  ]

  return (
    <div className='id-card'>
      <span className='id-name'>{data[idx].name}</span>
      <span className='id-introduction'>{data[idx].content}</span>
      <span className='id-result'>代表成果：{data[idx].result}</span>
    </div>
  )
}
