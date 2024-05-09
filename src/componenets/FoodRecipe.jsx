
export default function FoodRecipe ({meal}){
    return (
            <main>
                <img
                    className='image'
                    src={meal.strMealThumb}
                    alt={meal.strMealThumb}
                />

                <div className='meal'>
                    <h2 className='meal-name'>
                        {meal.strMeal}
                    </h2>

                    <p>
                    <span className='meal-location-ican'>
                     </span>
                        {meal.strArea}
                    </p>
                </div>
            </main>
    ) 
          
}