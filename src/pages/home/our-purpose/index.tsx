import DefaultText from "../../../components/default-text";
import DefaultTitle from "../../../components/default-title";
import img1 from '../../../assets/images/our-purpose-img1.png'
import img2 from '../../../assets/images/our-purpose-img2.png'
import img3 from '../../../assets/images/our-purpose-img3.png'
import img4 from '../../../assets/images/our-purpose-img4.png'
import PurposeItem from "./purpose-item";

const OurPurpose = () => {
    return (
        <div className="container mx-auto px-[15px] lg:gap-14 grid grid-cols-1 lg:grid-cols-5 mt-10 md:mt-[60px]">
            <div className="col-span-2">
                <DefaultTitle title="Наша цель" />
                <DefaultText
                    text="Альфабест — предлагает комплексные решения по содержанию, клинингу, эксплуатации и техническому обслуживанию промышленных предприятий, объектов общественного питания, торговых и бизнес-центров, складских комплексов и технопарков. Мы поддерживаем высокие стандарты обслуживания и внедряем инновационные решения, применяя современные природосберегающие технологии."
                />
            </div>
            <div className="col-span-3 pt-5">
                <PurposeItem
                    num='01'
                    text="Сокращение издержек за счет оптимизации процессов"
                    img={img1}
                />
                <PurposeItem
                    num='02'
                    text="Улучшение качества услуг за счет привлечения"
                    img={img2}
                />
                <PurposeItem
                    num='03'
                    text="Концентрация усилий управленческой команды на основной деятельности"
                    img={img3}
                />
                <PurposeItem
                    num='04'
                    text="Адаптированные под ваши потребности меню и услуги Основные этапы заключения договора"
                    img={img4}
                />
            </div>
        </div>
    )
}

export default OurPurpose;