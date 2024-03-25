import chickenImg from './imgs/pexels-janine-beth-salazar-3386854.jpg'
import dessertImg from './imgs/pexels-vojtech-okenka-1055272.jpg'
import pastaImg from './imgs/pexels-engin-akyurt-1487511.jpg'

type featuredElement = {
    img: string,
    name: string
}

export const featuredList: featuredElement[] = [
    {
        name: 'Chicken',
        img: chickenImg
    },
    {
        name: 'Dessert',
        img: dessertImg
    },
    {
        name: 'Pasta',
        img: pastaImg
    }
]