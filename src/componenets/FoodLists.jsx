import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import FoodRecipe from "./FoodRecipe";

export default function FoodLists (){
  const [foodName, setFoodName] = useState("chicken");
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data.meals);
      });
  }, []);

  function handleChange(e) {
    setFoodName(e.target.value);
  }

  console.log(foodName);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodList(data.meals);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button>
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="Find a recipe"
          name="food"
          onChange={handleChange}
        />
      </form>
      <div className="search-result">
        {foodList.map((meal) => (
          <FoodRecipe meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </div>
  );
}
    
         
          
     