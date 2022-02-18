import { atom } from "recoil";

export const keyClicked = atom({
  key: "keyClicked",
  default: false,
});

export const spaceClicked = atom({
  key: "spaceClicked",
  default: false,
});
