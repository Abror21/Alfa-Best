import DefaultAlfa from '../../components/default-alfa'
import AboutCompany from './about-company'
import History from './history'
import Intro from './intro'
import OurPurpose from './our-purpose'

const Home = () => {

  return (
    <>
      <Intro />
      <AboutCompany />
      <OurPurpose />
      <DefaultAlfa
        img='partners-bg'
        title='Наши партнеры довольны нами'
        text='Если вас заинтересовали наши услуги, станьте нашим партнером и получите премиальные услуги'
      />
      <History />
    </>
  )
}

export default Home