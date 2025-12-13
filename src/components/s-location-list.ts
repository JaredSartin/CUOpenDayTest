class LocationListScreen extends HTMLElement {
  model: any;
  $router: any;

  beforeRouteEnter() {
    this.model = window.CUEvents.Locations;
  }

  connectedCallback() {
    this.innerHTML = `
      <c-page-header titletext="Locations" secondarytext="Notable locations on event day" background=""></c-page-header>
      <section class="cu-content max-w-3xl mx-auto my-8">
        <h2 class="text-2xl font-semibold mb-4">University Locations</h2>
        <ul class="list-disc list-inside text-sm mb-8">
          ${this.model.university.map((loc: any) => `
            <li><a href="${this.$router.generate('location', { locationId: loc.id })}" class="text-blue-600 visited:text-purple-600">${loc.title}</a></li>
          `).join('')}
        </ul>
        <h2 class="text-2xl font-semibold mb-4">Refreshment Locations</h2>
        <ul class="list-disc list-inside text-sm mb-8">
          ${this.model.refreshments.map((loc: any) => `
            <li><a href="${this.$router.generate('location', { locationId: loc.id })}" class="text-blue-600 visited:text-purple-600">${loc.building_name}</a></li>
          `).join('')}
        </ul>
        <h2 class="text-2xl font-semibold mb-4">Accommodation Locations</h2>
        <ul class="list-disc list-inside text-sm mb-8">
          ${this.model.accommodation.map((loc: any) => `
            <li><a href="${this.$router.generate('location', { locationId: loc.id })}" class="text-blue-600 visited:text-purple-600">${loc.building_name}</a></li>
          `).join('')}
        </ul>
        <h2 class="text-2xl font-semibold mb-4">Transportation Locations</h2>
        <ul class="list-disc list-inside text-sm mb-8">
          ${this.model.transportation.map((loc: any) => `
            <li><a href="${this.$router.generate('location', { locationId: loc.id })}" class="text-blue-600 visited:text-purple-600">${loc.building_name}</a></li>
          `).join('')}
        </ul>
      </section>
    `
  }
}

customElements.define('s-location-list', LocationListScreen)