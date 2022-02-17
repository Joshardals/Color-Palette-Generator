import { useState, useEffect } from "react";

function useKey() {
  const [keyClicked, setKeyClicked] = useState(false);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "c") {
        setKeyClicked(true);
      }
    });
  });

  return keyClicked;
}

export default useKey;
