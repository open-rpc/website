export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Company {
  name: string;
  logo: string;
  darkLogo?: string;
  url?: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  darkLogo?: string;
  url: string;
  tier?: 'platinum' | 'gold' | 'silver' | 'bronze';
}

