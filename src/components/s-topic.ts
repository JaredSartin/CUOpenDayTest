
class TopicScreen extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      Topic
    `
  }
}

customElements.define('s-topic', TopicScreen)