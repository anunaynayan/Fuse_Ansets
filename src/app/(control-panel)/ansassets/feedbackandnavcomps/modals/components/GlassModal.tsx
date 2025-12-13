import { BaseModal } from "./BaseModal";

export const GlassModal = (props: any) => {
  return (
    <BaseModal
      {...props}
      className="
        backdrop-blur-xl 
        bg-white/10 
        border border-white/20 
        shadow-2xl 
        text-white
      "
    />
  );
};
