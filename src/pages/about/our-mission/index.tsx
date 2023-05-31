import DefaultText from "../../../components/default-text"
import DefaultTitle from "../../../components/default-title"
import decor from '../../../assets/images/decor.png'
import Card from "./card"
import img1 from '../../../assets/images/our-mission-img1.png'
import img2 from '../../../assets/images/our-mission-img2.png'
import img3 from '../../../assets/images/our-mission-img3.png'
import img4 from '../../../assets/images/our-mission-img4.png'

const OurMission = () => {
    return (
        <div className="mt-[40px] md:mt-[60px]">
            <div className="relative">
                <img src={decor} alt="decoration" className="hidden md:block absolute right-0 top-[180px] lg:-top-full" />
            </div>
            <div className="container mx-auto px-[15px] flex flex-wrap gap-[30px] items-center">
                <div className="w-full lg:w-[60%]">
                    <DefaultTitle title="Наша миссия" />
                    <DefaultText text="Альфабест — предлагает комплексные решения по содержанию, клинингу, эксплуатации и техническому обслуживанию промышленных предприятий, объектов общественного питания, торговых и бизнес-центров, складских комплексов и технопарков. Мы поддерживаем высокие стандарты обслуживания и внедряем инновационные решения, применяя современные природосберегающие технологии." />
                </div>
                <div className="w-full lg:w-[40%] max-w-[275px] text-lg md:text-2xl lg:text-3xl font-bold text-[#1B2330]">
                   <span className="text-[#28C79E]">ALFABEST</span> ЕДИНЫЙ СЕРВИС НАЦИОНАЛЬНОГО МАСШТАБА
                </div>
            </div>
            <div className="container mx-auto px-[15px] grid lg:grid-cols-2 gap-[20px] md:gap-[30px] mt-8">
                <Card title="Инженерно-техническая эксплуатация" img={img1}/>
                <Card title="Сервисное и бытовое обслуживание" img={img2}/>
                <Card title="Корпоративное питание" img={img3}/>
                <Card title="Транспортныеи пассажирский перевозки" img={img4}/>
            </div>
        </div>
    )
}

export default OurMission