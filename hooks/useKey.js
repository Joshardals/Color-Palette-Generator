// import { useState, useEffect } from "react";
// import { useRecoilState } from "recoil";
// import { keyClicked, spaceClicked } from "../atoms/keyAtom";

// function useKey() {
//   const [keyClick, setKeyClick] = useRecoilState(keyClicked);
//   const [spaceClick, setSpaceClick] = useRecoilState(spaceClicked);

//   useEffect(() => {
//     window.addEventListener("keydown", (e) => {
//       if (e.code === "Space") {
//         setSpaceClick(!spaceClick);
//       }
//     });
//     return () => {
//       window.removeEventListener("keydown", (e) => {
//         if (e.code === "Space") {
//           setSpaceClick(!spaceClick);
//         }
//       });
//     };
//   },[]);
// }
  
// export default useKey;
