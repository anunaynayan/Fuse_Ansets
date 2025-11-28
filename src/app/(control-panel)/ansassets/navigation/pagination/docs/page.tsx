"use client";

import CodeBlock from "@/components/documetation/CodeBlock";
import DocsLayout from "@/components/documetation/DocsLayout";
import { Box, Typography } from "@mui/material";
import  {PaginationWrapper}  from "../pagination/pagination";
import { useEffect, useState } from "react";



export default function PaginationDocs() {

 const [code, setCode] = useState<string>("");
  
    useEffect(() => {
      fetch("/snippets/pagination.txt")
        .then((r) => r.text())
        .then(setCode);
    }, []);
  



  return (
    <DocsLayout
       title="Pagination Documentation" 
       backLink="/ansassets/navigation/pagination/pagination"
       backText="Back to Pagination"
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        PaginationWrapper is a reusable pagination utility component built using Material-UI Pagination + Select.
It supports client-side pagination (auto-slice data) and server-side pagination (API data).
It also allows dynamic page size options, compact mode UI, and fully custom render logic for each item.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Loader:
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mb-2 text-gray-800 dark:text-gray-100"
        >
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react</li>
          <li>next</li>
        </ul>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material @mui/icons-material`}
        />
      </section>

      {/* ------------------------ Floating Toolbar SECTION ------------------------ */}
      <section id="spinnerloader" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
         <PaginationWrapper data={[]} page={0} itemsPerPage={0} onPageChange={function (page: number): void {
            throw new Error("Function not implemented.");
          } } renderItem={function (item: unknown): React.ReactNode {
            throw new Error("Function not implemented.");
          } }/>
        </Box>

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Example Uses
        </Typography>

        <CodeBlock
          filename="example.tsx"
          language="tsx"
          code={`
           const [page, setPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

<PaginationWrapper
  data={users}
  page={page}
  itemsPerPage={pageSize}
  onPageChange={(p) => setPage(p)}
  onPageSizeChange={(size) => {
    setPageSize(size);
    setPage(1); // reset page
  }}
  renderItem={(user) => (
    <div className="p-4 border rounded-lg">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )}
/>

                 
            `}
        />







        {/* --------------Props Sections-------------- */}
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100 mt-10"
        >
          Props
        </Typography>

        <Box className="overflow-auto">
  <table className="min-w-full border border-gray-300 dark:border-gray-700 text-left">
    <thead>
      <tr className="bg-gray-100 dark:bg-gray-800">
        <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
          Name
        </th>
        <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
          Type
        </th>
        <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
          Default
        </th>
        <th className="py-3 px-4 border-b border-gray-300 dark:border-gray-700 font-semibold">
          Description
        </th>
      </tr>
    </thead>

    <tbody className="text-gray-700 dark:text-gray-200">

      {/* data */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          data
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          T[]
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          required
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Array of items to display inside pagination grid.
        </td>
      </tr>

      {/* totalItems */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          totalItems
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          number
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          0
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Total item count returned from server (only used when serverMode is true).
        </td>
      </tr>

      {/* page */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          page
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          number
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          required
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Current page number (1-based indexing).
        </td>
      </tr>

      {/* itemsPerPage */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          itemsPerPage
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          number
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          required
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Number of items displayed per page.
        </td>
      </tr>

      {/* onPageChange */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          onPageChange
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          (page: number) ⇒ void
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          required
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Callback fired when the page is changed.
        </td>
      </tr>

      {/* onPageSizeChange */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          onPageSizeChange
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          (size: number) ⇒ void
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          undefined
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Callback when rows-per-page selector changes. If provided, page resets to 1.
        </td>
      </tr>

      {/* renderItem */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          renderItem
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          (item: T) ⇒ ReactNode
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          required
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Rendering function for each list item inside the pagination grid.
        </td>
      </tr>

      {/* compact */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          compact
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          boolean
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          false
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Enables compact spacing and smaller pagination controls.
        </td>
      </tr>

      {/* serverMode */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          serverMode
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          boolean
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          false
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          Enables server-side pagination. Component does not slice data automatically.
        </td>
      </tr>

      {/* pageSizeOptions */}
      <tr>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          pageSizeOptions
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          number[]
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          [5, 10, 20, 50]
        </td>
        <td className="py-2 px-4 border-b border-gray-300 dark:border-gray-700">
          List of selectable values for rows per page in the dropdown.
        </td>
      </tr>

    </tbody>
  </table>
</Box>


        {/* -Complete code section */}

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100 mt-10"
        >
          Complete Component Code
        </Typography>

        <CodeBlock
          filename="pagination.tsx"
          language="tsx"
          code= {    code     }
        />
      </section>
    </DocsLayout>
  );
}
