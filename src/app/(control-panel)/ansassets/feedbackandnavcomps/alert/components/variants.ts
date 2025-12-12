export const alertVariants = {
fade: {
initial: { opacity: 0 },
animate: { opacity: 1 },
exit: { opacity: 0 },
},
slide: {
initial: { opacity: 0, y: -20 },
animate: { opacity: 1, y: 0 },
exit: { opacity: 0, y: -20 },
},
scale: {
initial: { opacity: 0, scale: 0.85 },
animate: { opacity: 1, scale: 1 },
exit: { opacity: 0, scale: 0.85 },
},
bounce: {
initial: { opacity: 0, scale: 0.8 },
animate: { opacity: 1, scale: 1, transition: { type: "spring", bounce: 0.45 } },
exit: { opacity: 0, scale: 0.8 },
},
};