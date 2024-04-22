import { useNavigate } from "react-router-dom"
import Subtitle from "../UI/Subtitle"

type FeaturedCardType = {
    img: string
    name: string
}

export default function FeaturedCard({ img, name }: FeaturedCardType) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/search?search=${name}&by=category`)
    }
    return (
        <>
            <div className="card" onClick={handleClick}>
                <div className="card__image-wrapper">
                    <img className="card__image" src={img} alt={name} />
                </div>
                <Subtitle>{name}</Subtitle>
            </div >
        </>
    )
}
