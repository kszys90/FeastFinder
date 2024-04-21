import React from "react"
import { getMeals, searchByType } from "../../api/mealsDB/getMeals"
import { MealType } from "../../api/mealsDB/mealType"
import SearchMealResult from "./SearchMealResult"

type SearchResultsType = {
    searchedFor: string | null
    searchedBy: searchByType | false
}

function SearchResults({ searchedFor, searchedBy }: SearchResultsType) {
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState<any>()
    React.useEffect(() => {
        async function fetchMeals() {
            setLoading(true)
            if (searchedFor && searchedBy) {
                const result = await getMeals(searchedFor, searchedBy)
                setLoading(false)
                setData(result.meals)
            }
        }
        fetchMeals()
    }, [searchedFor, searchedBy])


    return (
        <>
            {loading ?
                <p>loading</p>
                :
                <>
                    {data && data.length > 0 ?
                        data.map((meal: MealType) =>
                            (<SearchMealResult key={meal.idMeal} meal={meal} />)
                        ) :
                        <p>Nothing found</p>
                    }
                </>
            }

        </>
    )
}

export default SearchResults