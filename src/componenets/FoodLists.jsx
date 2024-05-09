import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import FoodRecipe from "./FoodRecipe";

export default function FoodLists (){
    const [formData, setFormData] = useState([])
     const [foodName, setFoodName] = useState([])

    useEffect(() => {
        console.log("effect rendered")
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
            .then(res => res.json())
            .then(data => setFoodName(data.meals))
    }, [])

    function handleChange(e){
       setFormData(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setFoodName(foodName)

        console.log(foodName)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <button><FaSearch /></button>
                <input 
                    type="text"
                    placeholder="Find a recipe" 
                    name="recipe"
                    onChange={handleChange}
                />
            </form>
            <div className="search-result">
                {foodName.map(meal => {
                    <FoodRecipe 
                        meal={meal}
                        key={meal.idMeal}
                    />
                })
                }
                
            </div>
          
        </div>
    )
}
    
         
          
     