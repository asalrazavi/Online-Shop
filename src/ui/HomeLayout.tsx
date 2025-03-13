import { ReactNode } from "react";
import Header from "./Header";

interface HomeLayoutProps {
  children: ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <div className="grid grid-cols-[1fr] grid-rows-[auto_1fr] h-screen">
      <Header />
      {children}
    </div>
  );
}
