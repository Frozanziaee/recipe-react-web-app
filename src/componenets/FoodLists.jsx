import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import FoodRecipe from "./FoodRecipe";
import FoodIngredient from "./FoodIngredient";

export default function FoodLists (){
  const [foodName, setFoodName] = useState("chicken");
  const [foodList, setFoodList] = useState([]);
  const [clickMeal, setClickMeal] = useState(null)

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data.meals);
      });
  }, []);

  function handleClick(id) {
    setClickMeal(foodList.find(meal => meal.idMeal === id));
  }
 
  function wrapperClose() {
    setClickMeal(null)
  }

  function handleChange(e) {
    setFoodName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data.meals)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className="search-btn">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="Find a recipe"
          name="food"
          onChange={handleChange}
        />
      </form>

      <div>
        {clickMeal ? (
          <FoodIngredient 
            meal={clickMeal}
            handleClose={wrapperClose}
          />
        ): (
          foodList && (
            <div className="search-result">
              {foodList.map((meal) => (
              <FoodRecipe 
                meal={meal} 
                key={meal.idMeal} 
                handleClick={() => handleClick(meal.idMeal)}
              />
        ))}
            </div>
          )
        )}
        
      </div>
    </div>
  )
}
    
         
          
     