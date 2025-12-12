import cuLogo from '/cu-logo.svg'

class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav>
      <div class="w-full flex coll sm:flex-row items-center gap-4 p-4">
        <a href="https://www.cardiff.ac.uk/" target="_blank" rel="noopener noreferrer">
          <img src="${cuLogo}" alt="Cardiff University Logo" class="h-16 w-auto" />
        </a>
        NAV HERE
      </div>
    </nav>
    `
  }
}

customElements.define('c-header', HeaderComponent)