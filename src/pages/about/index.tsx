import Gallery from "../../components/gallery"
import CompanyProfile from "./company-profile"
import History from "./history"
import OurMission from "./our-mission"
import OurTeam from "./our-team"
import Partners from "./partners"

const About = () => {
  return (
    <>
      <CompanyProfile />
      <OurMission />
      <OurTeam />
      <Partners />
      <Gallery />
      <History />
    </>
  )
}

export default About