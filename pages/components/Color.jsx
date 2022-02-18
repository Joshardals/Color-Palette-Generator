import React from "react";
import tw from "tailwind-styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import rgb2hex from "rgb2hex"; 

const Color = ({ color }) => {
  return (
    <Wrapper>
      <Item style={{ backgroundColor: color }}></Item>
      <ColorCode>{color}</ColorCode>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    bg-white h-[15rem] w-[10rem] rounded-lg p-[0.40rem]
`;
const Item = tw.div`
    h-[85%] w-full rounded-md
`;
const ColorCode = tw.div`
    text-center my-2 text-[#5c606e] font-semibold
`;
export default Color;
