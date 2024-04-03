export type faqItemType = {
    id: number
    title: string
    text: string
}

export const faqItems = [
    {
        id: 0,
        title: 'Where do the meal recipes available on the website come from?',
        text: 'The recipes featured on our website are sourced from the extensive database available at TheMealDB, which provides a wide variety of meal recipes through their API service.'
    },
    {
        id: 1,
        title: 'Can you recommend a delicious recipe for a family dinner?',
        text: 'Certainly! One popular family dinner recipe is "Chicken Alfredo Primavera" It\'s a creamy pasta dish with tender chicken, savory garlic, and Parmesan cheese.You can find the full recipe and instructions with our search function.'
    },
    {
        id: 2,
        title: 'How do I search for recipes?',
        text: 'You can use the search function on our website by entering the name of the dish or an ingredient you wish to use.'
    },
    {
        id: 3,
        title: 'Are the recipes on this website free to use?',
        text: 'Yes, all the recipes provided on our website are free for personal use.'
    },
]