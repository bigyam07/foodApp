import { useContext, useState } from 'react'
import { assets } from '../../assets/frontend_assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({ id, name, price, desc, image }) => {
    const [itemCount, setItemCount] = useState(0);
    return (
        <div className='food-item'>
            <div className="food-item-image-container">
                <img className='food-item-image' src={image} alt='' />
                {
                    !itemCount ? <img className="item-count" onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_white} /> :
                        <div className='food-item-counter'>
                            <img onClick={() => setItemCount(prev => prev - 1)} src={assets.remove_icon_red} />
                            <p className='food-item-counter-text'>{itemCount}</p>
                            {(itemCount == 8)?
                                <p className="max-text">Max</p>:
                                <img onClick={() => setItemCount(prev => prev + 1)} src={assets.add_icon_green} />
                            }
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{desc}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    )
}

export default FoodItem