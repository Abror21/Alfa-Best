import DefaultTitle from "../../../components/default-title";
import member1 from '../../../assets/images/team-member1.jpg';
import member2 from '../../../assets/images/team-member2.jpg';
import member3 from '../../../assets/images/team-member3.jpg';
import member4 from '../../../assets/images/team-member4.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './index.css'
import TeamMember from "./team-member";

const OurTeam = () => {
    return (
        <div className="our-team container mx-auto px-[15px] mt-[40px] md:mt-[60px] relative">
            <DefaultTitle title="Наша команда" />
            <div>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        426: {
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
                    modules={[FreeMode, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <TeamMember img={member1} name="Darobov Baxodirmirzo" position="Директор" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember img={member2} name="Darobov Baxodirmirzo" position="Директор" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember img={member3} name="Darobov Baxodirmirzo" position="Директор" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember img={member4} name="Darobov Baxodirmirzo" position="Директор" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember img={member1} name="Darobov Baxodirmirzo" position="Директор" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember img={member2} name="Darobov Baxodirmirzo" position="Директор" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember img={member3} name="Darobov Baxodirmirzo" position="Директор" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <TeamMember img={member4} name="Darobov Baxodirmirzo" position="Директор" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >
    )
}

export default OurTeam