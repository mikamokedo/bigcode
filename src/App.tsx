import React from "react";
import "./App.css";
import { HomeDesktop } from "./pages/home-desktop";
import { HomeMobile } from "./pages/home-mobile";

function App() {
  const [isMobile, setIsMobile] = React.useState("");
  return (
    <div>
      {isMobile === "" ? (
        <div className="flex flex-col items-center">
          <h1 className="text-center">Bạn muốn xem giao diện nào</h1>
          <button className="w-[100px] mb-[8px] py-[4px]" onClick={() => setIsMobile("1")}>
            Desktop
          </button>
          <button className="w-[100px] mb-[8px] py-[4px]" onClick={() => setIsMobile("2")}>
            Mobile
          </button>
        </div>
      ) : (
        <div>{isMobile === "2" ? <HomeMobile /> : <HomeDesktop />}</div>
      )}
    </div>
  );
}

export default App;
