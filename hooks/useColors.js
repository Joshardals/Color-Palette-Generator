import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { generateOpen } from "../atoms/colorAtom";
import { spaceClicked } from "../atoms/keyAtom";
import axios from "axios";

function useColors() {
  const [palette, setPalette] = useState(null);
  const isOpen = useRecoilValue(generateOpen);
  const spaceClick = useRecoilValue(spaceClicked);

  const url = "http://colormind.io/api/";
  const data = {
    model: "default",
    input: ["N", "N", "N", "N", "N"],
  };

  const generateColor = () => {
    axios({
      method: "POST",
      url: url,
      data: JSON.stringify(data),
    })
      .then((res) => {
        setPalette(res?.data.result);
        console.log(res?.data.result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    generateColor();
  }, []);
  useEffect(() => {
    generateColor();
  }, [isOpen]);
  useEffect(() => {
    generateColor();
  }, [spaceClick]);

  return palette;
}

export default useColors;
