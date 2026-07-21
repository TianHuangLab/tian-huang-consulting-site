import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Services',
      links: [
        { text: 'Tracking Health Check', href: getPermalink('/services/tracking-health-check') },
        { text: 'Tracking Fix Sprint', href: getPermalink('/services/tracking-fix-sprint') },
        { text: 'Revenue Attribution Dashboard', href: getPermalink('/services/revenue-attribution-dashboard') },
        { text: 'Sites & marketing mesurables', href: getPermalink('/services/sites-marketing-mesurables') },
      ],
    },
    { text: 'Methodologie', href: getPermalink('/methodologie') },
    { text: 'Cas', href: getPermalink('/cas') },
    { text: 'Ressources', href: getPermalink('/ressources') },
    { text: 'À propos', href: getPermalink('/a-propos') },
  ],
  actions: [{ text: 'Prendre un RDV', href: getPermalink('/prendre-un-rdv') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Tracking Health Check', href: getPermalink('/services/tracking-health-check') },
        { text: 'Tracking Fix Sprint', href: getPermalink('/services/tracking-fix-sprint') },
        { text: 'Revenue Attribution Dashboard', href: getPermalink('/services/revenue-attribution-dashboard') },
        { text: 'Sites marketing mesurables', href: getPermalink('/services/sites-marketing-mesurables') },
      ],
    },
    {
      title: 'Approche',
      links: [
        { text: 'Methodologie', href: getPermalink('/methodologie') },
        { text: 'Cas pratiques', href: getPermalink('/cas') },
        { text: 'Ressources', href: getPermalink('/ressources') },
        { text: 'À propos', href: getPermalink('/a-propos') },
      ],
    },
    {
      title: 'Pour démarrer',
      links: [
        { text: 'Diagnostic Tracking 30 min', href: getPermalink('/prendre-un-rdv') },
        { text: 'Voir les services', href: getPermalink('/services') },
        { text: 'Lire les articles', href: getPermalink('/ressources') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Prendre un RDV', href: getPermalink('/prendre-un-rdv') },
  ],
  socialLinks: [],
  footNote: `
    © ${new Date().getFullYear()} Tian HUANG · Consultant Tracking & Attribution indépendant · Tous droits réservés.
  `,
};
