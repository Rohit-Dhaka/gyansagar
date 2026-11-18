
import { Helmet } from "react-helmet-async";

const SITE_NAME = "Gyan Sagar NET Classes";
const SITE_URL = "https://YOUR-DOMAIN.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const SEO = ({
  title,
  description,
  keywords = [],
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
}) => {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Hisar`;

  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
