// This file should be placed at: app/handpumps/[slug]/layout.tsx

import React from "react";

const AccessoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Optional layout wrappers like header, sidebar can go here */}
      {children}
    </div>
  );
};

export default AccessoriesLayout;
