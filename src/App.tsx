import { useRoutes } from 'react-router-dom';
import './App.less'
import routers from './routers/route'

function App() {
    let router = useRoutes(routers);
    return (
        <>
            {router}
        </>
    )
}

export default App
