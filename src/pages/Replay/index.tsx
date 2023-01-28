import { useRoutes, NavLink, Outlet } from 'react-router-dom'
import Routes from '@/routers/route'
import styles from './index.module.less'
export default () => {
  return (
    <div className={styles.container}>
      <NavLink to="video-play/all">to video1</NavLink>
      <Outlet />
    </div>
  )
}
