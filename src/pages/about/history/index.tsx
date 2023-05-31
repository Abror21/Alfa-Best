import DefaultTitle from "../../../components/default-title"
import img from '../../../assets/images/gallery1.jpg'
import DefaultText from "../../../components/default-text"


const History = () => {
  return (
    <div className="container mx-auto px-[15px] mt-[40px] md:mt-[60px]">
        <DefaultTitle title="История"/>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 md:gap-[30px] items-center">
            <img src={img} alt="image" />
            <div>
                <h4 className="text-[#1B2330] text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-5">Начало осуществления деятельности</h4>
                <DefaultText
                    text={<>
                    Начало осуществления деятельности корпоративного питания и инженерно-технической эксплуатации<br /><br />
                    По требованиям контролирующих инстанций, техобслуживание зданий начинается с момента введения объекта в эксплуатации. В качестве управляющей компании может выступать любая организация, имеющая лицензию и соответствующие возможности для проведения измерительных, ремонтных работ.
                    </>}
                />
            </div>
        </div>
    </div>
  )
}

export default History