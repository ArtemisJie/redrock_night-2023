import { Navigate } from 'react-router-dom'
import FirstPage from '../pages/first_page'
import MainPage from '../pages/main_page'
import Introduction from '../pages/introduction'
import SignUp from '../pages/sign_up'
import Summary from '../pages/introduction/components/summary'
import Invitation from '../pages/introduction/components/invitation'

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
		element: <FirstPage />,
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
]
