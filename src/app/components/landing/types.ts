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
  /**
   * Multiplier applied to the logo at `md` and up, for artwork whose aspect
   * ratio leaves it visually smaller than its neighbours in the same tier.
   * Only kicks in above `md` so scaled logos cannot overflow on mobile.
   */
  scale?: number;
}

