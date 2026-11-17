import ContactEnquiry from "../components/contact/ContactEnquiry"
import ContactHero from "../components/contact/ContactHero"
import ContactInformation from "../components/contact/ContactInformation"
import ContactLocation from "../components/contact/ContactLocation"


const Contact = () => {
  return (
    <main>
        <ContactHero/>
        <ContactInformation/>
        <ContactEnquiry/>
        <ContactLocation/>
    </main>
  )
}

export default Contact