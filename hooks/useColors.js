import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { generateOpen } from "../atoms/colorAtom";
import axios from "axios";

function useColors() {
  const [palette, setPalette] = useState(null);
  const isOpen = useRecoilValue(generateOpen);

  const url = "http://colormind.io/api/";
  const data = {
    model: "default",
    input: ["N", "N", "N", "N", "N"],
  };

  const generateColor = async () => {
    axios({
      method: "POST",
      url: url,
      data: JSON.stringify(data),
    })
      .then((res) => setPalette(res?.data.result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    generateColor();
  }, []);
  useEffect(() => {
    generateColor();
  }, [isOpen]);

  return palette;
}

export default useColors;
