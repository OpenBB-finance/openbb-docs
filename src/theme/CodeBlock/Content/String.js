import { useThemeConfig } from "@docusaurus/theme-common";
import {
  CodeBlockContextProvider,
  createCodeBlockMetadata,
  useCodeWordWrap,
} from "@docusaurus/theme-common/internal";
import CodeBlockLayout from "@theme/CodeBlock/Layout";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function getImageUrl(pathname, text) {
  if (!pathname.startsWith("/bot/")) {
    return null;
  }
  const pathvalue = pathname.split("/")[4];
  const platform = pathname.split("/")[3];
  let imgname = "c3m";
  if (
    (pathvalue == "charts" || pathvalue == "general") &&
    platform == "discord"
  ) {
    imgname = text.split(" ")[0].toLowerCase().replace("/", "");
  } else if (platform == "telegram") {
    console.log(pathvalue);
    if (pathvalue.toString() == "etf" || pathvalue.toString() == "screeners") {
      imgname = text.split(" ")[1].toLowerCase();
    } else {
      imgname = text.split(" ")[0].toLowerCase().replace("/", "");
    }
  } else {
    try {
      imgname = text.split(" ")[1].toLowerCase().replace("/", "");
      if (imgname == "defi") {
        imgname = text.split(" ")[2].toLowerCase().replace("/", "");
      }
    } catch (e) {
      imgname = text.split(" ")[0].toLowerCase().replace("/", "");
    }
  }

  const finalImage = `https://openbb-assets.s3.amazonaws.com/${platform}/${pathvalue}/${imgname}.png`;
  return finalImage;
}

function getThirdFriday() {
  const thirdFriday = new Date();
  thirdFriday.setMonth(thirdFriday.getMonth() + 1);
  thirdFriday.setDate(1);
  const firstDay = thirdFriday.getDay();
  let daysToAdd = (5 - firstDay + 7) % 7;
  daysToAdd += 15;
  thirdFriday.setDate(daysToAdd);

  const yearString = thirdFriday.getFullYear().toString();
  const monthString = (thirdFriday.getMonth() + 1).toString().padStart(2, "0");
  const dayString = thirdFriday.getDate().toString().padStart(2, "0");
  const dateString = `${yearString}-${monthString}-${dayString}`;
  return dateString;
}

function useCodeBlockMetadata(props) {
  const { prism } = useThemeConfig();
  const newDate = getThirdFriday();
  const processedCode = props.children.replace("2022-07-29", newDate);

  return createCodeBlockMetadata({
    code: processedCode,
    className: props.className,
    metastring: props.metastring,
    magicComments: prism.magicComments,
    defaultLanguage: prism.defaultLanguage,
    language: props.language,
    title: props.title,
    showLineNumbers: props.showLineNumbers,
  });
}

export default function CodeBlockString(props) {
  const [imageUrl, setImageUrl] = useState(null);
  const metadata = useCodeBlockMetadata(props);
  const wordWrap = useCodeWordWrap();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.startsWith("/bot/")) {
      // Check if parent has "examples" in id
      const codeBlocks = document.querySelectorAll('[class*="codeBlockContainer"]');
      codeBlocks.forEach((block) => {
        const container = block.parentElement;
        const containerSibling = container?.previousElementSibling;
        if (containerSibling?.id?.includes("examples")) {
          const finalImage = getImageUrl(pathname, metadata.code);
          if (finalImage) {
            setImageUrl(finalImage);
          }
        }
      });
    }
  }, [pathname, metadata.code]);

  return (
    <>
      <CodeBlockContextProvider metadata={metadata} wordWrap={wordWrap}>
        <CodeBlockLayout />
      </CodeBlockContextProvider>
      {imageUrl && (
        <img
          width="70%"
          height="70%"
          onError={() => {
            setImageUrl(null);
          }}
          src={imageUrl}
          alt="example"
        />
      )}
    </>
  );
}
