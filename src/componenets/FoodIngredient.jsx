import { BiSolidCategory } from "react-icons/bi";
import { FaWindowClose } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

export default function FoodIngredient ({meal, handleClose}){

    return (
        <div className ="description">
            <div>
                <button className="close-btn" onClick={handleClose}><FaWindowClose /></button>
            <div className="list">
                <h2 className="desc-title">{meal.strMeal}</h2>
                <img
                    className='desc-image'
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                />

                <div className="meal-description">
                        <p>
                            <span className="icon desc-icon"><BiSolidCategory /></span>
                            <span className="meal-desc">{meal.strCategory}</span>
                        </p>

                        <p>
                            <span className="icon desc-icon"><FaLocationDot /></span>
                            <span className="meal-desc">{meal.strArea}</span>
                        </p>

                        <a href={meal.strYoutube} target="_blank" className="meal-desc link">
                            <span className="icon youtube desc-icon"><FaYoutube /></span>
                                Watch on YouTube
                        </a>
                        
                    
                </div>
            </div>

            <div className="instraction">
                <h3 className="instraction-title">Instructions</h3>
                <p className="instraction-text">{meal.strInstructions}</p>
            </div>

            <div className="ingredient">
                <h3 className="instraction-title">Ingredients</h3>
                <ul>
                    <li>
                        <span className="ing-ingredient">{meal.strIngredient1}</span>
                        <span className="ing-measure">{meal.strMeasure1}</span>
                    </li>
                    <li>
                        <span className="ing-ingredient">{meal.strIngredient2}</span>
                        <span className="ing-measure">{meal.strMeasure2}</span>
                    </li>
                    <li>
                        <span className="ing-ingredient">{meal.strIngredient3}</span>
                        <span className="ing-measure">{meal.strMeasure3}</span>
                    </li>
                    <li>
                        <span className="ing-ingredient">{meal.strIngredient4}</span>
                        <span className="ing-measure">{meal.strMeasure4}</span>
                    </li>
                    <li>
                        <span className="ing-ingredient">{meal.strIngredient5}</span>
                        <span className="ing-measure">{meal.strMeasure5}</span>
                    </li>
                    <li>
                        <span className="ing-ingredient">{meal.strIngredient6}</span>
                        <span className="ing-measure">{meal.strMeasure6}</span>
                    </li>
                    <li>
                        <span className="ing-ingredient">{meal.strIngredient7}</span>
                        <span className="ing-measure">{meal.strMeasure7}</span>
                    </li>
                    <li>
                        <span className="ing-ingredient">{meal.strIngredient8}</span>
                        <span className="ing-measure">{meal.strMeasure8}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}