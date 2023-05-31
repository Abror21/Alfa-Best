import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import './index.css';
import { Autoplay, Navigation, Thumbs } from "swiper";
import DefaultText from "../../../components/default-text";
import DefaultTitle from "../../../components/default-title";

const History = () => {
  const [slides, setSlides] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    fetch('https://alfabest.napaautomotive.uz/api/history', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "ru"
      }
    })
      .then(res => res.json())
      .then(data => setSlides(data.datas))
  }, [])

  return (
    <div className="container mx-auto px-[15px] mt-10 md:mt-[60px] history">
      <Swiper
        style={{
          marginBottom: '20px'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[Autoplay, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <div className="flex flex-col items-center md:block">
                <DefaultTitle
                  title="История"
                />
              </div>
              <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-7 md:gap-8">
                <div className="max-h-80 md:col-span-2">
                  <img className="mx-auto md:mx-0 md:w-auto h-full object-cover" src={`https://alfabest.napaautomotive.uz/storage/${slide.image}`} alt="image" />
                </div>
                <div className="md:col-span-2 lg:col-span-3 text-center md:text-left">
                  <h4 className="text-[#1B2330] text-xl sm:text-3xl md:text-4xl xl:text-5xl font-bold mb-5">{slide.year}</h4>
                  <DefaultText text={slide.text_ru} />
                </div>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <button className="text-xl sm:text-3xl md:text-4xl xl:text-5xl">
                {slide.year}
              </button>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div >
  )
}

export default History