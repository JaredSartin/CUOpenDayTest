
class TopicScreen extends HTMLElement {
  model: any;
  eventModel: any;

  beforeRouteEnter(transition: any) {
    this.eventModel = window.CUEvents.OpenDay;
    this.model = window.CUEvents.OpenDay.topics.find((topic: any) => topic.id == transition.params.topicId);

    if (!this.model) {
      transition.redirectTo('error')
    }
  }

  connectedCallback() {
    this.innerHTML = `
      <c-page-header titletext="${this.model.name}" secondarytext="${this.eventModel.description}" background="${this.model.cover_image}"></c-page-header>
      <section class="cu-content max-w-3xl mx-auto my-8">
        ${this.model.description ? `<p class="mb-4">${this.model.description}</p>` : ''}
      </section>
      <section class="cu-content max-w-3xl mx-auto my-8">
        <h2 class="text-2xl font-semibold mb-4">Programs</h2>
        <ul class="list-disc list-inside text-sm">
          ${this.model.programs.map((prog: any) => prog && prog.title ? `
            <details class="group border p-4 rounded-lg mb-4 hover:bg-cardiff-light transition">
              <summary class="cursor-pointer flex flex-col">
                ${prog.programType.type ?`<p class="italic">${prog.programType.type}</p>` : ''}
                <h4 class="text-lg">${prog.title}</h4>
                ${prog.start_time ? `<p><span class="font-semibold">Time:</span> ${this.parseTime(prog.start_time)}${prog.end_time ? ' - ' + this.parseTime(prog.end_time, false) : ''}</p>` : ''}
              </summary>

              <div class="mt-3 opacity-0 group-open:opacity-100 transition-all duration-300">
                <hr/>
                ${prog.school ? `<p class="italic mt-2 mb-2">${prog.school.name}</p>` : ''}
                ${prog.description ? `<p class="mt-2 mb-2">${prog.description}</p>` : ''}
                <p><span class="font-semibold">Building:</span> ${prog.location.title} (<a href="${this.$router.generate('location', { locationId: prog.location.id })}" class="text-blue-600 visited:text-purple-600">Location details</a>)</p>
                ${prog.floor ? `<p><span class="font-semibold">Floor:</span> ${prog.floor}</p>` : ''}
                ${prog.room ? `<p><span class="font-semibold">Room:</span> ${prog.room}</p>` : ''}
              </div>
            </details>
          ` : '').join('')}
        </ul>
      </section>
    `
  }

  parseTime(timeStr: string, fullDate: boolean = true) {
    const date = new Date(timeStr)
    if (fullDate) {
      return date.toLocaleString(undefined, { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    } else {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  }
}

customElements.define('s-topic', TopicScreen)