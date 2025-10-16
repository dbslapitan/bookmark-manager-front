"use client";

import { useEffect, useState } from "react";
import logoDark from "../../../public/svgs/logo-light-theme.svg";
import logoLight from "../../../public/svgs/logo-dark-theme.svg";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo(){

  const [logo, setLogo] = useState(logoLight);
  const {resolvedTheme} = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   if(!isLoaded){
  //     setIsLoaded(true);
  //   } else {
  //     if(resolvedTheme === "dark"){
  //       setLogo(logoDark);
  //     }
  //   }
  // }, [logo]);

  return (
    <>
      <Image src={resolvedTheme === "light" ? logoLight : logoDark} alt="bookmark manager logo" priority/>
    </>
  );
}