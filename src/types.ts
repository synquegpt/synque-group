export interface Company {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'Technology' | 'Media' | 'Ventures' | 'Research' | 'Impact';
  color: string;
  icon: string;
  image: string;
}

export const companies: Company[] = [
  {
    id: 'synque-tech',
    name: 'Synque Tech',
    tagline: 'Architecting the Digital Future',
    description: 'Specializing in enterprise AI solutions, cloud infrastructure, and bespoke software engineering for the modern age.',
    category: 'Technology',
    color: '#0A3D2E',
    icon: 'Cpu',
    image: 'https://picsum.photos/seed/tech/800/600'
  },
  {
    id: 'synque-media',
    name: 'Synque Media',
    tagline: 'Stories that Resonate',
    description: 'A full-service creative agency focused on digital storytelling, brand identity, and high-impact content production.',
    category: 'Media',
    color: '#F27D26',
    icon: 'Play',
    image: 'https://picsum.photos/seed/media/800/600'
  },
  {
    id: 'synque-ventures',
    name: 'Synque Ventures',
    tagline: 'Investing in Possibility',
    description: 'Our venture capital arm dedicated to supporting early-stage startups that are solving the world\'s most pressing challenges.',
    category: 'Ventures',
    color: '#5A5A40',
    icon: 'TrendingUp',
    image: 'https://picsum.photos/seed/ventures/800/600'
  },
  {
    id: 'synque-labs',
    name: 'Synque Labs',
    tagline: 'The R&D Powerhouse',
    description: 'Where curiosity meets capability. Exploring the boundaries of quantum computing, biotech, and renewable energy.',
    category: 'Research',
    color: '#151619',
    icon: 'Beaker',
    image: 'https://picsum.photos/seed/labs/800/600'
  },
  {
    id: 'synque-foundation',
    name: 'Synque Foundation',
    tagline: 'Impact Beyond Profit',
    description: 'Our non-profit initiative focused on global education, digital literacy, and sustainable community development.',
    category: 'Impact',
    color: '#00FF00',
    icon: 'Heart',
    image: 'https://picsum.photos/seed/impact/800/600'
  }
];
