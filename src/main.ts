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

function startApp() {
  renderTemplate();

  const router = new Router({
    hashChange: true,
    pushState: false,
    outlet: 'router-outlet'
  })
  window.router = router

  router.map(function (route) {
    route('landing', {path: '/'}, function() {
      route('home', {path: '', component: 's-landing'})
      route('topic', {path: 'topic/:topicId', component: 's-topic'})
      route('location', {path: 'location/:locationId', component: 's-location'})
      route('error', {path: ':path*', component: 's-error'})
    })
  })

  router.use(wc)
  router.use(events)
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
