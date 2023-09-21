const mapping: Record<string, string> = {
  agencies: 'agency',
  'agency-members': 'agency_member',
  bids: 'bid',
  companies: 'company',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
