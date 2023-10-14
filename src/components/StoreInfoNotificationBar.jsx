import React from "react";
import closeButtonSvg from "../assets/close.svg";
import { useContext } from "react";
import { AppContext } from "../App";

function StoreInfoNotificationBar() {
  const { showNotificationBar, setShowNotificationBar } = useContext(AppContext);

  function removeNotificationBar() {
    setShowNotificationBar(false);
  }

  if (!showNotificationBar) {
    return;
  }

  return (
    <div className="w-[80vw] h-20 border-[3px] border-main_yellow bg-yellow-100 rounded-lg flex p-2 justify-between items-center md:px-8 sm:px-4 max-w-[700px] md:h-16">
      <h1 className="">Prices of all these books are randomly generated.</h1>
      <button>
        <img
          src={closeButtonSvg}
          alt="close"
          className="min-w-[20px]"
          onClick={removeNotificationBar}
        />
      </button>
    </div>
  );
}

export default StoreInfoNotificationBar;
