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
      <div className='videoPlayer'>
        <video src="../../../../assets/video/demoVideo.mp4"></video>
      </div>
    </div>
  )
}
