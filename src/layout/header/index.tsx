import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png';
import MenuItem from './menu-item';

const Header = () => {
  return (
    <div className="left-0 top-0 right-0 fixed z-[101] backdrop-blur-sm bg-black bg-opacity-10">
      <div>
        <div className='container mx-auto px-[15px] flex justify-between items-center py-2'>
          <Link to="/" className='flex items-center gap-2 text-white font-bold text-lg'>
            <img src={logo} alt="Logo" />
            Alfa Best
          </Link>
          <ul className='flex gap-14 items-center'>
            <MenuItem title='О компании' link='/about' />
            <MenuItem title='Карьера' link='/career' />
            <MenuItem title='Закупки' link='/purchase' />
            <MenuItem title='Сотрудничество' link='/cooperation' />
            <MenuItem title='Контакты' link='/contact' />
            <div className='flex gap-1 text-white'>
              <a href="!#">Ru</a>
              |
              <a href="!#">UZ</a>
            </div>
          </ul>
        </div>
        <div className='border-t border-b'>
          <div className='container mx-auto px-[15px]'>
            <ul className='flex justify-between text-white text-base'>
              <MenuItem title='Инженерно-техническая эксплуатация' link='/engineering' />
              <MenuItem title='Сервисное и бытовое обслуживание' link='/service' />
              <MenuItem title='Корпоративное питание' link='/eating' />
              <MenuItem title='Транспортные перевозки' link='/transportation' />
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header