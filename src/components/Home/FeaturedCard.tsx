import Subtitle from "../UI/Subtitle"

type FeaturedCardType = {
    img: string
    name: string
}

export default function FeaturedCard({ img, name }: FeaturedCardType) {
    return (
        <>
            <div className="card">
                <div className="card__image-wrapper">
                    <img className="card__image" src={img} alt={name} />
                </div>
                <Subtitle>{name}</Subtitle>
            </div>
        </>
    )
}
