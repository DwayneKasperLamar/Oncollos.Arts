import {hamburger } from '../assets/icons'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'

const Nav = () => {
  return ( 
        <header className='padding-x py-8 absolute z-10 w-full' >
          <nav className='flex justify-between items-center max-container'>
            <a href="/">
              <img src={headerLogo}
              alt="Logo" 
              width={150}
              height={45}
              />
            </a>

            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
              
            {navLinks.map((item)=>(
              <li key={item.label}>
              <a href={item.href}
                  className="text-montserrat leading-normal text-lg text-slate-gray">
                    {item.label}
              </a>
              </li>
            ))}
         </ul>
         <div className='hidden max-lg:block'>
          {/* add logic to hambuger menu to show menu */}
          <img src={hamburger}
           alt="Hambuger"
           width={25}
           height={25} />
         </div>
      
          </nav>
        </header>
  )
}

export default Nav