interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Freelancer'],
  customerRoles: ['Guest'],
  tenantRoles: ['Freelancer', 'Client', 'Agency Owner', 'Agency Member', 'Guest'],
  tenantName: 'Company',
  applicationName: 'upwork freelancer app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read project details',
    'Read bid information',
  ],
  ownerAbilities: ['Manage projects', 'Place bids', 'Edit personal information', 'Join agencies'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b2ae05e2-d8dc-43db-bfeb-2c184ba08db7',
};
