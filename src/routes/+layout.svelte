<script lang="ts">
  import "../app.css";
  import "@fontsource-variable/inter";
  import TailwindIndicator from "$lib/components/dev/tailwind-indicator.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import { ProgressBar } from "@prgm/sveltekit-progress-bar";
  import { ModeWatcher } from "mode-watcher";

  const { children } = $props();
</script>

<svelte:head>
  <title>Forum for Digital Culture</title>
  <meta
    name="description"
    content="A template by the University of Chicago Forum for Digital Culture for building SvelteKit apps"
  />
</svelte:head>

<div
  class="font-display grid min-h-[100dvh] grid-rows-[auto_1fr_auto] content-start bg-white text-neutral-900 dark:bg-black dark:text-neutral-50"
>
  <Header />
  {@render children()}
  <Footer />
</div>
<Toaster />
<ModeWatcher />
<TailwindIndicator />
<ProgressBar class="text-blue-500" displayThresholdMs={300} />
