import './ExploreMenu.css'
import {menu_list} from '../../assets/frontend_assets/assets.js'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h2>Explore Our Menu</h2>
      <p className='explore-menu-text'>Choose from a diverse new featuring a detectable array of dishes. Our mission is to satisfy your craving and elevate your dinning experience, one deliciout meal at a time</p>
      <div className="explore-menu-list">
          {menu_list.map((items, index) => {
            return (
              <div onClick={() => setCategory(prev => prev === items.menu_name ? "All" : items.menu_name)} key={index} className="explore-menu-list-items">
                  <img className={category == items.menu_name? "active": ""} src={items.menu_image} alt=''/>
                  <p>{items.menu_name}</p>
              </div>
            );
          })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu