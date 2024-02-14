import React, { ReactNode } from "react";

const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`xl:max-w-screen-2xl mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default Section;
