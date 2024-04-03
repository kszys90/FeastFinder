import { faqItemType, faqItems } from '../../assets/FAQ/faqItems'
import FAQItem from './FAQItem'

export default function FAQList() {
    return (
        <>
            {faqItems &&
                faqItems.map((el: faqItemType) => <FAQItem key={el.id} data={el} />)
            }
        </>
    )
}
