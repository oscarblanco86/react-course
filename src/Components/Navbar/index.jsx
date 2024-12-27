import { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    // let activeStyle = {
    //     textDecoration: 'underline'
    // }
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink 
                        to='/'
                        onClick={() => context.setSearchByCat()}
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/all'
                    onClick={() => context.setSearchByCat('all')}

                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    onClick={() => context.setSearchByCat('clothes')}
                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Clothes    
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={() => context.setSearchByCat('electronics')}
                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Electronics    
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    onClick={() => context.setSearchByCat('furnitures')}
                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures    
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    onClick={() => context.setSearchByCat('toys')}
                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Toys    
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    // onClick={() => context.setSearchByCat('others')}
                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Others    
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    oscar@mail.com
                </li>
                <li>
                    <NavLink 
                    to='/my-orders'
                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/my-account'
                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        My Account    
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/sign-in'
                    className={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }>
                        Sign In    
                    </NavLink>
                </li>
                <li className='flex'>
                    <ShoppingBagIcon className='h-6 w-6'></ShoppingBagIcon>
                    <div>
                        {context.count}    
                    </div> 
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;