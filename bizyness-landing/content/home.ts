import type { Testimonial, Stat, Step, ComplianceBadge, NavItem } from '@/types'

export const nav: NavItem[] = [
  { label: 'Product', href: '#', children: [] },
  { label: 'Integrations', href: '#', children: [] },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '#', children: [] },
  { label: 'About us', href: '/about' },
]

export const integrationLogos = [
  { name: 'Shopify', caption: 'Orders, payments, refunds' },
  { name: 'Stripe', caption: 'Automatic reconciliations' },
  { name: 'PayPal', caption: 'Fees, commissions, taxes incl.' },
  { name: 'Amazon', caption: 'Multi-store & marketplaces' },
  { name: 'WooCommerce', caption: '' },
  { name: 'Other integrations', caption: '' },
]

export const painPoints = [
  {
    icon: '/assets/icon-sales.svg',
    color: 'var(--color-peach-red)',
    bgColor: 'var(--color-bg-2)',
    title: 'Sales everywhere, scattered data',
    description:
      'Between Shopify, PayPal, Amazon, Stripe… nothing matches.',
  },
  {
    icon: '/assets/icon-vat.svg',
    color: 'var(--color-fresh-lime)',
    bgColor: 'var(--color-bg-3)',
    title: 'One VAT return, headache-free',
    description:
      'OSS, IOSS, payments by country: everything in one place.',
  },
  {
    icon: '/assets/icon-invoices.svg',
    color: 'var(--color-ultramarine)',
    bgColor: 'var(--color-bg-4)',
    title: 'Invoices and exports that take ages',
    description: 'Hours lost every month on repetitive tasks.',
  },
]

export const stats: Stat[] = [
  { value: '12h+', label: 'Saved per month on accounting tasks', icon: '/assets/icon-clock.svg' },
  { value: '0 error', label: 'On your VAT returns and fewer tax audits', icon: '/assets/icon-shield.svg' },
  { value: '100%', label: 'Compliant with VAT, OSS, IOSS, PDF', icon: '/assets/icon-thumbs.svg' },
  { value: '€2,000+', label: 'In benefits detected (VAT, errors…)', icon: '/assets/icon-money.svg' },
]

export const regulatoryFeatures = [
  { text: 'E-Invoicing', badge: null },
  { text: 'e-reporting & PDF partner', badge: '2026' },
  { text: 'No need to change tools in 2026. We take care of everything.', badge: null },
  { text: 'Compliant & legal archiving', badge: null },
]

export const accountantFeatures = [
  'FEC exports & general ledger',
  'VAT (OSS/IOSS) ready to file',
  'Tax & e-commerce returns',
  'Compatible with platforms (Sage, Cegid, EBP, Axelor…)',
  'Automatic updates',
  'Less back-and-forth, more time for you',
]

export const brandLogos = [
  { name: 'Aubade', src: '/assets/brand-aubade.svg' },
  { name: 'Mariage.com', src: '/assets/brand-mariage.svg' },
  { name: 'Sézane', src: '/assets/brand-sezane.svg' },
  { name: 'Nature & Découvertes', src: '/assets/brand-nature.svg' },
  { name: 'Pandomoto', src: '/assets/brand-pandomoto.svg' },
  { name: 'Moustache', src: '/assets/brand-moustache.svg' },
]

export const testimonials: Testimonial[] = [
  {
    company: 'GEMMYO',
    quote:
      'Our VAT OSS is finally clear and our reports match in one click. Invaluable time saver.',
    name: 'Pauline Lalleand',
    role: 'Co-founder, Gemmyo',
    revenue: 'CA: €3M',
    avatar: '/assets/avatar-pauline.jpg',
  },
  {
    company: 'Elhée',
    quote:
      'Between exports, legal and tax returns, everything is automated. A real relief.',
    name: 'Romain Garel',
    role: 'CEO',
    revenue: 'CA: €3M',
    avatar: '/assets/avatar-romain.jpg',
  },
  {
    company: 'Qwetch',
    quote:
      'A highly responsive, thoughtful team that truly understands e-commerce in France.',
    name: 'Benoît V.',
    role: 'E-commerce Director',
    revenue: 'CA: €3M',
    avatar: '/assets/avatar-benoit.jpg',
  },
]

export const complianceBadges: ComplianceBadge[] = [
  { icon: '🇫🇷', title: 'Hosted in France', subtitle: 'Data in Europe' },
  { icon: '✅', title: 'Compliant', subtitle: 'With EU regulations' },
  { icon: '🔒', title: 'RGPD', subtitle: 'Secured data' },
  { icon: '📄', title: 'NF NF525 + NF203', subtitle: 'Compliant invoicing' },
]

export const steps: Step[] = [
  {
    number: '1',
    icon: '/assets/icon-connect.svg',
    title: 'Connect',
    description: 'Shopify, PayPal, Amazon, Stripe… in a few clicks',
  },
  {
    number: '2',
    icon: '/assets/icon-sync.svg',
    title: 'Synchronize',
    description: 'Your stores, payments, and sales are synchronized',
  },
  {
    number: '3',
    icon: '/assets/icon-process.svg',
    title: 'We process',
    description: 'VAT, declarations, FEC, exports… We do the work',
  },
  {
    number: '4',
    icon: '/assets/icon-done.svg',
    title: "You're all set",
    description: 'Clear dashboards, ready to use at any time',
  },
]

export const featureCards = [
  {
    icon: '/assets/icon-native-sync.svg',
    color: 'var(--color-dark-blue)',
    title: 'Native synchronization',
    description:
      'Your stores, PSPs, platforms… Everything connects, automates. No CSV. No hassle.',
  },
  {
    icon: '/assets/icon-vat-ecom.svg',
    color: 'var(--color-fresh-lime)',
    title: 'VAT made for e-commerce',
    description:
      'OSS, IOSS, multi-country payments, local rules. All built-in. Always compliant.',
  },
  {
    icon: '/assets/icon-france.svg',
    color: 'var(--color-scarlet)',
    title: 'Built for France',
    description:
      'Invoices, credit notes and exports 100% compliant with French and EU regulations.',
  },
]

export const ctaBullets = [
  'Free trial 14 days',
  'No credit card required',
  'Cancel anytime',
]

export const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#' },
      { label: 'Integrations', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Pricing', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Guides', href: '#' },
      { label: 'Customer stories', href: '#' },
      { label: 'Help Center', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Legal mentions', href: '#' },
      { label: 'GDPR', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  },
]
