import styles from './index.module.less'
import { useParams } from 'react-router-dom'


export default () => {
    const { title } = useParams()

    return (
        <div className={styles.container}>
            <video src="blob:https://www.youtube.com/a9c3527d-d197-4f6a-8a47-691098d39fc0" ></video>

        </div>
    )
}
