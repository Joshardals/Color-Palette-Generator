import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useRecoilState } from "recoil";
import { colours, copied } from "../../atoms/keyAtom";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Color = ({ color, color2 }) => {
  const [isCopied, setIsCopied] = useRecoilState(copied);
  const [colors, setColors] = useRecoilState(colours);
  const [click, setClick] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsCopied(false);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [isCopied]);

  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    const checkIfClickedOutside = () => {
      if (click === true) {
        setClick(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [click]);
  return (
    <Wrapper>
      <Item style={{ backgroundColor: color }}></Item>

      <CopyToClipboard
        text={color}
        onCopy={() => {
          handleCopy();
          setColors(color);
        }} 
      >
        <ColorCode
          style={{ color: click ? "#0c1226" : null }}
          onClick={() => handleClick()}
        >
          {color}
        </ColorCode>
      </CopyToClipboard>
    </Wrapper>
  );
};

const Wrapper = tw.div`
    bg-white rounded-full lg:rounded-lg lg:h-[15rem] lg:w-[10rem] p-[0.4rem]
    cursor-pointer h-[8rem] w-[8rem] 
`;
const Item = tw.div`
    h-full lg:h-[85%] w-full lg:rounded-md rounded-full
`;
const ColorCode = tw.div`
    text-center my-2 text-[#5c606e] font-semibold
`;
export default Color;
