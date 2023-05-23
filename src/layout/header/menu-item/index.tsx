import { Link } from "react-router-dom"
import classes from './index.module.css'

const MenuItem = ({title, link}:{title: string, link: string}) => {
    return (
        <li className={classes.item}>
            <Link to={link} className='text-white text-base'>{title}</Link>
        </li>
    )
}

export default MenuItem