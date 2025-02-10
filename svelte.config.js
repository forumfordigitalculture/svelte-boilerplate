import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex()],
  kit: {
    adapter: adapter(),
    router: { resolution: "server" },
  },
  vitePlugin: {
    inspector: {
      hold: true,
      toggleKeyCombo: "meta-shift",
    },
  },
  extensions: [".svelte", ".svx"],
};

export default config;
