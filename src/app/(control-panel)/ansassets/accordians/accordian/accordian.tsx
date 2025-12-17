// "use client";
// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   IconButton,
//   useTheme,
//   Skeleton,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { motion, AnimatePresence } from "framer-motion";


// const MotionBox = motion(Box);

// interface AccordionItem {
//   id: number;
//   title: string;
//   content: string;
// }

// interface AccordionProps {
//   data: AccordionItem[];
//   loading?: boolean;
// }

// const Accordion: React.FC<AccordionProps> = ({ data, loading }) => {
//   const [openId, setOpenId] = useState<number | null>(null);
//   const theme = useTheme();

//   const toggleAccordion = (id: number) => {
//     setOpenId(openId === id ? null : id);
//   };

//   if (loading) {
//     return (
//       <Box maxWidth={600} mx="auto" mt={5}>
//         {[1, 2, 3].map((n) => (
//           <Skeleton key={n} height={90} sx={{ mb: 2, borderRadius: 2 }} />
//         ))}
//       </Box>
//     );
//   }

//   return (
//     <Box maxWidth={600} mx="auto" mt={5}>
//       {data.map((item) => (
//         <Box
//           key={item.id}
//           border={1}
//           borderColor="grey.300"
//           borderRadius={2}
//           mb={2}
//         >
//           {/* Header */}
//           <Box
//             px={2}
//             py={1.5}
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             bgcolor="grey.100"
//             onClick={() => toggleAccordion(item.id)}
//             sx={{ cursor: "pointer" }}
//           >
//             <Typography>{item.title}</Typography>

//             <IconButton
//               size="small"
//               sx={{
//                 transform: openId === item.id ? "rotate(180deg)" : "rotate(0deg)",
//                 transition: "0.3s",
//               }}
//             >
//               <ExpandMoreIcon />
//             </IconButton>
//           </Box>

//           {/* Content */}
//           <AnimatePresence>
//             {openId === item.id && (
//               <MotionBox
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0 }}
//                 px={2}
//                 py={2}
//               >
//                 <Typography>{item.content}</Typography>
//               </MotionBox>
//             )}
//           </AnimatePresence>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default Accordion;




"use client";
import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { AccordionProps } from "./Accordion.types";
import { accordionVariants } from "./accordionVariants";
import AccordionItem from "./AccordionItem";
import AccordionSkeleton from "./AccordionSkeleton";

export default function Accordion({
  data,
  loading,
  variant = "default",
  multiple = false,
  defaultOpenIds = [],
  disableAnimation = false,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<number[]>(defaultOpenIds);
  const theme = useTheme();
  const config = accordionVariants[variant];

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      multiple
        ? prev.includes(id)
          ? prev.filter((i) => i !== id)
          : [...prev, id]
        : prev.includes(id)
        ? []
        : [id]
    );
  };

  if (loading) return <AccordionSkeleton />;

  return (
    <Box maxWidth={600} mx="auto">
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggle(item.id)}
          config={config}
          disableAnimation={disableAnimation}
        />
      ))}
    </Box>
  );
}
