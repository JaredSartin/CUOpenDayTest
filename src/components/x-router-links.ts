// This is a direct copy of slick-router's router-links component with minimal changes.
// It is included here to prevent issues with tree-shaking during the build process.
// CHANGE: this import path has been updated to reflect local project structure.
import { bindRouterLinks } from "slick-router/middlewares/router-links.js";

class RouterLinks extends HTMLElement {
  connectedCallback() {
    // Register the web component using bindRouterLinks
    this.unbindRouterLinks = bindRouterLinks(this, {
      params: this.params,
      query: this.query,
    });
  }

  disconnectedCallback() {
    // Call the return of bindRouterLinks when disconnected
    if (typeof this.unbindRouterLinks === "function") {
      this.unbindRouterLinks();
      this.unbindRouterLinks = undefined;
    }
  }
}

// CHANGE: If Block - Prevent re-defining the custom element in dev.
if (!customElements.get("router-links")) {
  customElements.define("router-links", RouterLinks);
}