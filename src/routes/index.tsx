import Replay from '../pages/Replay/index'
import Video from '../pages/Video/index'
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