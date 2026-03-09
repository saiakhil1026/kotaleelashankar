"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop();
      lenis?.start();
    });
  }, []);



  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        prevent: (node) => {
          return (
            node?.classList?.contains("modall") ||
            node?.hasAttribute?.("data-lenis-prevent") ||
            !!node?.closest?.(".modall") ||
            !!node?.closest?.("[data-lenis-prevent]")
          );
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
