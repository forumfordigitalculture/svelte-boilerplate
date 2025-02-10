<script lang="ts">
  import { MoonIcon, SunIcon } from "lucide-svelte";
  import { toggleMode } from "mode-watcher";
</script>

<nav
  class="grid grid-flow-col items-center justify-between bg-neutral-800 px-3.5 py-4 text-neutral-50"
>
  <a href="/" class="text-lg font-semibold tracking-wide">
    Forum for Digital Culture
  </a>
  <button onclick={toggleMode} class="grid items-center justify-center">
    <SunIcon
      class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
    />
    <MoonIcon
      class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
    />
    <span class="sr-only">Toggle theme</span>
  </button>
</nav>
