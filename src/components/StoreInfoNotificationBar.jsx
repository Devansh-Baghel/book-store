import React from "react";
import closeButtonSvg from "../assets/close.svg";

function StoreInfoNotificationBar() {
  return (
    <div className="w-[80vw] h-20 border-[3px] border-main_yellow bg-yellow-100 rounded-lg flex p-2 justify-between items-center md:px-8 sm:px-4 max-w-[700px] md:h-16">
      <h1 className="">Prices of all these books are randomly generated.</h1>
      <button>
        <img src={closeButtonSvg} alt="close" className="min-w-[20px]" />
      </button>
    </div>
  );
}

export default StoreInfoNotificationBar;
