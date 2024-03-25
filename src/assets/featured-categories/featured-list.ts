import chickenImg from './imgs/pexels-janine-beth-salazar-3386854.jpg'
import breakfastImg from './imgs/pexels-life-of-pix-101533.jpg'
import veganImg from './imgs/pexels-vegan-liftz-2377164.jpg'
import dessertImg from './imgs/pexels-vojtech-okenka-1055272.jpg'
import pastaImg from './imgs/pexels-engin-akyurt-1487511.jpg'
import seafoodImg from './imgs/pexels-jonathan-borba-3009323.jpg'

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
        name: 'Breakfast',
        img: breakfastImg
    },
    {
        name: 'Seafood',
        img: seafoodImg
    },
    {
        name: 'Pasta',
        img: pastaImg
    },
    {
        name: 'Vegan',
        img: veganImg
    },
]