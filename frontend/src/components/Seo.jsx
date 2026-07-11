import { Helmet } from "react-helmet-async";

const SITE_NAME = "Karoseri Ambulans";
const DEFAULT_DESCRIPTION =
  "Karoseri ambulans profesional untuk kebutuhan transport, gawat darurat, dan ICU di seluruh Indonesia.";

export default function Seo({ title, description = DEFAULT_DESCRIPTION }) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description,
    areaServed: "Indonesia",
    telephone: "+62-812-3456-7890",
    address: { "@type": "PostalAddress", addressLocality: "Serang", addressRegion: "Banten", addressCountry: "ID" },
  };

  return (
    <Helmet>
      <html lang="id" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
