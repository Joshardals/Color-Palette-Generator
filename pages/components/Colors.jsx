import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Color from "./Color";
import useColors from "../../hooks/useColors";
import CopyToClipboard from "react-copy-to-clipboard";
import { useRecoilState } from "recoil";
import { spaceClicked } from "../../atoms/keyAtom";
import { generateOpen } from "../../atoms/colorAtom";

const Colors = () => {
  const data = useColors();
  const [click, setClick] = useState(false);
  const [newData, setNewData] = useState(null);
  const [generated, setGenerated] = useRecoilState(generateOpen);
  const [spaceClick, setSpaceClick] = useRecoilState(spaceClicked);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "c") {
        setClick(!click);
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "c") {
          setClick(!click);
        }
      });
    };
  }, [data]);

  useEffect(() => {
    setNewData(data);
  }, [click]);

  useEffect(() => {
    console.log(newData);
  }, [newData]);

  useEffect(() => {
    handleSpace();
  }, [data]);

  const handleSpace = () => {
    window.addEventListener("keydown", (e) => {
      if (e.code === "Space") {
        // setSpaceClick(!spaceClick);
        setGenerated(!generated);
      }
    });
    return () => {
      window.removeEventListener("keydown", (e) => {
        if (e.code === "Space") {
          // setSpaceClick(!spaceClick);
          setGenerated(!generated);
        }
      });
    };
  };

  return (
    <Wrapper>
      {data?.map((res, index) => {
        return (
          <>
            <Color key={index} color={res.toUpperCase()} color2={newData} />
          </>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = tw.div`
    lg:flex items-center
    grid grid-cols-2 gap-8
    md:grid-cols-3
`;
export default Colors;
