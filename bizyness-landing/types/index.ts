export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export interface Testimonial {
  company: string
  quote: string
  name: string
  role: string
  revenue: string
  avatar: string
}

export interface Stat {
  value: string
  label: string
  icon: string
}

export interface FeatureCard {
  icon: string
  title: string
  description: string
  color?: string
}

export interface Step {
  number: string
  icon: string
  title: string
  description: string
}

export interface ComplianceBadge {
  icon: string
  title: string
  subtitle: string
}
