import { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import 'video.js/dist/video-js.css';
import './index.less'
import videojs from 'video.js'
import video from '/video/demoVideo.mp4'

export default () => {
  const { title } = useParams()
  const videoRef = useRef(null);
  const playerRef = useRef<any>(null);
  const showRef = useRef<any>(null)
  const qingxiduRef = useRef<any>(null)

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

          { name: 'currentTimeDisplay' },
          { name: 'durationDisplay' },
          { name: 'progressControl' },

          {
            name: 'playbackRateMenuButton',
            'playbackRates': [0.5, 1, 1.5, 2, 2.5]
          },
          {
            name: 'volumePanel',
            inline: false,
          },
          {
            name: 'FullscreenToggle'
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
    const controlBar = document.getElementsByClassName('vjs-control-bar')[0];

    (showRef.current as HTMLDivElement).addEventListener('mouseover', () => {
      (qingxiduRef.current as HTMLSpanElement).style.transform = 'translateY(0)'
    });
    (showRef.current as HTMLDivElement).addEventListener('mouseout', () => {
      (qingxiduRef.current as HTMLSpanElement).style.transform = 'translateY(7.3vw)'
    });
    (qingxiduRef.current as HTMLSpanElement).addEventListener('mousemove', (e) => {
      //console.log(controlBar.className += 'vjs-control-bar-show');
    })

    init();
  }, [])

  return (
    <div className='videoPlayer' ref={showRef}>
      <span className='qingxidu' ref={qingxiduRef}>高清</span>
      <video
        style={{
          width: '58.8194vw',
          height: '42.3351vw'
        }}
        ref={videoRef}
        className='vjs-matrix video-js vjs-big-play-centered '
      >
        <source src={video}></source>
      </video>
    </div >
  )
}



