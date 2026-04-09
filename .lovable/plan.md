

# Lazy Rent-A-Biz — Implementation Plan

## Phase 1: Design System & Landing Page

Set up the warm cream design system (background #f5f4ed, terracotta #c96442, Georgia headings, Inter body) in Tailwind config and CSS variables. Build the landing page with all sections:
- Hero with "Rent a business. Skip the build." headline and CTAs
- 3-step "How it works" section with icons
- Food truck analogy callout
- Catalog preview grid (6 business cards, hardcoded initially)
- "Why rent vs build" two-column comparison
- Pricing tiers table (Operator $99, Owner $299, Portfolio $799)
- FAQ accordion
- Footer

## Phase 2: Catalog & Business Detail Pages

- **/businesses** — Filterable grid of businesses with category tags (Image AI, Lead Gen, Content, Tools). Cards show screenshot, name, tagline, starting price, "View Business" link.
- **/businesses/:slug** — Detail page with hero + screenshots area, plain-English description, target operator profiles, revenue examples, "What's included" checklist, tier selector with feature comparison, and "Rent This Business" CTA.

## Phase 3: Database & Auth Setup

- Enable Supabase auth with Google provider
- Create all tables via migrations: `businesses`, `profiles`, `tenants`, `tenant_customers`, `tenant_revenue`
- Set up RLS policies as specified
- Create the `handle_new_user` trigger for auto-creating profiles
- Seed the 6 businesses (LazyMood, LazyThumbs, LazyLogo, LazyUpscale, LazyText3D, LazySDR)

## Phase 4: Auth Flow & Protected Routes

- Build login page with Google sign-in
- Protect `/app/*` routes behind auth
- Wire up Supabase client with generated types

## Phase 5: Operator Dashboard (/app)

- Sidebar layout with: My Businesses, Billing, Settings navigation
- Overview panel showing total revenue, active end-customers, AI usage
- "My Businesses" list with cards (name, status, domain, revenue, customer count, "Open" link)
- Empty state directing to catalog

## Phase 6: Tenant Dashboard (/app/business/:tenantId)

- Revenue chart (last 30 days, simple bar/line chart)
- End-customer table (name, email, plan, MRR, signup date)
- AI usage meter (calls vs quota progress bar)
- Domain setup section with CNAME instructions
- Branding panel: logo upload (Supabase Storage), color picker, business name
- Polar connection status display
- "Visit my site" external link

## Phase 7: Settings Page (/app/settings)

- Profile editing (display name, email)
- Polar account connection section
- Danger zone: cancel rental subscriptions per business with confirmation dialog

## Phase 8: Polar Payment Integration

- Create 3 Polar products (rent_operator_monthly $99, rent_owner_monthly $299, rent_portfolio_monthly $799)
- Build `polar-webhook` edge function to handle subscription lifecycle (created → create tenant, updated → update tier/status, cancelled → set cancelled)
- Wire "Rent This Business" CTA to Polar checkout flow via edge function

## Phase 9: Edge Functions

- **provision-tenant** — generates subdomain, sends welcome email via Resend, creates default branding
- **track-usage** — increments `ai_calls_this_month`, returns quota exceeded error when over limit
- Connect Resend for transactional emails (welcome, setup instructions)

## Phase 10: Polish & Copy

- Apply copy rules throughout: "operator" not "user", "rent" not "subscribe", food truck framing
- Ensure all empty states have meaningful context (no bare zeros)
- Responsive design pass for all pages
- Warm, confident tone across all headlines and CTAs

