
const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Gyan Sagar NET Classes",
    url: "https://YOUR-DOMAIN.com",
    logo: "https://YOUR-DOMAIN.com/favicon.png",
    image: "https://YOUR-DOMAIN.com/og-image.jpg",
    description:
      "Gyan Sagar NET Classes provides academic guidance and preparation for UGC NET, CSIR NET, HTET, CTET, DSSSB and teaching examinations.",
    telephone: "+91-97283-06888",
    email: "gyansagar02102018@gmail.com",
    foundingDate: "2018",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "DSS 67, Rajgarh Road, Old Courts Commercial Complex, Lajpat Nagar",
      addressLocality: "Hisar",
      addressRegion: "Haryana",
      postalCode: "125004",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/gyansagarnetclasseshisar",
      "https://www.instagram.com/gyansagarnetclasses",
      "https://www.youtube.com/@Gyansagarnetclasses",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
};

export default OrganizationSchema;