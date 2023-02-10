import './index.less'
import { useParams } from 'react-router-dom'

export default () => {
  const { title } = useParams()

  return (
    <div className="videoContainer">
      <div className='meetingTitle'>
        <div className='meetingTitleBar'></div>
        <div className='meetingTitleText'>会议标题</div>
        <div className='meetingTitleParagh'>
          <p>
            会议描述会议描述会议一些会议描述一些会议描述一些会议描述会议描述：会议描述会议描述会议一些会议描述一些会议描述一些会议描述会议描述：会议描述会议描述会议一些会议描述一些会议描述一些会议描述会议描述：会议描述会议描述会议一些会议描述一些会议描
          </p>
        </div>
      </div>
      <video src="blob:https://www.youtube.com/a9c3527d-d197-4f6a-8a47-691098d39fc0"></video>
    </div>
  )
}
