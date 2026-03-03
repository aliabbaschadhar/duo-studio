export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Duo Studio",
    description:
      "Award-winning creative agency specializing in brand strategy, visual identity, and digital experiences.",
    url: "https://duo-studio.vercel.app",
    logo: "https://d33wubrfki0l68.cloudfront.net/439bf938233c24af021ffe6d206cd42f546e1143/ff4ed/assets/logo.svg",
    email: "hello@duo-studio.co",
    areaServed: "Worldwide",
    foundingLocation: {
      "@type": "Place",
      name: "Washington DC",
    },
    sameAs: [
      "https://www.instagram.com/duo.studio",
      "https://www.linkedin.com/company/duo-studio",
      "https://www.facebook.com/duostudio",
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Duo Studio",
    description: "Digitally crafted brand experiences",
    url: "https://duo-studio.vercel.app",
    email: "hello@duo-studio.co",
    address: [
      { "@type": "PostalAddress", addressLocality: "Washington", addressRegion: "DC", addressCountry: "US" },
      { "@type": "PostalAddress", addressLocality: "Maryland", addressRegion: "MD", addressCountry: "US" },
      { "@type": "PostalAddress", addressLocality: "Virginia", addressRegion: "VA", addressCountry: "US" },
    ],
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Duo Studio Services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Strategy",
          description: "Brand strategy and positioning to unlock your brand's full potential.",
          provider: { "@type": "Organization", name: "Duo Studio" },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Identity",
          description: "Visual identity design that communicates your brand's truth.",
          provider: { "@type": "Organization", name: "Duo Studio" },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Experience",
          description: "Digital experiences crafted to engage and inspire your audience.",
          provider: { "@type": "Organization", name: "Duo Studio" },
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(services) }}
      />
    </>
  );
}
