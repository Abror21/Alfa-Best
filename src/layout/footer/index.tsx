import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from '../../assets/icons/logo.png'
import MenuItem from "./menu-item";
import developed from '../../assets/icons/developed.png'

const Footer = () => {
  const [height, setHeight] = useState<boolean>(false);

  return (
    <div className="bg-[#1B2330] pt-[30px] sm:pt-[40px] lg:pt-[60px] pb-[20px] md:pb-[30px] mt-[30px] lg:mt-[60px]">
      <div className="container mx-auto px-[15px]">
        <div className="flex flex-col md:flex-row md:gap-12 lg:gap-20 mb-[30px] md:mb-[40px] lg:mb-[60px] flex-wrap">
          <Link to="/" className='flex items-center self-start gap-2 text-white font-bold text-base md:text-lg w-full lg:w-auto justify-center mb-5'>
            <img src={logo} alt="Logo" className="w-8 md:w-auto" />
            Alfa Best
          </Link>
          <ul className="flex flex-col gap-3 sm:gap-4 mb-5">
            <MenuItem title="Карьера" link="/career" />
            <MenuItem title="Закупки" link="/purchase" />
            <MenuItem title="О компании" link="/about" />
            <MenuItem title="Контакты" link="/contact" />
            <MenuItem title="Сотрудничество" link="/cooperation" />
          </ul>
          <div className='pb-2 md:hidden flex justify-between cursor-pointer text-white text-sm md:text-base' onClick={() => setHeight(prev => !prev)}>
            <span className=''>Услуги</span>
            <button className={`transition-all ${height?'rotate-0':'rotate-45'}`}>&#x2715;</button>
          </div>
          <ul className={`flex flex-col gap-3 transition-all sm:gap-4 ${height ? 'h-[115px] sm:h-[130px]' : 'h-0'} md:h-auto overflow-hidden`}>
            <MenuItem style='text-[#808b9b] md:text-white' title='Сервисное и бытовое обслуживание' link='/service' />
            <MenuItem style='text-[#808b9b] md:text-white' title='Инженерно-техническая эксплуатация' link='/engineering' />
            <MenuItem style='text-[#808b9b] md:text-white' title='Корпоративное питание' link='/eating' />
            <MenuItem style='text-[#808b9b] md:text-white' title='Транспортные перевозки' link='/transportation' />
          </ul>
          <div className="lg:ml-auto mt-3 md:mt-0">
            <p className="text-white text-base mb-3 md:mb-5">Подписывайтесь на нас</p>
            <div className="flex items-center gap-5">
              <a href="https://t.me" className="group">
                <svg className="fill-white group-hover:fill-[#28C79E]" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.64 6.8C14.49 8.38 13.84 12.22 13.51 13.99C13.37 14.74 13.09 14.99 12.83 15.02C12.25 15.07 11.81 14.64 11.25 14.27C10.37 13.69 9.87 13.33 9.02 12.77C8.03 12.12 8.67 11.76 9.24 11.18C9.39 11.03 11.95 8.7 12 8.49C12.0069 8.45819 12.006 8.42517 11.9973 8.3938C11.9886 8.36244 11.9724 8.33367 11.95 8.31C11.89 8.26 11.81 8.28 11.74 8.29C11.65 8.31 10.25 9.24 7.52 11.08C7.12 11.35 6.76 11.49 6.44 11.48C6.08 11.47 5.4 11.28 4.89 11.11C4.26 10.91 3.77 10.8 3.81 10.45C3.83 10.27 4.08 10.09 4.55 9.9C7.47 8.63 9.41 7.79 10.38 7.39C13.16 6.23 13.73 6.03 14.11 6.03C14.19 6.03 14.38 6.05 14.5 6.15C14.6 6.23 14.63 6.34 14.64 6.42C14.63 6.48 14.65 6.66 14.64 6.8Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com" className="group">
                <svg className="fill-white group-hover:fill-[#28C79E]" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                </svg>
              </a>
              <a href="https://www.facebook.com" className="group">
                <svg className="fill-white group-hover:fill-[#28C79E]" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-3 sm:flex-row justify-between border-t border-[rgba(255,255,255,0.3)] pt-4">
          <div><img src={developed} alt="" /></div>
          <div className="flex gap-5">
            <MenuItem title="Помощь" link="/contact" />
            <MenuItem title="Стань частью команды" link="/career" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Footer;