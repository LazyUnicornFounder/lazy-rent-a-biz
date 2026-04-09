import lazymoodImg from "@/assets/lazymood.jpg";
import lazythumbsImg from "@/assets/lazythumbs.jpg";
import lazylogoImg from "@/assets/lazylogo.jpg";
import lazyupscaleImg from "@/assets/lazyupscale.jpg";
import lazytext3dImg from "@/assets/lazytext3d.jpg";
import lazysdrImg from "@/assets/lazysdr.jpg";
import autonomousCapitalismImg from "@/assets/autonomous-capitalism.jpg";
import breakingMuseImg from "@/assets/breaking-muse.jpg";
import lazyCanvasImg from "@/assets/lazy-canvas.jpg";
import lazyDecacornImg from "@/assets/lazy-decacorn.jpg";
import lazyCloudImg from "@/assets/lazy-cloud.jpg";
import lazyExitImg from "@/assets/lazy-exit.jpg";
import lazySandsImg from "@/assets/lazy-sands.jpg";
import lazyTonesImg from "@/assets/lazy-tones.jpg";
import lazyUnicornImg from "@/assets/lazy-unicorn.jpg";
import soloUnicornLeagueImg from "@/assets/solo-unicorn-league.jpg";

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
    imageUrl: lazymoodImg,
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
    imageUrl: lazythumbsImg,
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
    imageUrl: lazylogoImg,
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
    imageUrl: lazyupscaleImg,
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
    imageUrl: lazytext3dImg,
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
    imageUrl: lazysdrImg,
  },
  {
    slug: "autonomous-capitalism",
    name: "Autonomous Capitalism",
    tagline: "Autonomous news about autonomous news",
    description: "Operators run an AI-powered news outlet covering the autonomous economy. Curated, generated, and published automatically — your audience gets fresh content daily without you lifting a finger.",
    category: "Content",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: autonomousCapitalismImg,
  },
  {
    slug: "breaking-muse",
    name: "Breaking Muse",
    tagline: "News powered business ideas",
    description: "Operators sell AI-generated business ideas inspired by breaking news. Every day, fresh opportunities extracted from headlines — your audience gets actionable startup concepts delivered to their inbox.",
    category: "Content",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: breakingMuseImg,
  },
  {
    slug: "lazy-canvas",
    name: "Lazy Canvas",
    tagline: "Design content for anything",
    description: "Operators sell instant design generation — social posts, ads, banners, presentations — all created by AI. Your customers describe what they need, get polished visuals in seconds.",
    category: "Image AI",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: lazyCanvasImg,
  },
  {
    slug: "lazy-decacorn",
    name: "Lazy Decacorn",
    tagline: "Game for solo founder decacorn hunters",
    description: "Operators run a gamified platform where solo founders compete to build billion-dollar businesses. Leaderboards, challenges, and milestones keep founders engaged and coming back.",
    category: "Tools",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: lazyDecacornImg,
  },
  {
    slug: "lazy-cloud",
    name: "Lazy Cloud",
    tagline: "Enterprise brains",
    description: "Operators sell AI-powered enterprise intelligence — automated reporting, data analysis, and decision support tools for businesses that want to move faster with less overhead.",
    category: "Tools",
    operatorPrice: 149,
    ownerPrice: 399,
    portfolioPrice: 999,
    imageUrl: lazyCloudImg,
  },
  {
    slug: "lazy-exit",
    name: "Lazy Exit",
    tagline: "The marketplace for autonomous businesses",
    description: "Operators run a marketplace where autonomous businesses are bought and sold. List, browse, and acquire turnkey AI businesses — the Flippa for the autonomous economy.",
    category: "Tools",
    operatorPrice: 149,
    ownerPrice: 399,
    portfolioPrice: 999,
    imageUrl: lazyExitImg,
  },
  {
    slug: "lazy-sands",
    name: "Lazy Sands",
    tagline: "Diamond-rated Lovable agency",
    description: "Operators run a premium Lovable development agency. Match clients with AI-assisted build services, manage projects, and deliver polished apps — all powered by Lovable under the hood.",
    category: "Tools",
    operatorPrice: 149,
    ownerPrice: 399,
    portfolioPrice: 999,
    imageUrl: lazySandsImg,
  },
  {
    slug: "lazy-tones",
    name: "Lazy Tones",
    tagline: "Mood boards in 60 seconds",
    description: "Operators sell lightning-fast mood board generation — describe a vibe, get a curated board with colors, textures, and inspiration in under a minute. Perfect for designers and creatives on a deadline.",
    category: "Image AI",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: lazyTonesImg,
  },
  {
    slug: "lazy-unicorn",
    name: "Lazy Unicorn",
    tagline: "Launch your autonomous business on Lovable",
    description: "Operators sell a guided launch platform for autonomous businesses. Step-by-step deployment, branding, and go-to-market tools — everything a solo founder needs to go from zero to live.",
    category: "Tools",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: lazyUnicornImg,
  },
  {
    slug: "solo-unicorn-league",
    name: "Solo Unicorn League",
    tagline: "The leaderboard for solo founders racing to $1 billion",
    description: "Operators run a competitive leaderboard platform where solo founders track their revenue, milestones, and rankings. Gamified motivation meets real business metrics.",
    category: "Tools",
    operatorPrice: 99,
    ownerPrice: 299,
    portfolioPrice: 799,
    imageUrl: soloUnicornLeagueImg,
  },
];

export const categories = ["All", "Image AI", "Lead Gen", "Content", "Tools"];
