import { Helmet } from "react-helmet-async";

const SITE_NAME = "Karoseri Ambulans";
const DEFAULT_DESCRIPTION =
  "Karoseri ambulans profesional untuk kebutuhan transport, gawat darurat, dan ICU di seluruh Indonesia.";

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
}) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const canonicalUrl =
    canonical ||
    (typeof window !== "undefined" ? window.location.href : undefined);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    description,
    areaServed: "Indonesia",
    telephone: "+62-812-3456-7890",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Serang",
      addressRegion: "Banten",
      addressCountry: "ID",
    },
  };

  return (
    <Helmet>
      <html lang="id" />
      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}

      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      {/* OpenGraph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {canonicalUrl ? <meta name="twitter:url" content={canonicalUrl} /> : null}

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
