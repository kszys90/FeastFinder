import { MealType } from "./mealType"


const by = {
    name: 'search.php?s=',
    firstLetter: 'search.php?f=',
    ingredient: 'filter.php?i=',
    category: 'filter.php?c=',
    area: 'filter.php?a=',
    id: 'lookup.php?i='
}
export type searchByType = 'name' | 'firstLetter' | 'ingredient' | 'category' | 'area' | 'id'

export async function getMeals(searchedPhrase: string, searchedBy: searchByType) {
    const url = `https://www.themealdb.com/api/json/v1/1/${by[searchedBy]}${searchedPhrase}`
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