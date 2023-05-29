import { NavLink } from "react-router-dom"
import classes from './index.module.css'
type Props = {
    title: string;
    link: string;
    style?: string;
}
const MenuItem = ({title, link, style='text-white'}:Props) => {
    return (
        <li className={classes.item}>
            <NavLink
                to={link}
                className={({isActive}) => `${isActive ? 'text-[#28C79E]':style} text-base bg-transparent block relative py-[2px] sm:py-[6px] lg:py-[12px] xl:py-[15px] 2xl:py-[18px] font-bold lg:font-normal`}
            >
                {title}
            </NavLink>
        </li>
    )
}

export default MenuItem