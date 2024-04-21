"use client";

import { api } from "~/trpc/react";
import {
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { cbPlaceholder, type CB_Currency } from "~/types/cb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const columnHelper = createColumnHelper<CB_Currency>();
const placeholderArray = Array.from({ length: 150 }).map(() => cbPlaceholder);

const ExtOverview = () => {
  const { data } = api.currencies.getCurrencies.useQuery();

  const table = useReactTable<CB_Currency>({
    columns: defaultColumns,
    data: data?.data ?? placeholderArray,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ExtOverview;

const cellValueHelper = (value: string | number) => {
  if (value !== "placeholder" && value !== -69) {
    return value;
  } else {
    return (
      <div className="bg-foreground/40 h-6 w-full animate-pulse rounded-md"></div>
    );
  }
};

const defaultColumns = [
  // Grouping Column
  columnHelper.accessor("display_name", {
    cell: (info) => cellValueHelper(info.getValue()),
    header: "Short Name",
  }),
  columnHelper.accessor("name", {
    cell: (info) => cellValueHelper(info.getValue()),
    header: "Full Name",
  }),
  columnHelper.accessor("status", {
    cell: (info) => cellValueHelper(info.getValue()),
    header: "Status",
  }),
  columnHelper.accessor("details.max_withdrawal_amount", {
    cell: (info) => cellValueHelper(info.getValue()),
    header: "Max Withdrawal",
  }),
];
