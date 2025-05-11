import Navbar from "@/components/Navbar";
import React, { Children } from "react";

export default function BimPageLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="font-bim-medium">{children}</div>
    </div>
  );
}
