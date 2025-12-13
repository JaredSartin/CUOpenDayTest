import { defineConfig } from "vite";

export default defineConfig({
  base: "/CUOpenDayTest/", // Change to your repo name
  build: {
    rollupOptions: {
      treeshake: {
        moduleSideEffects: (id) =>
          id.includes("slick-router/components/router-links.js"),
      },
    },
  },
});
