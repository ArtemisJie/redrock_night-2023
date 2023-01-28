import Replay from '../pages/replay/index'
import Video from '../pages/video/index'
const routes = [
    {
        path: '/',
        element: <></>
    },
    {
        path: '/replay',
        element: <Replay />,
        children: [
            {
                path: `video-play/:title`,
                element: <Video />
            }
        ]
    },
]

export default routes