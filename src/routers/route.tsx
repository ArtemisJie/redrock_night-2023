import { Navigate } from 'react-router-dom'
import FirstPage from '../pages/first-page'
import RoundTable from '../pages/round-table'
import Introduction from '../pages/introduction'
import SignUp from '../pages/sign-up'
import Summary from '../pages/introduction/components/summary'
import Invitation from '../pages/introduction/components/invitation'
import Replay from '../pages/replay/index'
import Video from '../pages/replay/components/video/index'
import ResultShow from '../pages/result-show'

export default [
  {
    path: 'index',
    element: <FirstPage />,
  },
  {
    path: 'introduction',
    element: <Introduction />,
    children: [
      {
        path: 'summary',
        element: <Summary />,
      },
      {
        path: 'invitation',
        element: <Invitation />,
      },
    ],
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'round-table',
    element: <RoundTable />,
  },
  {
    path: '/',
    element: <Navigate to={'/index'} />,
  },
  {
    path: 'replay',
    element: <Replay />,
    children: [
      {
        path: 'video-play/:title',
        element: <Video />,
      },
    ],
  },
  {
    path: 'result-show',
    element: <ResultShow />,
  },
]
