"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "@/components/documetation/CodeBlock";
import DocsLayout from "@/components/documetation/DocsLayout";

 import { useEffect, useState } from "react";
import FileUploadPage from "../file/page";


export default function FileUploaderDocs() {

   const [code, setCode] = useState<string>("");
  
    useEffect(() => {
      fetch("/snippets/file-uploade.txt")
        .then((r) => r.text())
        .then(setCode);
    }, []);
  

  return (
    <DocsLayout
        title="File Uploader Documentation"
        backLink="/ansassets/file-uploader/file"
        backText="Back to File Uploader"
        
    
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        File Uploader is a component that provides a way to upload files.
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
          These are the necessary dependencies and technologies for the Drawer:
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
          code={`npm install @mui/material @mui/icons-material `}
        />
      </section>

      {/* ------------------------ Preview SECTION ------------------------ */}
      <section id="drawer" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        

        <Box className=" h-80  ">
              <FileUploadPage/>
        </Box>

        
      </section>

        
        {/* ------------------------ Uses SECTION ------------------------ */}
      
      <section id="uses" className="mb-16">
 <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
         Uses Example
        </Typography> 

        <CodeBlock
          filename="App.tsx"
          language="tsx"
          code={`
                "use client";
                import FileUploader from "@/components/file-uploader";
                export default function App() {
                  return (
                    <FileUploader
                      onFileUpload={(uploadedFile) => setFile(uploadedFile)}
                      acceptType="both"
                      label="Upload"
                    />
                  );
                }
               
            
            `}
        />

        </section>

{/* ------------------------ Props Section ------------------------ */}

      <section id="props" className="mb-16">
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
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">onFileUpload</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">(file: File | null) </td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">—</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Callback invoked when a file is uploaded, replaced, or removed.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">label</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">string</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"Upload"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Text label displayed in the dropzone when no file is selected.</td>
      </tr>
      <tr>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">acceptType</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"image" | "file" | "both"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">"both"</td>
        <td className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">Specifies the types of files allowed: images only, files only, or both.</td>
      </tr>
    </tbody>
  </table>
</Box>





        </section>



{/* ------------------------ Complete Code SECTION ------------------------ */}
      <section id="completecode" className="mb-16" > 
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Complete Componnet  Code
          </Typography>

         
       <CodeBlock
          filename="FileUploader.tsx"
          language="tsx"
          code={code}
        />

          </section>




    </DocsLayout>
  );
}
