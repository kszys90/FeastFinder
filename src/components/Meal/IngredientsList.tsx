import React from 'react'
import { MealType } from '../../api/mealsDB/mealType'


type IngredientType = {
    ingredient: string
    measure: string
}

export default function IngredientsList({ data }: { data: MealType }) {
    const ingredients = data && [
        { ingredient: data.strIngredient1, measure: data.strMeasure1 },
        { ingredient: data.strIngredient2, measure: data.strMeasure2 },
        { ingredient: data.strIngredient3, measure: data.strMeasure3 },
        { ingredient: data.strIngredient4, measure: data.strMeasure4 },
        { ingredient: data.strIngredient5, measure: data.strMeasure5 },
        { ingredient: data.strIngredient6, measure: data.strMeasure6 },
        { ingredient: data.strIngredient7, measure: data.strMeasure7 },
        { ingredient: data.strIngredient8, measure: data.strMeasure8 },
        { ingredient: data.strIngredient9, measure: data.strMeasure9 },
        { ingredient: data.strIngredient1, measure: data.strMeasure1 },
        { ingredient: data.strIngredient11, measure: data.strMeasure11 },
        { ingredient: data.strIngredient12, measure: data.strMeasure12 },
        { ingredient: data.strIngredient13, measure: data.strMeasure13 },
        { ingredient: data.strIngredient14, measure: data.strMeasure14 },
        { ingredient: data.strIngredient15, measure: data.strMeasure15 },
        { ingredient: data.strIngredient16, measure: data.strMeasure16 },
        { ingredient: data.strIngredient17, measure: data.strMeasure17 },
        { ingredient: data.strIngredient18, measure: data.strMeasure18 },
        { ingredient: data.strIngredient19, measure: data.strMeasure19 },
        { ingredient: data.strIngredient20, measure: data.strMeasure20 }
    ]
    return (
        <>
            {ingredients ?
                ingredients.map((ing, index) => {
                    <li>
                        {ing.ingredient}
                    </li>
                }
                ) :
                null
            }
        </>
    )
}
