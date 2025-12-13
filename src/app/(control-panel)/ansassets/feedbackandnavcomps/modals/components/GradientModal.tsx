import { BaseModal } from "./BaseModal";

export const GradientModal = (props: any) => {
  return (
    <BaseModal
      {...props}
      className="
        bg-gradient-to-br 
        from-purple-500/20 
        to-fuchsia-600/20 
        border border-purple-400/20 
        text-white
      "
    />
  );
};
