import React from 'react'
import { getMealById } from '../../api/mealsDB/getMealById'
import { MealType } from '../../api/mealsDB/mealType'
import MostLikedElement from './MostLikedElement'

type mealListItem = { id: string, fetched: boolean }

const mealsList = [{
    id: '52963',
    fetched: false
},
{
    id: '52773',
    fetched: false
},
{
    id: '52951',
    fetched: false
}]

export type HoverStateType = {
    isHover: boolean,
    target: boolean[]
}

export default function MostLikedArticle() {
    const [hover, setHover] = React.useState<HoverStateType>({
        isHover: false,
        target: [false, false, false]
    })

    const [mostLikedMeals, setMostLikedMeals] = React.useState<MealType[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        function isMealType(object: any): object is MealType {
            return true
        }

        async function getMeal(meal: mealListItem) {
            if (meal.fetched === true) { return }
            try {
                const data = await getMealById(meal.id)
                if (data.meals && isMealType(data.meals[0])) {
                    setMostLikedMeals(prevState => [...prevState, data.meals[0]])
                }
            }
            catch (error) {
                console.error("Error fetching meal:", error)
            }
        }
        const fetchMeals = () => {
            try {
                mealsList.map(meal => getMeal(meal))

            } catch (error) {
                console.error("Error fetching meals:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchMeals();
    }, [])
    const handleHover = (i: number, action: 'enter' | 'leave') => {
        setHover(prevState => ({
            ...prevState,
            isHover: action === 'enter' ? true : false,
            target: prevState.target.map((item, index) => index === i ? action === 'enter' ? true : false : item)
        }))
    }

    return (
        <>
            {isLoading ?
                <div>Loading...</div>
                :
                mostLikedMeals.length >= 3 ?
                    (
                        <div className="most-liked__container">
                            {mostLikedMeals.map((meal, index) => (
                                // prod condition - prevent duplicating by react strict mode
                                index < 3 &&
                                <MostLikedElement key={`meal-${index}`} data={meal} target={index} handleHover={handleHover} hover={hover} />
                            ))}
                        </div >
                    )
                    : null
            }
        </>
    )
}
