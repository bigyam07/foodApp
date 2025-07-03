import { assets } from '../../assets/frontend_assets/assets.js';
import Login from '../Login/Login.jsx';
import './navigation.css'
import { useState } from 'react';

const Navigation = () => {
    const [menu, setMenu] = useState("home");
    const [menuBarStatus, setMenuBarStatus] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    function handleActiveClass(value) {
        setMenu(value);
    }
    function handleMenuIcon() {
        const menuContainer = document.querySelector(".menu-container");
        if (!menuBarStatus) {
            menuContainer.style.display = "block";
            setMenuBarStatus(true);
        } else {
            menuContainer.style.display = "none";
            setMenuBarStatus(false);
        }
    }

    return (
        <>
            {showLogin ? <Login showLogin={showLogin} setShowLogin={setShowLogin}/> : <></>}
            <div className='sub-nav-bar'></div>
            <div className="nav-bar">
                <img className='company-logo' src={assets.logo}></img>
                <ul className="menu-list">
                    <a href="#"><li onClick={() => handleActiveClass("home")} className={menu == "home" ? "active" : ""}>Home</li></a>
                    <a href="#explore-menu"><li onClick={() => handleActiveClass("menu")} className={menu == "menu" ? "active" : ""}>Menu</li></a>
                    <a href="#mobile-app"><li onClick={() => handleActiveClass("mobile-app")} className={menu == "mobile-app" ? "active" : ""}>Mobile-app</li></a>
                    <a href="#contact"><li onClick={() => handleActiveClass("contact")} className={menu == "contact" ? "active" : ""}>Contact-us</li></a>
                </ul>
                <div className="nav-bar-right">
                    <img src={assets.search_icon} alt=""></img>
                    <div className="nav-bar-search">
                        <img src={assets.basket_icon} alt=""></img>
                        <div className='dot'></div>
                    </div>
                    <button className="sign-in-button" onClick={() => setShowLogin(true)}>Sign in</button>
                    <div className='menu-bar' onClick={handleMenuIcon}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
            <div className='menu-container'>
                <ul className='menu-bar-list'>
                    <a href="#"><li className='menu-bar-list-items'>Home</li></a>
                    <a href="#explore-menu"><li className='menu-bar-list-items'>Menu</li></a>
                    <a href="#mobile-app"><li className='menu-bar-list-items'>Mobile-app</li></a>
                    <a href="#contact"><li className='menu-bar-list-items'>Contact-us</li></a>
                </ul>
            </div>
        </>
    );
}
export default Navigation