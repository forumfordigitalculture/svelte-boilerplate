<script lang="ts">
  import { MoonIcon, SunIcon } from "lucide-svelte";
  import { toggleMode } from "mode-watcher";
</script>

<nav
  class="grid grid-flow-col items-center justify-between bg-brand-900 px-3.5 py-4 text-brand-50"
>
  <a href="/" class="text-lg font-semibold tracking-wide">
    Forum for Digital Culture
  </a>
  <button onclick={toggleMode} class="grid items-center justify-center">
    <SunIcon
      class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
    />
    <MoonIcon
      class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
    />
    <span class="sr-only">Toggle theme</span>
  </button>
</nav>
