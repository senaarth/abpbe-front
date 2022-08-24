import React from "react";

import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

export function Header() {
  const headerColor = "#fff";

  return (
    <>
      <MobileHeader />
      <DesktopHeader bgColor={headerColor} bgColorFromStart={false} />
    </>
  );
}
