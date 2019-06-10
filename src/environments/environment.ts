// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // baseApiUrl: 'https://cors.io/?https://app.zonky.cz/api',
  baseApiUrl: 'https://cors.io/?http://app.zonky.cz/api', // Trying the unsecure path
  // baseApiUrl: 'http://127.0.0.1:8001/?https://app.zonky.cz/api',
  locale: 'cs'
};
