import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets.js'
const Footer = () => {
  return (
    <>
      <div className='footer-container' id='contact'>
        <div className="footer-content-left">
          <img id='company-logo' src={assets.logo} />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quam animi illum ex possimus eum consequatur dolor. Voluptatem facere voluptas voluptate atque tempore.</p>
          <div className='footer-icons'>
            <a href="https://www.facebook.com/BIGYAM.KARMACHARYA" target='_blank'><img src={assets.facebook_icon} /></a>
            <a href="https://www.linkedin.com/in/bigyam-karmacharya-7274a036a/" target='_blank'><img src={assets.linkedin_icon} /></a>
            <a href="https://x.com/" target='_blank'><img src={assets.twitter_icon} /></a>
          </div>
        </div>
        <div className="footer-content-middle">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+977 6610666</li>
            <li>bigyamkarmacharya@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="sub-footer">
        <p>Copyright 2025 &copy; Tomato - All Right Reserved.</p>
      </div>
    </>
  )
}

export default Footer