import { MealType } from '../../api/mealsDB/mealType'
import Button from '../UI/Button'
import { MdOutlineStarOutline } from "react-icons/md";

export default function SearchMealResult({ meal }: { meal: MealType }) {
    return (
        <div className='search-page__result-container'>
            <div className='search-page__result-img--wrapper'>
                <img
                    className='search-page__result-img'
                    src={meal.strMealThumb}
                    alt={meal.strMeal} />
            </div>
            <div
                className='search-page__result-text--container'
            >
                <h4 className='search-page__result-title'>{meal.strMeal}</h4>
                <div>
                    <div className='search-page__result-desc--container'>
                        <p className='search-page__result-desc--name'>category:</p>
                        <p className='search-page__result-desc--name'>area:</p>
                    </div>
                    <div className='search-page__result-desc--container'>
                        <p className='search-page__result-desc'>{meal.strCategory}</p>
                        <p className='search-page__result-desc'>{meal.strArea}</p>
                    </div>
                </div>
                <div className='search-page__result-button--wrapper'>
                    <Button>Show more</Button>
                </div>
                <div className='search-page__like-button'>
                    <MdOutlineStarOutline />
                </div>
            </div>
        </div>
    )
}
