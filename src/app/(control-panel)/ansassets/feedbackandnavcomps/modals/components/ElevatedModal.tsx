import { BaseModal } from "./BaseModal";

export const ElevatedModal = (props: any) => {
  return (
    <BaseModal
      {...props}
      className="
        shadow-[0_0_40px_10px_rgba(0,0,0,0.6)]
      "
    />
  );
};
