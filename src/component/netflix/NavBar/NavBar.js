import React,{useState,useEffect} from 'react'
import "./navbar.css"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {NavbarData} from '../NavbarData'
import {Link} from "react-router-dom"
import { IconContext } from 'react-icons';

function NavBar() {
        const [show, handleShow]= useState(false)
        
         useEffect(() => {
             window.addEventListener('scroll',()=>{
                 if(window.scrollY>100){
                     handleShow(true)
                 }else{
                     handleShow(false)
                 }
                })
             return()=>{
                 window.removeEventListener('scroll')
             }
         }, [])


        const [sidebar, setSidebar] = useState(false);

        const showSidebar = () => setSidebar(!sidebar);


    return (
        <>

        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                  {item.icon}
                    <span>{item.title}</span>
                  </Link>|{" "}
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
        <div className={`navbar ${show && "nav_black"}`}>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo" />
            
            <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar" />
        </div>
        </>
    )
}

export default NavBar
