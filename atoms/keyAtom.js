import { atom } from "recoil";

export const keyClicked = atom({
  key: "keyClicked",
  default: false,
});

export const spaceClicked = atom({
  key: "spaceClicked",
  default: false,
});

export const copied = atom({
  key: "copied",
  default: false,
});

export const colours = atom({
  key: "colours",
  default: null,
});
