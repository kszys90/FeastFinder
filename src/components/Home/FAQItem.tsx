import React from "react";
import { faqItemType } from "../../assets/FAQ/faqItems";
import Description from "../UI/Description";
import Subtitle from "../UI/Subtitle";
import { IoIosArrowDropdown } from "react-icons/io";

export default function FAQItem({ data }: { data: faqItemType }) {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className="faq-item__container">
            <div className="faq-item__header-container">
                <Subtitle className="article-subtitle faq-item__title text-black">{data.title}</Subtitle>
                <IoIosArrowDropdown
                    fill="black"
                    className={`${!isOpen ? 'faq-item__dropdown' : 'faq-item__dropdown faq-item__dropdown--rotated'}`}
                    onClick={() => setIsOpen(prevState => !prevState)}
                />
            </div>
            <div className={`${isOpen ? 'faq-item__desc-container' : 'display-none'}`}>
                <Description className="article-description text-black">{data.text}</Description>
            </div>
        </div>
    )
}
