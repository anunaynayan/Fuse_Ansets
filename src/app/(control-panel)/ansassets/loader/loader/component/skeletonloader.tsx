// "use client";

// import { Box, Skeleton } from "@mui/material";

// export default function SkeletonLoader() {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//         gap: 4,
//       }}
//     >
//       {[1 ].map((item) => (
//         <Box key={item}>
//           <Skeleton variant="rectangular" height={150} sx={{ borderRadius: 2 }} />
//           <Skeleton height={20} sx={{ mt: 2, width: "80%" }} />
//           <Skeleton height={20} sx={{ mt: 1, width: "60%" }} />
//         </Box>
//       ))}
//     </Box>
//   );
// }




"use client";

import { Box, Skeleton } from "@mui/material";

interface SkeletonLoaderProps {
  variant:
    | "card"
    | "list"
    | "table"
    | "avatar"
    | "text"
    | "image"
    | "chip"
    | "custom";
  rows?: number;
  columns?: number;
  lines?: number;
  size?: number;
  height?: number;
  width?: number | string;
  count?: number;
  shimmer?: boolean;
}

export default function SkeletonLoader({
  variant = "card",
  rows = 4,
  columns = 3,
  lines = 3,
  size = 60,
  height = 150,
  width = "100%",
  count = 5,
  shimmer = true,
}: SkeletonLoaderProps) {
  const animation = shimmer ? "wave" : false;

  // CARD LAYOUT
  if (variant === "card") {
    return (
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: 3,
        }}
      >
        {[...Array(rows)].map((_, i) => (
          <Box key={i}>
            <Skeleton variant="rectangular" height={height} animation={animation} />
            {[...Array(lines)].map((_, j) => (
              <Skeleton key={j} height={20} animation={animation} sx={{ mt: 1 }} />
            ))}
          </Box>
        ))}
      </Box>
    );
  }

  // LIST SKELETON
  if (variant === "list") {
    return (
      <Box>
        {[...Array(rows)].map((_, i) => (
          <Box key={i} sx={{ display: "flex", gap: 2, mb: 2, alignItems: "center" }}>
            <Skeleton variant="circular" width={size} height={size} animation={animation} />
            <Box sx={{ width: "80%" }}>
              <Skeleton height={20} animation={animation} />
              <Skeleton height={20} animation={animation} sx={{ width: "60%", mt: 1 }} />
            </Box>
          </Box>
        ))}
      </Box>
    );
  }

  // TABLE SKELETON
  if (variant === "table") {
    return (
      <Box>
        {[...Array(rows)].map((_, r) => (
          <Box
            key={r}
            sx={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)` }}
          >
            {[...Array(columns)].map((_, c) => (
              <Skeleton key={c} height={40} animation={animation} sx={{ m: 1 }} />
            ))}
          </Box>
        ))}
      </Box>
    );
  }

  // IMAGE SKELETON
  if (variant === "image") {
    return (
      <Skeleton
        variant="rectangular"
        height={height}
        width={width}
        animation={animation}
        sx={{ borderRadius: 2 }}
      />
    );
  }

  // TEXT SKELETON
  if (variant === "text") {
    return (
      <Box>
        {[...Array(lines)].map((_, i) => (
          <Skeleton key={i} height={20} animation={animation} sx={{ mb: 1 }} />
        ))}
      </Box>
    );
  }

  // AVATAR ONLY
  if (variant === "avatar") {
    return <Skeleton variant="circular" width={size} height={size} animation={animation} />;
  }

  // CHIP SKELETON
  if (variant === "chip") {
    return (
      <Box sx={{ display: "flex", gap: 2 }}>
        {[...Array(count)].map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width={100}
            height={30}
            animation={animation}
            sx={{ borderRadius: 20 }}
          />
        ))}
      </Box>
    );
  }

  return <Skeleton variant="rectangular" height={height} width={width} animation={animation} />;
}
