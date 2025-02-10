<script lang="ts">
  import { dev } from "$app/environment";
  import { persisted } from "svelte-persisted-store";
  import { innerHeight, innerWidth } from "svelte/reactivity/window";

  const isVisible = persisted("tailwind-indicator", true);

  function onkeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.altKey) {
      isVisible.update((value) => !value);
    }
  }
</script>

{#if isVisible && innerWidth.current && innerHeight.current && dev}
  <button
    onclick={() => {
      isVisible.update((value) => !value);
    }}
    class="hover-xs active-md right-18 z-99999999 fixed bottom-2 flex cursor-pointer items-center space-x-2 rounded-sm bg-neutral-800 py-1 pl-2.5 pr-1 font-mono text-xs font-medium text-white opacity-90 shadow-lg"
  >
    <span>w: {innerWidth.current.toLocaleString("en-US")}</span>
    <div class="h-4 w-[1.5px] rounded-lg bg-neutral-400"></div>
    <span>h: {innerHeight.current.toLocaleString("en-US")}</span>
    <div class="h-4 w-[1.5px] rounded-lg bg-neutral-400"></div>
    <span class="sm:hidden">xs</span>
    <span class="hidden sm:inline md:hidden">sm</span>
    <span class="hidden md:inline lg:hidden">md</span>
    <span class="hidden lg:inline xl:hidden">lg</span>
    <span class="hidden xl:inline 2xl:hidden">xl</span>
    <span class="hidden 2xl:inline">2xl</span>
  </button>
{/if}

<svelte:window {onkeydown} />
