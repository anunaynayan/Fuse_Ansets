"use client";

import { Pagination, MenuItem, Select } from "@mui/material";
import { useMemo, useEffect } from "react";

interface PaginationWrapperProps<T> {
  data: T[];
  totalItems?: number;
  page: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  renderItem: (item: T) => React.ReactNode;
  compact?: boolean;
  serverMode?: boolean;

  pageSizeOptions?: number[]; // 🔥 dynamic
}

export function PaginationWrapper<T>({
  data,
  totalItems,
  page,
  itemsPerPage,
  onPageChange,
  onPageSizeChange,
  renderItem,
  compact = false,
  serverMode = false,
  pageSizeOptions = [5, 10, 20, 50], // DEFAULT
}: PaginationWrapperProps<T>) {
  
  const total = serverMode ? totalItems || 0 : data.length;

  const totalPages = Math.ceil(total / itemsPerPage);


  useEffect(() => {
    if (page > totalPages && totalPages > 0) {
      onPageChange(1);
    }
  }, [itemsPerPage, totalPages]);

  
  const paginatedData = useMemo(() => {
    if (serverMode) return data;
    return data.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  }, [data, page, itemsPerPage, serverMode]);


  return (
    <div className={`w-full ${compact ? "p-2" : "p-4"} space-y-6`}>
      
      {/* Items Grid */}
      <div
        className={`grid 
        grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        ${compact ? "gap-2" : "gap-4"}`}
      >
        {paginatedData.map((item, index) => (
          <div key={index}>{renderItem(item)}</div>
        ))}
      </div>

      {/* Footer Controls */}
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-3
        bg-white p-4 rounded-xl shadow-sm border border-gray-200"
      >

        {/* Rows Per Page Selector */}
        {onPageSizeChange && (
          <div className="flex items-center gap-2 mb-3 md:mb-0">
          

            <Select
              size="small"
              value={itemsPerPage}
              onChange={(e) => {
                const size = Number(e.target.value);
                onPageSizeChange(size); // parent will reset page
              }}
              className="bg-white"
            >
              {pageSizeOptions.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </Select>
          </div>
        )}

        {/* Pagination Buttons */}
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => onPageChange(value)}
          showFirstButton
          showLastButton
          color="primary"
          size={compact ? "small" : "medium"}
          className="bg-white rounded-xl px-3 py-2 shadow-sm"
        />
      </div>
    </div>
  );
}
