import { useEffect } from "react";

export function useMobileHeight() {
  useEffect(() => {
    const setVh = () => {
      const height = window.innerHeight * 0.01;
      document.documentElement.style.setProperty(
        "--mobileHeight",
        `${height}px`
      );
    };
    setVh();

    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);
}
