import { NavLink } from "react-router-dom"
import classes from './index.module.css'

const MenuItem = ({title, link}:{title: string, link: string}) => {
    return (
        <li className={classes.item}>
            <NavLink to={link} className={({isActive}) => `${isActive ? 'text-[#28C79E]':'text-white'} text-base bg-transparent`}>
                {title}
            </NavLink>
        </li>
    )
}

export default MenuItem