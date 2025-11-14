import React from "react";

export default function Footer() {
  return <>
    <div className="w-full bg-(--primary) text-(--text-secondary) text-center p-5">
      &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
    </div>
  </>;
}
