import React from 'react'
import { faqElements, faqElementType } from '../../assets/FAQ/faqElements'
import FAQItem from './FAQItem'

export default function FAQList() {
    return (
        <>
            {faqElements &&
                faqElements.map((el: faqElementType) => <FAQItem key={el.id} data={el} />)
            }
        </>
    )
}
