import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { generateOpen } from "../atoms/colorAtom";
import { spaceClicked, keyClicked } from "../atoms/keyAtom";
import axios from "axios";
import Palettee from "palettee";

function useColors() {
  const [palette, setPalette] = useState(null);
  const isOpen = useRecoilValue(generateOpen);
  const spaceClick = useRecoilValue(spaceClicked);
  const keyClick = useRecoilValue(keyClicked);

  // ---------- Api working on local server but not on production server ----------

  // const url = "http://colormind.io/api/";
  // const data = {
  //   model: "default",
  //   input: ["N", "N", "N", "N", "N"],
  // };

  // const generateColor = async () => {
  //   await axios({
  //     method: "POST",
  //     url: url,
  //     data: JSON.stringify(data),
  //   })
  //     .then((res) => {
  //       setPalette(res?.data.result);
  //       console.log(res?.data.result);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // --------- Api End -----

  const palettee = new Palettee({
    scheme: ["gradient-multi"],
  });

  useEffect(() => {
    setPalette(palettee.palette());
  }, []);
  useEffect(() => {
    setPalette(palettee.palette());
  }, [isOpen]);
  useEffect(() => {
    setPalette(palettee.palette());
  }, [spaceClick]);
  useEffect(() => {
    setPalette(palettee.palette());
  }, [keyClick]);

  return palette;
}

export default useColors;
