import type { Core } from '@strapi/strapi';

const config: Core.Config.Middlewares = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': [
            "'self'",
            'https:',
            'http:',
            // '192.168.1.19:8333',
            // 'storage.multimaxima.xyz',
          ],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            '192.168.1.19:8333',
            'storage.multimaxima.xyz',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            '192.168.1.19:8333',
            'storage.multimaxima.xyz',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default config;
