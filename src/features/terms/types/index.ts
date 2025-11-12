import { ReactNode } from "react";

export type Section = {
  id: string;
  title: string;
  description: string[];
  sidebarText: string;
  icon: ReactNode;
};
