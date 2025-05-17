export const siteMetadata = {
  siteUrl: 'https://www.tamerdigital.com',
  siteName: 'TAMERDigital',
  twitterHandle: '@tamerdigital',
  locale: 'en',
  author: 'TAMERDigital',
  languages: ['en', 'es'],
  organization: {
    name: 'TAMERCode LLC',
    legalName: 'TAMERCode LLC',
    foundingDate: '2023-10-01',
    logo: 'https://www.tamerdigital.com/lightThemeLogo.png',
    phone: '+1 786 458 2823',
    email: 'tamercodellc@gmail.com',
    address: {
      street: '6175 NW 186th street',
      city: 'Hialeah',
      region: 'FL',
      postalCode: '33015',
      country: 'US',
    },
    geo: {
      latitude: '25.9437414',
      longitude: '-80.2976751',
    },
    openingHours: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    paymentAccepted: ['Cash', 'Credit Card', 'Debit Card'],
    areaServed: [
      'Hialeah', 'Hialeah Gardens', 'Miami Gardens', 'Opa-locka', 'Miami', 'Doral',
      'Miramar', 'Pembroke Pines', 'North Miami Beach', 'North Miami', 'Sweetwater',
      'Little Havana', 'Westchester', 'Kendall', 'Pinecrest',
    ],
    socialLinks: {
      facebook: 'https://www.facebook.com/TAMERDigit4l',
      instagram: 'https://www.instagram.com/raydel.sanchz/',
      youtube: 'https://www.youtube.com/@tamerdigital',
      tiktok: 'https://www.tiktok.com/@raydelsg',
    },
  },
  faq: [
    {
      question: 'What services do you offer?',
      answer:
          'We offer comprehensive digital marketing services including SEO (Local and National), Social Media Management, Facebook and Instagram Ads, Sales Funnels, Google Ads, and Content Marketing.',
    },
  ],
} as const;
