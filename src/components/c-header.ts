import 'slick-router/components/router-links.js';
import cuLogo from '/cu-logo.svg'

class HeaderComponent extends HTMLElement {
  connectedCallback() {
    const linkWrapper = (route: string, label: string) => `
    <nav-item class="cursor-pointer border-transparent [&.active]:border-cardiff-dark border-0 border-b-4 h-16 flex items-center" route="${route}">
      <span class="text-cardiff-dark font-semibold">${label}</span>
    </nav-item>`;

    this.innerHTML = `
    <nav>
      <div class="w-full flex coll sm:flex-row items-center gap-4 p-4 h-18">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
        <router-links id="top-nav" class="nav-spacer h-18 flex gap-6 items-center">
          ${linkWrapper('home', 'Event Home')}
          ${linkWrapper('location-hub', 'Getting Around')}
        </router-links>
      </div>
    </nav>
    `
  }
}

customElements.define('c-header', HeaderComponent)