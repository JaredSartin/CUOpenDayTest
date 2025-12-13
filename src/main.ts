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
  `
}

// Adding ts-ignore to suppress errors from slick-router's type definitions
// The below usage is valid, but the types are not accurate.
function startApp() {
  renderTemplate();

  const router = new Router({
    // @ts-ignore
    pushState: false,
    // @ts-ignore
    outlet: 'router-outlet'
  })

  router.map(function (route) {
    route('landing', {path: '/'}, function() {
      // @ts-ignore
      route('home', {path: '', component: 's-landing'})
      // @ts-ignore
      route('topic', {path: 'topic/:topicId', component: 's-topic'})
      // @ts-ignore
      route('location', {path: 'location/:locationId', component: 's-location'})
      // @ts-ignore
      route('error', {path: ':path*', component: 's-error'})
    })
  })

  // @ts-ignore
  router.use(wc)
  // @ts-ignore
  router.use(events)
  // @ts-ignore
  router.use(routerLinks)
  router.listen()
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
