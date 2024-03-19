import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import firstImage from '../../assets/mainCarouselItems/pexels-ioana-motoc-7521488.jpg'
import secondImg from '../../assets/mainCarouselItems/pexels-jane-doan-1092730.jpg'
import thirdImage from '../../assets/mainCarouselItems/pexels-karolina-grabowska-4202392.jpg'


export default function MainCarousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='main-carousel__item-container'>
                        <div className="slider-background">
                        </div>
                        <img className='main-carousel__item-img' src={firstImage} alt={'first-item'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='main-carousel__item-container'>
                        <div className="slider-background">
                        </div>
                        <img className='main-carousel__item-img' src={secondImg} alt={'second-item'} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='main-carousel__item-container'>
                        <div className="slider-background">
                        </div>
                        <img className='main-carousel__item-img' src={thirdImage} alt={'third-item'} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
