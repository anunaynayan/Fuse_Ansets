export interface AccordionItemData {
  id: number;
  title: string;
  content: string;
}

export type AccordionVariant =
  | "default"
  | "bordered"
  | "filled"
  | "minimal"
  | "faq";

export interface AccordionProps {
  data: AccordionItemData[];
  loading?: boolean;
  variant?: AccordionVariant;
  multiple?: boolean;
  defaultOpenIds?: number[];
  disableAnimation?: boolean;
}
