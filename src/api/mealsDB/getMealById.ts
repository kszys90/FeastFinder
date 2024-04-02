import { MealType } from "./mealType"

export async function getMealById(mealID: string) {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    try {
        const response = await fetch(url)
        const data: MealType = await response.json()
        return data
    } catch (err) {
        const error: ErrorType = err
        return error
    }
}

type ErrorType = any