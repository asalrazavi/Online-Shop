import { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] h-screen">
      <Header />
      {children}
    </div>
  );
}
