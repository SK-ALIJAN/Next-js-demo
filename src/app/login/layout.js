import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <h1>helloe i am </h1>
      {children}
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default layout;
