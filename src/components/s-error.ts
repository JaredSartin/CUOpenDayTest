class ErrorScreen extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      Error: The page you are looking for does not exist.
    `
  }
}

customElements.define('s-error', ErrorScreen)