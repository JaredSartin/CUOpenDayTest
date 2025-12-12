class PageHeaderComponent extends HTMLElement {
  connectedCallback() {
    const {titletext, secondarytext, background} = Object.fromEntries([...this.attributes].map(attr => [attr.name, attr.value]));
    this.innerHTML = `
      <section class="cu-head w-full md:h-64 h-48 text-white bg-cover bg-center bg-black/40 bg-blend-multiply px-4">
        <div class="max-w-4xl mx-auto flex flex-col justify-center h-full py-8">
          <h1 class="text-2xl md:text-5xl font-bold mb-4 font-serif w-full">${titletext}</h1>
          ${secondarytext !== 'undefined' ? `<h3 class="text-xl md:text-2xl mb-2 w-full">${secondarytext}</h3>` : ''}
        </div>
      </section>
    `

    this.querySelector('section.cu-head')!.style.backgroundImage = `url('${background || ''}')`
  }
}

customElements.define('c-page-header', PageHeaderComponent)