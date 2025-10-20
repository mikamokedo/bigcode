import { useState, useEffect } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener on unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="z-99 fixed w-[48px] h-[48px] bg-[#00833E] flex items-center justify-center rounded-full cursor-pointer hover:bg-primary-dark transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Go to top"
      style={{
        bottom: "20px",
        right: "20px",
      }}
    >
      <ChevronDoubleUpIcon color="#FFFFFF" width={24} />
    </div>
  );
};
