import { BaseModal } from "./BaseModal";

export const AnimatedModal = (props: any) => {
  return (
    <BaseModal
      {...props}
      animation="slideUp"
    //   className="bg-gray-900 text-white"
    />
  );
};
