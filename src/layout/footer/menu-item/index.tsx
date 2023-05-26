import { NavLink } from "react-router-dom"

type Props = {
    title: string;
    link: string;
    style?: string;
}

const MenuItem = ({ title, link, style }: Props) => {
    return (
        <li>
            <NavLink
                to={link}
                className={({ isActive }) => ` ${isActive ? 'text-[#28C79E]' : (style ? style : 'text-white')} hover:text-[#28C79E] text-sm md:text-base block bg-transparent transition`}
            >
                {title}
            </NavLink>
        </li>
    )
}

export default MenuItem;