import { Navigate } from 'react-router-dom'
import FirstPage from '../pages/first_page'
import MainPage from '../pages/main_page'
import Introduction from '../pages/introduction'
import SignUp from '../pages/sign_up'
import Summary from '../pages/introduction/components/summary'
import Invitation from '../pages/introduction/components/invitation'
import Replay from '../pages/replay/index'
import Video from '../pages/replay/components/video/index'

const introductionChild = [
  {
    path: 'summary',
    element: <Summary />,
  },
  {
    path: 'invitation',
    element: <Invitation />,
  },
]

export default [
  {
    path: 'index',
    element: <Replay />,
  },
  {
    path: 'introduction',
    element: <Introduction />,
    children: introductionChild,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'main',
    element: <MainPage />,
  },
  {
    path: '/',
    element: <Navigate to={'/index'} />,
  },
  {
    path: '/replay',
    element: <Replay />,
    children: [
      {
        path: 'video-play/:title',
        element: <Video />,
      },
    ],
  },
]
