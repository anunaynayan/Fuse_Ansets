import { motion } from "framer-motion";
import { alertVariants } from "./variants";
import { glassStyle } from "./GlassStyle";
import Button from "@mui/material/Button";


interface AlertBoxProps {
type: "success" | "error" | "warning" | "info";
message: string;
variant: keyof typeof alertVariants;
glass?: boolean;
onClose: () => void;
}


const colors = {
success: "bg-green-600 text-white",
error: "bg-red-600 text-white",
warning: "bg-yellow-500 text-black",
info: "bg-blue-600 text-white",
};


export default function AlertBox({ type, message, variant, glass, onClose }: AlertBoxProps) {
return (
<motion.div
initial={alertVariants[variant].initial}
animate={alertVariants[variant].animate}
exit={alertVariants[variant].exit}
className={`p-5 rounded-2xl flex flex-col gap-2 ${
glass ? glassStyle : colors[type]
}`}
>
<span className="font-semibold text-lg">{message}</span>


<Button variant="contained" color="inherit" onClick={onClose}>
Close
</Button>
</motion.div>
);
}