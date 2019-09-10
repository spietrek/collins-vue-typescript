/* tslint:disable:no-console */

import { register } from 'register-service-worker';

const appServiceWorker: string =
  'App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB';
const serviceWorkerRegisteredy: string = 'Service worker has been registered.';
const contentCached: string = 'Content has been cached for offline use.';
const contentDownloading: string = 'New content is downloading.';
const contentAvailable: string = 'New content is available; please refresh.';
const noInternetConnection: string =
  'No internet connection found. App is running in offline mode.';
const serviceWorkerError: string = 'Error during service worker registration:';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(appServiceWorker);
    },
    registered() {
      console.log(serviceWorkerRegisteredy);
    },
    cached() {
      console.log(contentCached);
    },
    updatefound() {
      console.log(contentDownloading);
    },
    updated() {
      console.log(contentAvailable);
    },
    offline() {
      console.log(noInternetConnection);
    },
    error(error) {
      console.error(serviceWorkerError, error);
    },
  });
}
