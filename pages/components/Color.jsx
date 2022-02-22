import React from "react";
import tw from "tailwind-styled-components";
import Fade from "react-reveal/Fade";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Color = ({ color }) => {
  return (
    <Wrapper>
      <Item style={{ backgroundColor: color }}></Item>
      <ColorCode>{color}</ColorCode>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    bg-white rounded-full lg:rounded-lg lg:h-[15rem] lg:w-[10rem] p-[0.4rem]
    cursor-pointer h-[8rem] w-[8rem] relative
`;
const Item = tw.div`
    lg:h-[85%] h-[100%] w-full lg:rounded-md rounded-full
`;
const ColorCode = tw.div`
    text-center my-2 text-white lg:text-[#5c606e] font-semibold absolute
    top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] lg:relative lg:top-0 lg:left-0
    lg:translate-x-0 lg:translate-y-0
`;
export default Color;
