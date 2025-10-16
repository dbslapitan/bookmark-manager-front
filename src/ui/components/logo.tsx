"use client";

import { useEffect, useState } from "react";
import logoDark from "../../../public/svgs/logo-light-theme.svg";
import logoLight from "../../../public/svgs/logo-dark-theme.svg";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo(){

  const {resolvedTheme} = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(!isLoaded){
      setIsLoaded(true);
    }
  }, [resolvedTheme]);

  console.log(resolvedTheme)

  return (
    <>
      <Image src={resolvedTheme === "dark" && isLoaded ? logoLight : logoDark} alt="bookmark manager logo" priority/>
    </>
  );
}