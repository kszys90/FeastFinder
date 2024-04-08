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
    const isHover = () => {
        if (!hover.isHover) {
            return false
        }
        if (!hover.target[target]) {
            return false
        }
        return true
    }
    return (
        data &&
        <div className={`most-liked__element-${target} most-liked__element`}
            onMouseEnter={() => handleHover(target, 'enter')}
            onMouseLeave={() => handleHover(target, 'leave')}
        >
            <div className='most-liked__img-wrapper'>
                <img
                    className={`most-liked__img ${hover.isHover ? hover.target[target] ? 'most-liked__img--hover' : 'most-liked__img--not-hover' : ''}`}
                    src={data.strMealThumb}
                    alt={data.strMeal}
                />
            </div>
            <div className={`most-liked__element-info`}>
                <p className={`most-liked__element-info--title ${isHover() ? 'most-liked__element-info--title-hover' : 'most-liked__element-info--title-not-hover'}`}>{data.strMeal}</p>
                <p
                    className={`most-liked__element-info-category ${isHover() ? 'most-liked__element-info-category--hover' : 'most-liked__element-info-category--not-hover'}`}
                >
                    {data.strArea} | {data.strCategory}
                </p>
                <div className='most-liked__element-info--button-container'>
                    <Button className={`button most-liked__element-button ${isHover() ? '' : 'most-liked__element-button--hidden'}`}>Read more</Button>
                    <Button className={`button most-liked__element-button most-liked__element-button--list ${isHover() ? '' : 'most-liked__element-button--hidden'}`} >+ Add to list</Button>
                </div>
            </div>
        </div>
    )
}
