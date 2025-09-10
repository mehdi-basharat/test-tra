export type CompanyData = {
  [domain: string]: {
    name: string;
    ownedBy: string;
    tagline: string;
    logo: string;
  };
};

export const companyData: CompanyData = {
  'tyrads-landing.acmosoft.com': {
    name: 'Tyr Rewards',
    ownedBy: 'Tyrads PTE. LTD.',
    tagline: 'Get your instant rewards!',
    logo: '/tyrads-logo.png',
  },
  'localhost:3000': {
    name: 'Default App',
    ownedBy: 'Default Company',
    tagline: 'This is the default landing page.',
    logo: '/default-logo.png',
  },
};
