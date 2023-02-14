import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './index.less'
import video from '../../../../assets/video/demoVideo.mp4'
export default () => {
  const { title } = useParams()
  const videoRef = useRef(null);
  const playerRef = useRef<any>(null);
  const [option, setOptopm] = useState({});

  const onReadyPlay = (palyer) => {
    videoRef.current = palyer
    palyer.play();
  }

  const init = () => {
    const _option = {
      controls: true,
      autoplay: false,
      loop: false,
      notSupportedMessage: '此视频暂无法播放，请稍后再试',
      playbackRates: [0.5, 1.0, 1.5, 2.0],
      controlBar: {
        children: [
          { name: 'playToggle' },
          {
            name: 'volumePanel',
            inline: false,
          },
          { name: 'currentTimeDisplay' },
          { name: 'durationDisplay' },
          { name: 'progressControl' },
          {
            name: 'FullscreenToggle'
          },
          {
            name: 'playbackRateMenuButton',
            'playbackRates': [0.5, 1, 1.5, 2, 2.5]
          },
        ]
      }

    }
    setOptopm(_option);
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, _option, () => {
        let a = null
      });
      onReadyPlay(player)
    }
  }

  useEffect(() => {
    init();
  }, [])

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
        <video
          style={{
            width: '58.8194vw',
            height: '42.3351vw'
          }}
          ref={videoRef}
          className='video-js vjs-big-play-centered vjs-matrix'
          data-setup='{}'
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </div>
    </div >
  )
}
