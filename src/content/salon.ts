export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://salongnajs.com"
).replace(/\/$/, "");

export const salon = {
  name: "Salong Najs",
  street: "Wollmar Yxkullsgatan 1",
  postalCode: "118 50",
  city: "Stockholm",
  district: "Södermalm",
  subway: "Mariatorget",
  country: "SE",
  geo: { latitude: 59.3169169, longitude: 18.0644012 },
  phone: { display: "08-615 16 01", href: "tel:+4686151601", e164: "+46-8-615 16 01" },
  email: "kontakt@salongnajs.com",
  instagram: {
    handle: "@salongnajs",
    url: "https://www.instagram.com/salongnajs/",
  },
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Salong+Najs%2C+Wollmar+Yxkullsgatan+1%2C+118+50+Stockholm",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Salong+Najs%2C+Wollmar+Yxkullsgatan+1%2C+118+50+Stockholm",
} as const;

export const booking = {
  salon: {
    provider: "Timma",
    url: "https://boka.timma.se/salongnajs",
  },
  heliko: {
    provider: "Bokadirekt",
    url: "https://www.bokadirekt.se/places/salong-najs-heliko-56261",
  },
} as const;

export const navigation = [
  { href: "/priser", label: "Priser" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/kontakt", label: "Kontakt" },
] as const;
