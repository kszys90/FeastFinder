import React from 'react'

export default function MOTD() {
    const [hover, setHover] = React.useState({
        isHover: false,
        el1: false,
        el2: false,
        el3: false
    })
    return (
        <div className="most-liked__container">
            <div className='most-liked__element-1 most-liked__element'
                onMouseEnter={() => setHover(prevState => ({ ...prevState, isHover: true, el1: true }))}
                onMouseLeave={() => setHover(prevState => ({ ...prevState, isHover: false, el1: false }))}
            >
                <img className={`most-liked__img ${hover.isHover && hover.el1 === true ? 'most-liked__element--hover' : 'most-liked__element--not-hover'}`} src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg" alt="sdad" />
            </div>
            <div className='most-liked__element-2 most-liked__element'
                onMouseEnter={() => setHover(prevState => ({ ...prevState, isHover: true, el2: true }))}
                onMouseLeave={() => setHover(prevState => ({ ...prevState, isHover: false, el2: false }))}
            >
                <img className={`most-liked__img ${hover.isHover && hover.el2 === true ? 'most-liked__element--hover' : 'most-liked__element--not-hover'}`} src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg" alt="sdad" />
            </div>
            <div className='most-liked__element-3 most-liked__element'
                onMouseEnter={() => setHover(prevState => ({ ...prevState, isHover: true, el3: true }))}
                onMouseLeave={() => setHover(prevState => ({ ...prevState, isHover: false, el3: false }))}
            >
                <img className={`most-liked__img ${hover.isHover && hover.el3 === true ? 'most-liked__element--hover' : 'most-liked__element--not-hover'}`} src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg" alt="sdad" />
            </div>
        </div >
    )
}
