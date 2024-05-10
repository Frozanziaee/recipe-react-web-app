import { FaLocationDot } from "react-icons/fa6";

export default function FoodRecipe ({meal, handleClick}) {
    return (
        <main>
            <img
                className='image'
                src={meal.strMealThumb}
                alt={meal.strMealThumb}
                onClick={handleClick}
            />

            <h3 className='meal-name'>
                {meal.strMeal}
            </h3>
            <p className="location">  
                <span className='icon'><FaLocationDot /></span>
                <span className="meal-area">{meal.strArea}</span>
            </p> 
        </main>   
    ) 
          
}