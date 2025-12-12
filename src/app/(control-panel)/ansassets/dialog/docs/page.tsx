"use client";

import { Box, Typography } from "@mui/material";

import { Dialog } from "../dialog/dialog";
import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import DialogApp from "../dialog/page";



export default function TooltipDocs() {
  return (
    <DocsLayout
      title="Dialog Documentation"
      backLink="/ansassets/dialog/dialog"
      backText="Back to Dialog"   
    >
      {/* ------------------------ DESCRIPTION ------------------------ */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        The Dialog component is a reusable modal dialog built with React and Material-UI. It supports custom content, actions, and title, with smooth fade-in/out animations. It is fully responsive and includes features like closing on ESC key or clicking outside, and automatically disables background scroll while open.

It is suitable for displaying alerts, confirmations, forms, details, or any custom content in a modal overlay.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Tooltip component:
        </Typography>

        <Typography variant="h6" className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react</li>
          <li>next</li>         
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material  @mui/icons-material`}
        />
      </section>


{/* ------------------------ Preview SECTION ------------------------ */}


<section id="dialog" className="mb-16">
       

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
           Preview
        </Typography>

          <Box className="mb-4 max-w-sm mx-auto">
                    <DialogApp/>
        </Box>
     
      </section>


{/* ------------------------ Uses SECTION ------------------------ */}

<section id="dialog" className="mb-16">
       

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
           Example Uses
        </Typography>

           <CodeBlock
          filename="App.tsx"
          language="bash"
          code={` 
            import { useState } from "react";
import { Dialog } from "./Dialog";
import { Button } from "@mui/material";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>

      <Dialog
        open={open}
        title="Basic Dialog"
        content={<p>This is a simple dialog content.</p>}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

`}
        />
     
      </section>


      {/* ------------------------ Props SECTION ------------------------ */}

<section id="dialog" className="mb-16">
       

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
           Props
        </Typography>


<Box className="overflow-x-auto mb-8">
  <table className="min-w-full table-auto border border-gray-300 dark:border-gray-700">
    <thead className="bg-gray-100 dark:bg-gray-800">
      <tr>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Name</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Type</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Default</th>
        <th className="px-4 py-2 border-b border-gray-300 dark:border-gray-700 text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">open</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">false</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Controls whether the dialog is visible.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">title</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Optional title displayed in the dialog header.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">content</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">ReactNode</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">The main content of the dialog (text, form, or components).</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">actions</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">ReactNode</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">undefined</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Optional footer actions (e.g., buttons like Submit, Cancel).</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">maxWidth</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">number</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">500</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Maximum width of the dialog in pixels.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">onClose</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">() => void</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">required</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Function called when the dialog is closed (via close button, ESC key, or backdrop click).</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">closeOnOutsideClick</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">boolean</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">true</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">If true, clicking outside the dialog closes it. Set false to make modal non-dismissible.</td>
      </tr>
    </tbody>
  </table>
</Box>




           
           </section>














      {/* ------------------------ Complete code SECTION ------------------------ */}
      <section id="tooltip" className="mb-16">
       

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Complete Component Code
        </Typography>



       

        <CodeBlock
          filename="Dialog.tsx"
          language="tsx"
          code={String.raw`
            
            "use client";
            
            import React, { ReactNode, useEffect } from "react";
            import { Fade, IconButton, Backdrop } from "@mui/material";
            import CloseIcon from "@mui/icons-material/Close";
            
            interface DialogProps {
              open: boolean;
              title?: string;
              content?: ReactNode;
              actions?: ReactNode;
              maxWidth?: number;
              onClose: () => void;
              closeOnOutsideClick?: boolean;
            }
            
            export function Dialog({
              open,
              title,
              content,
              actions,
              onClose,
              maxWidth = 500,
              closeOnOutsideClick = true,
            }: DialogProps) {
            
             
              useEffect(() => {
                if (open) document.body.style.overflow = "hidden";
                else document.body.style.overflow = "auto";
                return () => {
                  document.body.style.overflow = "auto";
                };
              }, [open]);
            
              
              useEffect(() => {
                const handleEsc = (e: KeyboardEvent) => {
                  if (e.key === "Escape") onClose();
                };
                if (open) document.addEventListener("keydown", handleEsc);
                return () => document.removeEventListener("keydown", handleEsc);
              }, [open, onClose]);
            
              if (!open) return null;
            
              return (
                <Fade in={open} timeout={200}>
                  <Backdrop
                    open={open}
                    sx={{ zIndex: 2000 }}
                    onClick={closeOnOutsideClick ? onClose : undefined}
                  >
                   
                    <div
                      className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl w-[90%] max-h-[90vh] overflow-hidden flex flex-col"
                      style={{ maxWidth }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      
                      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
                        <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
                          {title}
                        </h2>
            
                        <IconButton onClick={onClose} size="small">
                          <CloseIcon className="text-neutral-700 dark:text-neutral-200" />
                        </IconButton>
                      </div>
            
                      
                      <div className="p-5 overflow-y-auto text-neutral-700 dark:text-neutral-200">
                        {content}
                      </div>
            
                      
                      {actions && (
                        <div className="flex justify-end gap-3 px-4 py-3 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
                          {actions}
                        </div>
                      )}
                    </div>
                  </Backdrop>
                </Fade>
              );
            }                     
`}
        />
      </section>
    </DocsLayout>
  );
}
