export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Company {
  name: string;
  logo: string;
  url?: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  url: string;
  tier?: 'gold' | 'silver' | 'bronze';
}

