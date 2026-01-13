"use client"

import * as React from 'react';
import { useMemo } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Box, Chip, Link as MUILink } from '@mui/material';
import Data from '../../../../@mock-utils/mockTableData.json';

type TrafficType = 'direct' | 'organic' | 'social' | 'referral';
type StatusType = 'Active' | 'Paused';

export interface TableDataType {
  id: number;
  title: string;
  domain: string;
  pageVisits: number;
  uniqueVisitors: number;
  type: TrafficType;
  status: StatusType;
  createdAt: string; // ISO date
}

// if your JSON had id as strings, coerce here safely:
const allowedTypes = ['direct', 'organic', 'social', 'referral'] as const;
const allowedStatus = ['Active', 'Paused'] as const;

const rawRows = Data.tableData ?? [];

const rows: TableDataType[] = rawRows.map((r: any) => {
  // runtime guards + coercions
  const id = typeof r.id === 'string' ? Number(r.id) : r.id;
  const type: TrafficType = allowedTypes.includes(r.type) ? r.type : 'direct';
  const status: StatusType = allowedStatus.includes(r.status) ? r.status : 'Active';

  return {
    id,
    title: String(r.title ?? ''),
    domain: String(r.domain ?? ''),
    pageVisits: Number(r.pageVisits ?? 0),
    uniqueVisitors: Number(r.uniqueVisitors ?? 0),
    type,
    status,
    createdAt: String(r.createdAt ?? new Date().toISOString()),
  };
});

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
}

export default function ProjectTable() {
  const columns = useMemo<MRT_ColumnDef<TableDataType>[]>(
    () => [
      { accessorKey: 'id', header: 'ID', size: 60 },
      { accessorKey: 'title', header: 'Title', size: 220 },
      {
        accessorKey: 'domain',
        header: 'Domain',
        size: 220,
        Cell: ({ cell }) => {
          const value = cell.getValue<string>();
          const href = value.startsWith('http') ? value : `https://${value}`;
          return (
            <MUILink href={href} target="_blank" rel="noopener noreferrer" underline="hover">
              {value}
            </MUILink>
          );
        },
      },
      { accessorKey: 'pageVisits', header: 'Page Visits', size: 140 },
      { accessorKey: 'uniqueVisitors', header: 'Unique Visitors', size: 160 },
      {
        accessorKey: 'type',
        header: 'Traffic',
        size: 120,
        Cell: ({ cell }) => <Chip label={cell.getValue<string>()} size="small" />,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 110,
        Cell: ({ cell }) => {
          const val = cell.getValue<StatusType>();
          const color = val === 'Active' ? 'success' : 'default';
          return <Chip label={val} color={color} size="small" />;
        },
      },
      {
        accessorKey: 'createdAt',
        header: 'Created',
        size: 140,
        Cell: ({ cell }) => formatDate(cell.getValue<string>()),
      },
    ],
    []
  );

  return (
    <Box sx={{ p: 2 }}>
      <MaterialReactTable
        columns={columns}
        data={rows}
        enableSorting
        enableColumnFilters
        enablePagination
        enableDensityToggle
        enableRowSelection={false}
        initialState={{
          pagination: { pageIndex: 0, pageSize: 10 },
          sorting: [{ id: 'createdAt', desc: true }],
        }}
        muiTableBodyRowProps={{ hover: true }}
      />
    </Box>
  );
}
