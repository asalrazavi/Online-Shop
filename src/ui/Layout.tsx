import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <Header />
      <div className="flex-1 flex flex-col pr-64">{children}</div>
      <Sidebar />
    </div>
  );
}
