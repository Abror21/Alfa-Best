import DefaultTitle from "../default-title";
import img1 from '../../assets/images/gallery1.jpg'
import img2 from '../../assets/images/gallery2.jpg'
import img3 from '../../assets/images/gallery3.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";
import './index.css';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const imgs: {id:number; img: string}[] = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img1 },
    { id: 5, img: img2 },
    { id: 6, img: img3 },
]

const Gallery = () => {
    return (
        <div className="gallery container mx-auto px-[15px] mt-[40px] md:mt-[60px] relative">
            <DefaultTitle title="Наша команда" />
            <Swiper
                centeredSlides={true}
                freeMode={true}
                spaceBetween={30}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                modules={[FreeMode, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    imgs.map(img => (
                        <SwiperSlide key={img['id']}>
                            <img src={img['img']} alt="image" className="rounded-xl w-full" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Gallery