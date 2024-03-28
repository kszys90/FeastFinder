import { faqElementType } from "../../assets/FAQ/faqElements";
import Subtitle from "../UI/Subtitle";

export default function FAQItem({ data }: { data: faqElementType }) {
    return (
        <div>
            <Subtitle>{data.title}</Subtitle>
            <p>{data.text}</p>
        </div>
    )
}
