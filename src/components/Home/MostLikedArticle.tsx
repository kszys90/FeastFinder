import React from 'react'
import { getMealById } from '../../api/mealsDB/getMealById'
import { MealType } from '../../api/mealsDB/mealType'

type mealListItem = { id: string, fetched: boolean }

export default function MostLikedArticle() {
    const [hover, setHover] = React.useState({
        isHover: false,
        el1: false,
        el2: false,
        el3: false
    })

    const [mealsList, setMealsList] = React.useState<mealListItem[]>([
        {
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
        },
    ])
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
                    const updatedMeals = mealsList.map(item => {
                        if (item.id === meal.id) {
                            return { ...item, fetched: true }
                        }
                        return item
                    });
                    setMealsList(updatedMeals)
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
                console.log(mostLikedMeals)
                setIsLoading(false);
            }
        }
        fetchMeals();
    }, [])

    return (
        <>
            {isLoading ?
                <div>Loading...</div>
                :
                mostLikedMeals.length >= 3 ?
                    (
                        <div className="most-liked__container">
                            <div className='most-liked__element-1 most-liked__element'
                                onMouseEnter={() => setHover(prevState => ({ ...prevState, isHover: true, el1: true }))}
                                onMouseLeave={() => setHover(prevState => ({ ...prevState, isHover: false, el1: false }))}
                            >
                                <img
                                    className={`most-liked__img ${hover.isHover ? hover.el1 === true ? 'most-liked__element--hover' : 'most-liked__element--not-hover' : ''}`}
                                    src={mostLikedMeals[0].strMealThumb}
                                    alt={mostLikedMeals[0].strMeal}
                                />
                            </div>
                            <div className='most-liked__element-2 most-liked__element'
                                onMouseEnter={() => setHover(prevState => ({ ...prevState, isHover: true, el2: true }))}
                                onMouseLeave={() => setHover(prevState => ({ ...prevState, isHover: false, el2: false }))}
                            >
                                <img
                                    className={`most-liked__img ${hover.isHover ? hover.el2 === true ? 'most-liked__element--hover' : 'most-liked__element--not-hover' : ''}`}
                                    src={mostLikedMeals[1].strMealThumb}
                                    alt={mostLikedMeals[1].strMeal}
                                />
                            </div>
                            <div className='most-liked__element-3 most-liked__element'
                                onMouseEnter={() => setHover(prevState => ({ ...prevState, isHover: true, el3: true }))}
                                onMouseLeave={() => setHover(prevState => ({ ...prevState, isHover: false, el3: false }))}
                            >
                                <img
                                    className={`most-liked__img ${hover.isHover ? hover.el3 === true ? 'most-liked__element--hover' : 'most-liked__element--not-hover' : ''}`}
                                    src={mostLikedMeals[2].strMealThumb}
                                    alt={mostLikedMeals[2].strMeal}
                                />
                            </div>
                        </div >
                    )
                    : null

            }

        </>
    )
}
