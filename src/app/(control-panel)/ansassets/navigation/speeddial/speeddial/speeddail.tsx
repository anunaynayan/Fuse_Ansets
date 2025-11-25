// "use client";

// import React from "react";
// import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

// export type SpeedDialPosition =
//   | "bottom-right"
//   | "bottom-left"
//   | "top-right"
//   | "top-left"
//   | "center-bottom"
//   | "center-top";

// export interface SpeedDialActionItem {
//   key: string;
//   icon: React.ReactNode;
//   label?: string;
//   onClick?: (e?: React.MouseEvent | React.KeyboardEvent) => void;
//   disabled?: boolean;
// }

// export interface SpeedDialFloatingProps {
//   actions: SpeedDialActionItem[];
//   position?: SpeedDialPosition;
//   direction?: "up" | "down" | "left" | "right";
//   size?: "small" | "medium" | "large";

//   backgroundColor?: string;   
//   hoverColor?: string;        
//   iconColor?: string;    



//   open?: boolean;
//   defaultOpen?: boolean;
//   onOpen?: () => void;
//   onClose?: () => void;
//   ariaLabel?: string;
//   className?: string;
// }

// const positionStyle = (position: SpeedDialPosition) => {
//   const base: any = {  zIndex: 1400 };

//   switch (position) {
//     case "bottom-right":
//       return { ...base, bottom: 16, right: 16 };
//     case "bottom-left":
//       return { ...base, bottom: 16, left: 16 };
//     case "top-right":
//       return { ...base, top: 16, right: 16 };
//     case "top-left":
//       return { ...base, top: 16, left: 16 };
//     case "center-bottom":
//       return { ...base, bottom: 16, left: "50%", transform: "translateX(-50%)" };
//     case "center-top":
//       return { ...base, top: 16, left: "50%", transform: "translateX(-50%)" };
//     default:
//       return { ...base, bottom: 16, right: 16 };
//   }
// };

// export default function SpeedDialFloating({
//   actions,
//   position="bottom-left" ,
//   direction  ="up",
//   size ="medium" ,
//   open,
//   defaultOpen = false,
//   onOpen,
//   onClose,
//   ariaLabel = "SpeedDial Actions",
//   className = "",
// }: SpeedDialFloatingProps) {
//   const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
//   const controlled = typeof open === "boolean";
//   const isOpen = controlled ? open! : internalOpen;

//   const openHandler = () => {
//     if (!controlled) setInternalOpen(true);
//     onOpen?.();
//   };

//   const closeHandler = () => {
//     if (!controlled) setInternalOpen(false);
//     onClose?.();
//   };

//   // keyboard handling: ESC = close, Enter/Space = toggle

//   const wrapperRef = React.useRef<HTMLDivElement>(null);
//   React.useEffect(() => {
//     const el = wrapperRef.current;
//     if (!el) return;

//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         closeHandler();
//       }
//       if (e.key === "Enter" || e.key === " ") {
//         e.preventDefault();
//         isOpen ? closeHandler() : openHandler();
//       }
//     };

//     el.addEventListener("keydown", handleKey);
//     return () => el.removeEventListener("keydown", handleKey);
//   }, [isOpen]);


//   return (
//     <div ref={wrapperRef} className={className}>
//       <SpeedDial
//         ariaLabel={ariaLabel}
//         sx={positionStyle(position)}
//         icon={<SpeedDialIcon />}
//         direction={direction}
//         onOpen={openHandler}
//         onClose={closeHandler}
//         open={isOpen}
//         FabProps={{ size: size}}
//       >
//         {actions.map((item) => (
//           <SpeedDialAction 
//             key={item.key}
//             icon={item.icon}
//             tooltipTitle={item.label}
//             onClick={(e) => {
//               item.onClick?.(e);
//               closeHandler(); 
//             }}
//             disabled={item.disabled}
//           />
//         ))}
//       </SpeedDial>
//     </div>
//   );
// }



