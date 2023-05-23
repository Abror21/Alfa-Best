import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';

const Header = () => {
  return (
    <div className="left-0 top-0 right-0 fixed z-[101] backdrop-blur-sm bg-black bg-opacity-5">
      <div>
        <div className='container mx-auto py-3 flex justify-between items-center'>
          <a href="#" className='flex items-center gap-2 text-white font-bold text-lg'>
            <img src={logo} alt="Logo" />
            Alfa Best
          </a>
          <ul className='flex gap-14'>
            <li>
              <Link to="/about" className='text-white text-base'>О компании</Link>
            </li>
            <li>
              <a href="!#" className='text-white text-base'>Карьера</a>
            </li>
            <li>
              <a href="!#" className='text-white text-base'>Закупки</a>
            </li>
            <li>
              <a href="!#" className='text-white text-base'>Сотрудничество </a>
            </li>
            <li>
              <a href="!#" className='text-white text-base'>Контакты</a>
            </li>
            <div className='flex gap-1 text-white'>
              <a href="!#">Ru</a>
              |
              <a href="!#">UZ</a>
            </div>
          </ul>
        </div>
        <div className='border-t border-b'>
          <div className='container mx-auto py-5'>
            <ul className='flex justify-between text-white text-base'>
              <li><a href="!#">Инженерно-техническая эксплуатация</a></li>
              <li><a href="!#">Сервисное и бытовое обслуживание</a></li>
              <li><a href="!#">Корпоративное питание</a></li>
              <li><a href="!#">Транспортные перевозки</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header