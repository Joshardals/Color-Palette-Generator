import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { generateOpen } from "../atoms/colorAtom";
import { spaceClicked } from "../atoms/keyAtom";
import axios from "axios";
import Palettee from "palettee";

function useColors() {
  const [palette, setPalette] = useState(null);
  const isOpen = useRecoilValue(generateOpen);
  const spaceClick = useRecoilValue(spaceClicked);

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
  const palettee = new Palettee({
    scheme: ["monochrome"],
  });

  // const baseURL = "http://www.colourlovers.com/api/palettes/random";

  // const generateColor = async () => {
  //   await axios({
  //     method: "GET",
  //     baseURL: baseURL,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Access-Control-Allow-Methods":
  //         "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  //       "Access-Control-Allow-Headers":
  //         "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
  //     },
  //   })
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // };

  // const generateColor = () => {
  //   const http = new XMLHttpRequest();

  //   http.onreadystatechange = function () {
  //     if (http.readyState == 4 && http.status == 200) {
  //       setPalette(JSON.parse(http.responseText).result);
  //       console.log(JSON.parse(http.responseText).result);
  //     }
  //   };

  //   http.open("POST", url, true);
  //   http.send(JSON.stringify(data));
  // };

  useEffect(() => {
    setPalette(palettee.palette());
  }, []);
  useEffect(() => {
    setPalette(palettee.palette());
  }, [isOpen]);
  useEffect(() => {
    setPalette(palettee.palette());
  }, [spaceClick]);

  return palette;
}

export default useColors;
