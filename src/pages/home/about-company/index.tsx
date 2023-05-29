import DefaultText from "../../../components/default-text"
import DefaultTitle from "../../../components/default-title"
import img from '../../../assets/images/about-compony.png'
import Button from "../../../components/button"
import AboutStatisticItem from "./about-statistic-item"
import square1 from '../../../assets/icons/about-company-square-1.png'
import square2 from '../../../assets/icons/about-company-square-2.png'
import nourishing from '../../../assets/icons/about-company-nourishing.png'
import staff from '../../../assets/icons/about-company-staff.png'

const AboutCompany = () => {
    return (
        <>
            <div className="container px-[15px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-7 items-center mt-[30px] lg:mt-[60px]">
                <img src={img} alt="image" className="md:col-span-2 w-full" />
                <div className="md:col-span-3">
                    <DefaultTitle title="о нашей компании" />
                    <DefaultText
                        mb={30}
                        text={
                            <>
                                Компания Альфа бест —оператор комплексного обслуживания вахтовых поселков на территории Республики Узбекистан<br />
                                Глубокие знания, разносторонний опыт и профессионализм наших сотрудников — это гарантия успехов во всех сферах деятельности, которыми занимается компания.. Наши задачи — обеспечить сервис высокого качества , снизить издержки, дать необходимый комфорт.<br />
                                Основным заказчиком услуг Компании на протяжении пяти лет является ПАО ЛУКойл что само по себе говорит о качестве наших услуг
                            </>
                        }
                    />
                    <Button title="Узнать больше" type="button" />
                </div>
            </div>
            <div className="container px-[15px] mx-auto mt-10 flex flex-col sm:flex-row justify-between gap-8 flex-wrap">
                <AboutStatisticItem
                    img={square1}
                    title="+320.000"
                    area="кв.м²"
                    text="Площади объектов благоустройства"
                />
                <AboutStatisticItem
                    img={square2}
                    title="+70.000"
                    area="кв.м²"
                    text="Площади объектов клининга"
                />
                <AboutStatisticItem
                    img={nourishing}
                    title="+1000"
                    text="Питающихся"
                />
                <AboutStatisticItem
                    img={staff}
                    title="+500"
                    text="Сотрудников"
                />
            </div>
        </>
    )
}

export default AboutCompany