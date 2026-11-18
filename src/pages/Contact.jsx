import SEO from "../components/common/SEO";
import ContactEnquiry from "../components/contact/ContactEnquiry";
import ContactHero from "../components/contact/ContactHero";
import ContactInformation from "../components/contact/ContactInformation";
import ContactLocation from "../components/contact/ContactLocation";

const Contact = () => {
  return (
    <main>
      <SEO
        title="Best UGC NET & CSIR NET Coaching in Hisar"
        description="Join Gyan Sagar NET Classes in Hisar for UGC NET, CSIR NET, HTET, CTET, DSSSB and teaching exam preparation. Focused academic guidance since 2018."
        keywords={[
          "UGC NET Coaching in Hisar",
          "CSIR NET Coaching in Hisar",
          "Best NET Classes in Hisar",
          "HTET Coaching in Hisar",
          "CTET Coaching in Hisar",
          "DSSSB Coaching in Hisar",
          "PGT TGT Coaching in Hisar",
        ]}
        path="/contact"
      />

      <ContactHero />
      <ContactInformation />
      <ContactEnquiry />
      <ContactLocation />
    </main>
  );
};

export default Contact;
