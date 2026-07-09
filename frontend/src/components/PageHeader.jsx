import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const PageHeader = ({ title, bgImage }) => {
  return (
    <div className="relative w-full h-[350px] flex flex-col items-center justify-center text-white overflow-hidden">
      <img
        src={bgImage}
        alt="Header"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          {title}
        </h1>
        <Breadcrumbs />
      </div>
    </div>
  );
};
export default PageHeader;
