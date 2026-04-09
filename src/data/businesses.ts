export interface Business {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  operatorPrice: number;
  ownerPrice: number;
  portfolioPrice: number;
  imageUrl: string;
}

export const businesses: Business[] = [
  {
    slug: "lazymood",
    name: "LazyMood",
    tagline: "AI mood board generator for designers and creatives",
    description: "Your operators sell AI-generated mood boards to interior designers, brand agencies, and content creators. Customers describe a vibe, get a polished board in seconds.",
    category: "Image AI",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "lazythumbs",
    name: "LazyThumbs",
    tagline: "YouTube thumbnail generator that gets clicks",
    description: "Operators sell AI-powered thumbnail creation to YouTubers and content creators. Upload a frame, pick a style, get scroll-stopping thumbnails.",
    category: "Image AI",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "lazylogo",
    name: "LazyLogo",
    tagline: "Logo and brand kit generator for startups",
    description: "Operators sell instant brand identity packages — logo, color palette, typography, and social media templates — to founders and small businesses.",
    category: "Image AI",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "lazyupscale",
    name: "LazyUpscale",
    tagline: "Image upscaling service for photographers",
    description: "Operators sell AI image enhancement to photographers, e-commerce sellers, and print shops. Upload a low-res image, get a crisp high-res version.",
    category: "Tools",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "lazytext3d",
    name: "LazyText3D",
    tagline: "3D text on image creator for marketers",
    description: "Operators sell eye-catching 3D text overlays to social media managers, ad agencies, and event promoters. Type text, pick a style, get a stunning visual.",
    category: "Content",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: "/placeholder.svg",
  },
  {
    slug: "lazysdr",
    name: "LazySDR",
    tagline: "LinkedIn lead finder for B2B sales teams",
    description: "Operators sell targeted lead lists and outreach templates to B2B sales teams, recruiters, and agencies. Define your ideal customer, get qualified prospects.",
    category: "Lead Gen",
    operatorPrice: 149,
    ownerPrice: 399,
    portfolioPrice: 999,
    imageUrl: "/placeholder.svg",
  },
];

export const categories = ["All", "Image AI", "Lead Gen", "Content", "Tools"];
