import Button from '../UI/Button'
import { MealType } from '../../api/mealsDB/mealType'
import { HoverStateType } from './MostLikedArticle'


type MostLikedElementType = {
    target: number
    handleHover: (i: number, action: 'enter' | 'leave') => void
    data?: MealType
    hover: HoverStateType
}

export default function MostLikedElement({ data, target, handleHover, hover }: MostLikedElementType) {
    return (
        data &&
        <div className={`most-liked__element-${target} most-liked__element`}
            onMouseEnter={() => handleHover(target, 'enter')}
            onMouseLeave={() => handleHover(target, 'leave')}
        >
            <div className='most-liked__img-wrapper'>
                <img
                    className={`most-liked__img ${hover.isHover ? hover.target[target] === true ? 'most-liked__element--hover' : 'most-liked__element--not-hover' : ''}`}
                    src={data.strMealThumb}
                    alt={data.strMeal}
                />
            </div>
            <div className='most-liked__element-info'>
                <p className='most-liked__element-info--title'>{data.strMeal}</p>
                <div className='most-liked__element-info--button-container'>
                    <Button className='button most-liked__element-button'>Read more</Button>
                    <Button className='button most-liked__element-button most-liked__element-button--list' >+ Add to list</Button>
                </div>
            </div>
        </div>
    )
}
