import { userData } from "../../api/randomName/getRandomNames";


export default function TestimonialCard({ user }: { user: userData }) {
    return (
        <div className="testimonials__card">
            <p>raitng 5/5</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo adipisci eligendi culpa assumenda recusandae,
                itaque ea molestias similique facilis omnis ipsum, accusantium maiores commodi repudiandae aperiam minus, at cum?
            </p>
            <p>{`${user.name.first} ${user.name.last}`}</p>
        </div>
    )
}
