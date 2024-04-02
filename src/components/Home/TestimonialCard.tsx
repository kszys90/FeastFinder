import { userData } from "../../api/randomName/getRandomNames";


export default function TestimonialCard({ user }: { user: userData }) {
    return (
        <div className="testimonials__card">
            <div className="testimonials-card__img-container">
                <img className="testimonials-card__img" src={user.picture?.large} alt={`${user.name.first} ${user.name.last}`} />
            </div>
            <p className="testimonials-card__desc">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo adipisci eligendi culpa assumenda recusandae,"
            </p>
            <p className="testimonials-card__name">{`${user.name.first} ${user.name.last}`}</p>
        </div>
    )
}
