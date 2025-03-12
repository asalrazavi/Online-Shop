import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-cols-[15rem_1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      <Sidebar />
      {children}
    </div>
  );
}
