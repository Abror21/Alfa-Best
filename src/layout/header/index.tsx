import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './index.module.css';
import MenuItem from './menu-item';
import logo from '../../assets/icons/logo.png';
import menu from '../../assets/icons/menu.png';
import axios from 'axios';

const Header = () => {

  const [topMenuList, setTopMenuList] = useState([]);
  const [bottomMenuList, setBottomMenuList] = useState([]);

  const { pathname } = useLocation();

  const [scrollY, setScrollY] = useState<number>(0)
  const [height, setHeight] = useState<boolean>(false)
  const [menuVisible, setMenuVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const fetchHomeMenu = async () => {
    await axios.get('https://alfabest.napaautomotive.uz/api/home_content', {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "ru"
      }
    })
    .then(res => setTopMenuList(res.data?.datas)).catch(
      err => console.log('Error', err)
    )

    await axios.get('https://alfabest.napaautomotive.uz/api/home_menu', {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "ru"
      }
    })
    .then(res => setBottomMenuList(res.data?.datas)).catch(
      err => console.log('Error', err)
    )
  }

  useEffect(() => {
    fetchHomeMenu()
  }, [])

  useEffect(() => {
    setMenuVisible(false)
  }, [pathname])

  const isHome = pathname === '/';
  const bgColor = isHome ? (scrollY > 0 ? 'bg-white' : 'bg-white lg:bg-black lg:bg-opacity-10') : 'bg-white';
  const linkColor = isHome ? (scrollY > 0 ? 'lg:text-[#1B2330]' : 'text-[#1B2330] lg:text-white') : 'text-[#1B2330]';

  return (
    <>
      <div className={`transition-all ${scrollY > 0 ? 'shadow-lg' : ''} left-0 top-0 right-0 ${isHome ? 'fixed' : 'sticky'} z-[97] lg:backdrop-blur-sm ${bgColor}`}>
        <div className='container mx-auto px-[15px] flex lg:hidden items-center py-[15px]'>
          <Link to="/" className={`flex items-center gap-2 ${linkColor} font-bold text-base md:text-lg lg:text-xl`}>
            <img className='w-6 md:w-8 xl:w-10' src={logo} alt="Logo" />
            Alfa Best
          </Link>
          <div className={`flex gap-1 ${linkColor} text-xs sm:text-sm md:text-base ml-auto lg:ml-0 mr-5 lg:mr-0`}>
            <a href="!#">UZ</a>
            |
            <a href="!#">RU</a>
          </div>
          <button
            className='flex lg:hidden justify-center items-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-[#28C79E] p-[11px] sm:p-[12px]'
            onClick={() => setMenuVisible(true)}
          >
            <img src={menu} alt="menu" />
          </button>
        </div>

        <div className={`${classes['bg-wrapper']} ${menuVisible ? classes.active : ''}  z-[98]`} onClick={() => setMenuVisible(false)}></div>

        <div
          className={`fixed z-[99] top-0 left-0 bottom-0 lg:static bg-white lg:bg-transparent py-6 sm:py-10 px-4 sm:px-10 lg:p-0 overflow-y-auto transition-all ${menuVisible ? '' : '-translate-x-full'} lg:translate-x-0`}
        >
          <div className='lg:flex container mx-auto lg:px-[15px] lg:justify-between items-center py-2 top-0 bottom-0 left-0 bg-white lg:bg-transparent z-[101]'>
            <div className='flex justify-between items-center mb-3'>
              <Link to="/" className={`mb-3 lg:mb-0 flex items-center gap-2 ${linkColor} font-black lg:font-bold text-lg md:text-xl`}>
                <img className='w-6 md:w-8 xl:w-10' src={logo} alt="Logo" />
                Alfa Best
              </Link>
              <button
                className='lg:hidden w-7 h-7 rounded-full text-white bg-[#28C79E]'
                onClick={() => setMenuVisible(false)}
              >&#x2715;</button>
            </div>
            <ul className='flex flex-col lg:flex-row gap-3 lg:gap-14 lg:items-center pl-2 sm:pl-3 lg:pl-0'>
              {
                bottomMenuList.map(menu => <MenuItem key={menu['id']} style={`${linkColor}`} title={menu['title_ru']} link={`/${menu['link']}`} />)
              }
              <li className={`hidden lg:flex gap-1 ${linkColor} text-xs sm:text-sm md:text-base`}>
                <a href="!#">UZ</a>
                |
                <a href="!#">RU</a>
              </li>
            </ul>
          </div>
          <div className={`pb-2 lg:hidden flex justify-between cursor-pointer ${linkColor} text-base font-bold lg:text-base pl-2 sm:pl-3`} onClick={() => setHeight(prev => !prev)}>
            <span className=''>Услуги</span>
            <button className={`transition-all ${height ? 'rotate-0' : 'rotate-45'}`}>&#x2715;</button>
          </div>
          <div className={`lg:border-t lg:border-b transition-all ${height ? classes['header-links'] : 'h-0 lg:h-auto'} overflow-hidden`}>
            <div className='container mx-auto lg:px-[15px]'>
              <ul className='flex flex-col lg:flex-row gap-3 lg:gap-0 flex-wrap justify-between text-base pl-2 sm:pl-3 lg:pl-0'>
                {
                  topMenuList.map(menu => <MenuItem key={menu['id']} style={`${linkColor}`} title={menu['text_ru']} link={`/${menu['home_service_link']}`} />)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;