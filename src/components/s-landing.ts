import 'slick-router/components/router-links.js';
import cuLogo from '/cu-logo.svg';

class LandingScreen extends HTMLElement {
  model: any;
  unbindLinks: any;

  beforeRouteEnter() {
    this.model = window.CUEvents.OpenDay;
  }

  connectedCallback() {
    this.innerHTML = `
      <c-page-header titletext="${this.model.description}" secondarytext="${this.openDates()}" background="${this.model.cover_image}"></c-page-header>
      <section class="cu-content max-w-3xl mx-auto my-8">
        <h2 class="text-2xl font-semibold mb-4">Topics</h2>
        <router-links id="topics-list">${this.renderTopics(this.model.topics)}</div>
      </section>
    `
  }

  renderTopics(topics: any[]) {
    return topics.map((topic: any) => topic && topic.name ? `
    <div route="topic" param-topic-id="${topic.id}" class="bg-cardiff-light flex flex-row items-center justify-items-center rounded-lg shadow p-1 mb-4 min-h-32 cursor-pointer hover:bg-cardiff-grey transition">
      <img src="${topic.cover_image || cuLogo}" alt="${topic.name}" class="h-48 w-32 object-cover rounded" />
      <div class="ml-4 flex flex-col">
        <h2 class="text-xl font-bold text-cardiff-red mb-2">${topic.name}</h2>
        <p class="text-cardiff-dark mb-2">${topic.description || ''}</p>
      </div>
    </div>
    ` : '').join('')
  }

  openDates() {
    const startDate = new Date(this.model.start_time)
    const endDate = new Date(this.model.end_time)
    if (startDate.toDateString() === endDate.toDateString()) {
      return `${startDate.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}, from ${startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} to ${endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
    } else {
      return `${startDate.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })} to ${endDate.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}`
    }
  }
}

customElements.define('s-landing', LandingScreen)