import DefaultText from "../../../components/default-text";
import ImgSection from "../../../components/img-section";

const CompanyProfile = () => {
  return (
    <div className="container mx-auto px-[15px]">
      <ImgSection bgImg="about-bg" />
      <br />
      <DefaultText text="Компания Альфа бест —оператор комплексного обслуживания вахтовых поселков на территории      Республики Узбекистан
        Глубокие знания, разносторонний опыт и профессионализм наших сотрудников — это гарантия успехов во всех сферах деятельности, которыми занимается компания.. Наши задачи — обеспечить сервис высокого качества , снизить издержки, дать необходимый комфорт."
      />
    </div>
  )
}

export default CompanyProfile;