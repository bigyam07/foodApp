import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display'>
            <h2>Top dishes near you (<span className="filter-food-name">{category}</span>)</h2>
            <div className="food-display-list">
                {food_list.map((items, index) => {
                    if (category == "All" || category == items.category) {
                        return (
                            <FoodItem key={index} id={items.id} name={items.name} price={items.price} desc={items.description} image={items.image} />
                        );
                    }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay