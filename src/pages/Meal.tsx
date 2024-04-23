import { useParams } from 'react-router-dom'
import React from 'react'
import { MealType } from '../api/mealsDB/mealType';
import { getMeals } from '../api/mealsDB/getMeals';
import IngredientsList from '../components/Meal/IngredientsList';


export default function Meal() {
    const { mealId } = useParams();
    const [meal, setMeal] = React.useState<MealType | null>(null)
    const [isLoading, setIsLoading] = React.useState(false)
    React.useEffect(() => {
        fetchData();
    }, [mealId])
    const fetchData = async () => {
        setIsLoading(true)
        const data = mealId && await getMeals(mealId, 'id')
        console.log(data)
        if (data && data.meals) {
            setMeal(data.meals[0])
        }
        setIsLoading(false)
    };

    return (
        <div className='meal-container'>
            {isLoading ? (
                <p>Loading...</p>
            ) : meal ?
                (
                    <>
                        <h3> {meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <ul>
                            <IngredientsList data={meal} />
                        </ul>
                    </>
                )
                :
                <p>nothing found</p>


            }

        </div >
    )
}

