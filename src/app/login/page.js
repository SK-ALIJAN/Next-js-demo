import React from "react";

const page = () => {
  return <div>login page</div>;
};

export default page;

export function generateMetadata() {
  return {
    title: "Login here",
    description: "home page",
  };
}
