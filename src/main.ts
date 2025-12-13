import './style.css'

import.meta.glob('./components/*.ts', { eager: true })

import { Router } from 'slick-router/core.js'
import { wc } from 'slick-router/middlewares/wc.js'
import { events } from 'slick-router/middlewares/events.js'
import { routerLinks } from 'slick-router/middlewares/router-links.js'

function renderTemplate() {
  const app = document.body;
  app.innerHTML = `
  <div id="app" class="min-h-screen font-sans">
    <c-header></c-header>
    <router-outlet></router-outlet>
  </div>
  <footer class="cu-footer w-full bg-cardiff-dark text-white p-4 mt-8">
    <div class="max-w-4xl mx-auto text-center text-sm">
      <p>Not an official Cardiff University website. This is only a test.</p>
      <p>Created by <a class="underline font-semibold" href="https://github.com/jaredsartin/CUOpenDayTest" target="_blank" rel="noopener noreferrer">Jared Sartin.</p>
    </div>
  </footer>
  `
}

// Adding ts-ignore to suppress errors from slick-router's type definitions
// The below usage is valid, but the types are not accurate.
function startApp() {
  renderTemplate();

  const routes = [
    {
      name: 'app',
      path: '/',
      children: [
        {
          name: 'home',
          path: '',
          component: 's-landing'
        },
        {
          name: 'topic',
          path: 'topic/:topicId',
          component: 's-topic'
        },
        {
          name: 'location-hub',
          path: 'locations',
          children: [
            {
              name: 'locations',
              path: '',
              component: 's-location-list',
            },
            {
              name: 'location',
              path: ':locationId',
              component: 's-location'
            },
          ]
        },
        {
          name: 'error',
          path: ':path*',
          component: 's-error'
        }
      ]
    }
  ];

  const router = new Router({
    // @ts-ignore
    routes,
    // @ts-ignore
    pushState: false,
    // @ts-ignore
    outlet: 'router-outlet'
  })

  // @ts-ignore
  router.use(wc)
  // @ts-ignore
  router.use(events)
  // @ts-ignore
  router.use(routerLinks)
  router.listen()

  window.addEventListener('router-transition', () => {
    window.scrollTo(0, 0);
  });
}

async function loadData(dataSet: string) {
  const base = import.meta.env.BASE_URL || '/';
  const res = await fetch(`${base}api/${dataSet}.json`)
  const data = await res.json()
  window.CUEvents = window.CUEvents || {}
  window.CUEvents[dataSet] = data
}

Promise.all([
  loadData('OpenDay'),
  loadData('Locations')
]).then(startApp);
