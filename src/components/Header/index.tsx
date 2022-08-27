import React from "react";
import { useRouter } from "next/router";

import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

export function Header() {
  const router = useRouter();
  const headerColor = "#fff";
  const bgColorFromStart =
    router?.asPath?.includes("/cursos/") ||
    router?.asPath?.includes("/revisor");

  return (
    <>
      <MobileHeader />
      <DesktopHeader
        bgColor={headerColor}
        bgColorFromStart={bgColorFromStart}
      />
    </>
  );
}
