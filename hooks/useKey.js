import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { spaceClicked } from "../atoms/keyAtom";

function useKey() {
  const [keyClicked, setKeyClicked] = useState(false);
  const [spaceClick, setSpaceClick] = useRecoilState(spaceClicked);
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "c") {
        setKeyClicked(true);
      }
    });
  });
  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        setSpaceClick(true);
      }
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.code === "Space") {
          setSpaceClick(true);
        }
      });
    };
  });

  return keyClicked, spaceClick;
}

export default useKey;
