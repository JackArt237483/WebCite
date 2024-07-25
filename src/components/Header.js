import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return(
   <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='text-[25px] leading-[20px] text-white'>
            <p>Добро пожаловать на мой сайт!</p>
            <p>Pад видеть вас здесь.</p>
          </div>
          <Link 
          ctiveClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          to="contact"
          >
          <button className='btn btn-sm'>Работа со мной</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
