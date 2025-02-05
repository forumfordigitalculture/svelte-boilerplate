import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import TurboConsole from "unplugin-turbo-console/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [TurboConsole(), tailwindcss(), sveltekit()],
});
