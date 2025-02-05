<script lang="ts">
  import type { SortDirection } from "@tanstack/table-core";
  import type { ComponentProps } from "svelte";
  import { Button } from "$lib/components/ui/button";
  import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from "lucide-svelte";

  const {
    variant = "ghost",
    label,
    order,
    ...restProps
  }: ComponentProps<typeof Button> & {
    label: string;
    order: false | SortDirection;
  } = $props();
</script>

<Button {variant} {...restProps} class="px-2">
  {label}
  {#if order}
    {#if order === "asc"}
      <ArrowUpIcon strokeWidth={2.5} />
    {:else}
      <ArrowDownIcon strokeWidth={2.5} />
    {/if}
  {:else}
    <ArrowUpDownIcon strokeWidth={2.5} />
  {/if}
</Button>
