<script lang="ts">
  import type { PageData } from "./$types";
  import { columns } from "./columns";
  import DataTable from "./data-table.svelte";

  export let data: PageData;

  const set = data.set;
  const title = data.title;
</script>

<main
  class="mx-auto grid max-w-4xl content-start items-center justify-center px-2 py-4"
>
  {#if set != null}
    <h1 class=" pt-1 pb-4 text-center font-serif text-2xl font-semibold">
      {title}
    </h1>
    <DataTable data={set} {columns} />
  {:else}
    <div class="py-6 text-center text-xl font-semibold">No set found</div>
  {/if}
</main>
