import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import React from 'react';
import { getRandomNames, type userData } from '../../api/randomName/getRandomNames';

export default function TestimonialsCarousel() {
    const [users, setUsers] = React.useState<userData[]>([])
    React.useEffect(() => {
        async function getUsers() {
            const data = await getRandomNames(10)
            setUsers(data.results)
        }
        getUsers()
    }, [])
    return (
        <>
            {users.length > 0 &&
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 1
                        },
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 1
                        },
                        650: {
                            slidesPerView: 3,
                            spaceBetween: 1
                        },
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 1
                        },
                        1500: {
                            slidesPerView: 5,
                            spaceBetween: 1
                        }
                    }}
                >
                    {users.map((user, index) => (
                        <SwiperSlide key={`${user.name.first}_${index}`}>{user.name.first}</SwiperSlide>
                    ))}
                </Swiper>
            }
        </>
    )
}
