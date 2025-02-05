import type { ColumnDef } from "@tanstack/table-core";
import { renderComponent } from "$lib/components/ui/data-table";
import SortButton from "$lib/components/ui/data-table/sort-button.svelte";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RasShamraTablet = {
  name: string;
  objectType: string;
  museumNumber: string;
  fullTeoFindspot: string;
  script: string;
  language: string;
  size: string;
};

export const columns: Array<ColumnDef<RasShamraTablet>> = [
  {
    accessorKey: "name",
    header: ({ column }) =>
      renderComponent(SortButton, {
        onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        label: "Name",
        order: column.getIsSorted(),
      }),
    enableSorting: true,
  },
  {
    accessorKey: "objectType",
    header: ({ column }) =>
      renderComponent(SortButton, {
        onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        label: "Object type",
        order: column.getIsSorted(),
      }),
    enableSorting: true,
  },
  {
    accessorKey: "museumNumber",
    header: ({ column }) =>
      renderComponent(SortButton, {
        onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        label: "Museum Number",
        order: column.getIsSorted(),
      }),
    enableSorting: true,
  },
  {
    accessorKey: "fullTeoFindspot",
    header: ({ column }) =>
      renderComponent(SortButton, {
        onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        label: "Full TEO Findspot",
        order: column.getIsSorted(),
      }),
    enableSorting: true,
  },
  {
    accessorKey: "script",
    header: ({ column }) =>
      renderComponent(SortButton, {
        onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        label: "Script",
        order: column.getIsSorted(),
      }),
    enableSorting: true,
  },
  {
    accessorKey: "language",
    header: ({ column }) =>
      renderComponent(SortButton, {
        onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        label: "Language",
        order: column.getIsSorted(),
      }),
    enableSorting: true,
  },
  {
    accessorKey: "size",
    header: ({ column }) =>
      renderComponent(SortButton, {
        onclick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        label: "Size",
        order: column.getIsSorted(),
      }),
    enableSorting: true,
  },
];
