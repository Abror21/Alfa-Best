import DefaultAlfa from "../../../components/default-alfa";
import lukoil from '../../../assets/images/lukoil.png'
import intel from '../../../assets/images/intel.png'
import ikea from '../../../assets/images/ikea.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Partners = () => {
    return (
        <>
            <DefaultAlfa
                img="partners-bg"
                title="Мы с нашими партнерами уже пять лет"
                text="Мы успешно работаем с нашими партнерами уже пять лет. Теперь у нас более 10 клиентов, и вы также можете сотрудничать с нами."
            />
            <div className="container mx-auto px-[15px] mt-[40px] md:mt-[60px]">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        375: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={lukoil} alt="lukoil" /></SwiperSlide>
                    <SwiperSlide><img src={intel} alt="intel" /></SwiperSlide>
                    <SwiperSlide><img src={ikea} alt="ikea" /></SwiperSlide>
                    <SwiperSlide><img src={lukoil} alt="lukoil" /></SwiperSlide>
                    <SwiperSlide><img src={intel} alt="intel" /></SwiperSlide>
                    <SwiperSlide><img src={ikea} alt="ikea" /></SwiperSlide>
                    <SwiperSlide><img src={lukoil} alt="lukoil" /></SwiperSlide>
                    <SwiperSlide><img src={intel} alt="intel" /></SwiperSlide>
                    <SwiperSlide><img src={ikea} alt="ikea" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default Partners