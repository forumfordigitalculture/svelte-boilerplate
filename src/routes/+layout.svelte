<script lang="ts">
  import "../app.css";
  import "@fontsource-variable/inter";
  import { browser } from "$app/environment";
  import TailwindIndicator from "$lib/components/dev/tailwind-indicator.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";
  import { Toaster } from "$lib/components/ui/sonner";
  import { ProgressBar } from "@prgm/sveltekit-progress-bar";
  import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
  import { SvelteQueryDevtools } from "@tanstack/svelte-query-devtools";
  import { ModeWatcher } from "mode-watcher";

  const { children } = $props();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        staleTime: Infinity,
      },
    },
  });
</script>

<svelte:head>
  <title>Forum for Digital Culture</title>
  <meta
    name="description"
    content="This is a SvelteKit template for the Forum for Digital Culture at the University of Chicago."
  />
</svelte:head>

<QueryClientProvider client={queryClient}>
  <SvelteQueryDevtools />
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
</QueryClientProvider>
