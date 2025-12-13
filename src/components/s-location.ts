class LocationScreen extends HTMLElement {
  universityModel: any;
  refreshmentsModel: any;
  accomodationModel: any;
  transportationModel: any;

  beforeRouteEnter(transition: any) {
    this.universityModel = window.CUEvents.Locations.university.find((location: any) => location.id == transition.params.locationId);
    this.refreshmentsModel = window.CUEvents.Locations.refreshments.find((location: any) => location.id == transition.params.locationId);
    this.accomodationModel = window.CUEvents.Locations.accommodation.find((location: any) => location.id == transition.params.locationId);
    this.transportationModel = window.CUEvents.Locations.transportation.find((location: any) => location.id == transition.params.locationId);
  }
  connectedCallback() {
    const baseModel = this.universityModel || this.refreshmentsModel || this.accomodationModel || this.transportationModel;
    if (!baseModel) {
      this.innerHTML = `
        <c-page-header titletext="Location Not Found" secondarytext="" background=""></c-page-header>
        <section class="cu-content max-w-3xl mx-auto my-8">
          <p>We currently do not have information about this location. Please check back later or contact support for assistance.</p>
        </section>
      `
      return;
    }


    this.innerHTML = `
      <c-page-header titletext="${baseModel.title}" secondarytext="${baseModel.campus.title}" background="${baseModel.cover_image}"></c-page-header>
      <section class="cu-content max-w-3xl mx-auto my-8">
        <h2 class="text-2xl font-semibold mb-4">Details</h2>
        <p class="mb-4">${this.mapLink(baseModel.address, baseModel.postcode)}</p>
        <ul class="list-disc list-inside text-sm">
          <li><span class="font-semibold">Accessible:</span> ${baseModel.accessible == 1 ? 'Yes' : 'No'}</li>
          <li><span class="font-semibold">Bike Parking:</span> ${baseModel.bike_parking == 1 ? 'Yes' : 'No'}</li>
          <li><span class="font-semibold">Parking:</span> ${baseModel.parking == 1 ? 'Yes' : 'No'}</li>
          ${baseModel.website ? `<li><a href="${baseModel.website}" class="text-blue-600 visited:text-purple-600" target="_blank" rel="noopener noreferrer">Official Website</a></li>` : ''}
        </ul>
      </section>
      ${this.universityModel ? `
      <section class="cu-content max-w-3xl mx-auto my-8">
        <h3 class="text-xl font-semibold mb-4">Location Information</h3>
        ${this.universityModel.description ? `<p class="mb-4">${this.universityModel.description}</p>` : ''}
      </section>` : ''}
      ${this.refreshmentsModel ? `
      <section class="cu-content max-w-3xl mx-auto my-8">
        <h3 class="text-xl font-semibold mb-4">Refreshments Available</h3>
        ${this.refreshmentsModel.description ? `<p class="mb-4">${this.refreshmentsModel.title}</p>` : ''}
      </section>` : ''}
      ${this.accomodationModel ? `
      <section class="cu-content max-w-3xl mx-auto my-8">
        <h3 class="text-xl font-semibold mb-4">Accommodation Information</h3>
        ${this.accomodationModel.description ? `<p class="mb-4">${this.accomodationModel.description}</p>` : ''}
      </section>` : ''}
      ${this.transportationModel ? `
      <section class="cu-content max-w-3xl mx-auto my-8">
        <h3 class="text-xl font-semibold mb-4">Transportation Information</h3>
        ${this.transportationModel.description ? `<p class="mb-4">${this.transportationModel.description}</p>` : ''}
      </section>` : ''}
    `

    window.scrollTo(0, 0);
  }

  mapLink(address: string, postcode: string) {
    const trimmedPostcode = postcode ? postcode.trim() : '';
    const trimmedAddress = address ? address.trim() : '';
    const composedAddress = trimmedAddress ? trimmedAddress + ', ' + trimmedPostcode : trimmedPostcode;
    const addressEnc = encodeURIComponent(composedAddress);
    const ua = navigator.userAgent;
    let mapUrl;

    if (/iPhone|iPad|iPod/.test(ua)) {
      mapUrl = `http://maps.apple.com/?q=${addressEnc}`;
    } else if (/Android/.test(ua)) {
      mapUrl = `geo:0,0?q=${addressEnc}`;
    } else {
      mapUrl = `https://www.google.com/maps/search/?api=1&query=${addressEnc}`;
    }

    return `${composedAddress} (<a href="${mapUrl}" class="text-blue-600 visited:text-purple-600" target="_blank" rel="noopener noreferrer">View on map</a>)`;
  }
}

customElements.define('s-location', LocationScreen)