"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import SpinnerLoader from "../loader/component/spinnerloader";
import LinearLoader from "../loader/component/linearloader";
import DotBounceLoader from "../loader/component/dotBounceLoader";
import SkeletonLoader from "../loader/component/skeletonloader";


export default function DrawerDocs() {
  
  return (
    <DocsLayout>
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
      Loader components are essential UI elements that indicate ongoing processes, enhancing user experience by providing visual feedback during data fetching or processing tasks. This documentation covers various loader types, including Spinner, Linear Progress, Skeleton (Shimmer), and Dot Bounce loaders, detailing their implementation and usage within applications.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Loader:
        </Typography>

        <Typography variant="h6" className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>react</li>
          <li>next</li>
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>

        <CodeBlock 
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material`}
        />
      </section>

      {/* ------------------------ Spinner Loader SECTION ------------------------ */}
      <section id="spinnerloader" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Spinner Loader
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          The Spinner Loader component provides a visual indication of loading or processing states using a spinning animation.
        </Typography>

        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <SpinnerLoader />
        </Box>

        <CodeBlock
          filename="spinnerloader.tsx"
          language="tsx"
          code={`"use client";
          
          import { Box, CircularProgress, Typography } from "@mui/material";
          
          export default function SpinnerLoader() {
            return (
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: 2,
                  py: 4,
                }}
              >
                <CircularProgress size={45} thickness={4} />
                <Typography color="text.secondary">Loading...</Typography>
              </Box>
            );
          }`}
        />
      </section>


{/* ------------------------ skeletton Loader SECTION ------------------------ */}
   
  <section id="linearloader" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Linear Loader
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          The Linear Loader component provides a visual indication of loading or processing states using a spinning animation.
        </Typography>

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview 
        </Typography>


        <Box className="mb-4 max-w-sm mx-auto">
         <LinearLoader />
        </Box>

        <CodeBlock
          filename="linearloader.tsx"
          language="tsx"
          code={`"use client";
          
          import { Box, LinearProgress, Typography } from "@mui/material";
          
          export default function LinearLoader() {
            return (
              <Box sx={{ width: "100%", py: 4 }}>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, textAlign: "center", color: "text.secondary" }}
                >
                  Loading…
                </Typography>
                <LinearProgress />
              </Box>
            );
          }
          `}
        />
      </section>


      {/* ------------------------- dot bounce Loader SECTION ------------------------ */}
       <section id="dotbounceloader" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Dot Bounce Loader
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          The  Dot Bounce Loader component provides a visual indication of loading or processing states using a spinning animation.
        </Typography>

        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
         <DotBounceLoader />
        </Box>

      <CodeBlock
  filename="dotbounceloader.tsx"
  language="tsx"
  code={String.raw`
"use client";

import { Box } from "@mui/material";

export default function DotBounceLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 1,
        py: 5,
      }}
    >
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 10,
            height: 10,
            borderRadius: "50%",
            backgroundColor: "primary.main",
            animation: \`bounce 0.6s infinite \${i * 0.15}s\`,
            "@keyframes bounce": {
              "0%, 80%, 100%": { transform: "scale(0)" },
              "40%": { transform: "scale(1)" },
            },
          }}
        />
      ))}
    </Box>
  );
}
`}
 />

          
      </section>
      

  {/* ------------------------ skeletton Loader SECTION ------------------------ */}

  <section id="skeletonloader" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
         Sckeleton Loader
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          The Skeleton Loader component provides a visual indication of loading or processing states using a skeleton screen animation.
        </Typography>

        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <SkeletonLoader variant="card" rows={1} lines={2} />
        </Box>

      <CodeBlock
  filename="dotbounceloader.tsx"
  language="tsx"
  code={String.raw`
"use client";

import { Box, Skeleton } from "@mui/material";

export default function SkeletonLoader() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: 4,
      }}
    >
      {[1, 2, 3, 4].map((item) => (
        <Box key={item}>
          <Skeleton variant="rectangular" height={150} sx={{ borderRadius: 2 }} />
          <Skeleton height={20} sx={{ mt: 2, width: "80%" }} />
          <Skeleton height={20} sx={{ mt: 1, width: "60%" }} />
        </Box>
      ))}
    </Box>
  );
}

`}
 />         
      </section>
      
    </DocsLayout>
  );
}
