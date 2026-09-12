export const CONTACT = {
  host: "Ms. Carolyn Stuart",
  phoneDisplay: "+1 (242) 471-2225",
  phoneHref: "tel:+12424712225",
  email: "blueholevillas@gmail.com",
  emailHref: "mailto:blueholevillas@gmail.com",
  addressLines: ["Queen’s Highway, Congo Town", "South Andros, The Bahamas"],
  coordinates: "24.15° N · 77.59° W",
  mapsUrl:
    "https://www.google.com/maps?q=Congo+Town,+South+Andros,+Bahamas",
};

export const NAV_LINKS = [
  { label: "Villas", href: "#villas" },
  { label: "Beach", href: "#beach" },
  { label: "Blue Holes", href: "#blue-holes" },
  { label: "Activities", href: "#activities" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
];

export const VILLA_IMAGE = (number: number) =>
  `https://www.infycrestsolutions.com/villa/${number}.jpg`;

export const GALLERY = [
  {
    src: VILLA_IMAGE(17),
    alt: "Aerial view of the secluded coastline and villas of Blue Hole Villas",
    caption: "Home, from the air",
  },
  {
    src: VILLA_IMAGE(4),
    alt: "Hammock between palms on the private beach",
    caption: "The private beach",
  },
  {
    src: VILLA_IMAGE(23),
    alt: "Aerial view of a circular blue hole in turquoise shallows",
    caption: "Blue holes, across the street",
  },
  {
    src: VILLA_IMAGE(8),
    alt: "Uniquely shaped island villa tucked among coconut palms",
    caption: "No two villas alike",
  },
  {
    src: VILLA_IMAGE(14),
    alt: "Snorkeler above a coral reef in clear water",
    caption: "The reef, just offshore",
  },
  {
    src: VILLA_IMAGE(27),
    alt: "Fly fisherman casting on the flats at golden hour",
    caption: "Bonefish on the flats",
  },
  {
    src: VILLA_IMAGE(11),
    alt: "Bright villa kitchen and dining area with sea views",
    caption: "Inside your villa",
  },
  {
    src: VILLA_IMAGE(2),
    alt: "Kayaks gliding through a clear mangrove creek",
    caption: "Creeks made for kayaks",
  },
  {
    src: VILLA_IMAGE(19),
    alt: "Sandy path through a palm grove towards the sea",
    caption: "The path to the sea",
  },
  {
    src: VILLA_IMAGE(6),
    alt: "Golden sunset over calm water from the beach",
    caption: "How the day ends",
  },
];
