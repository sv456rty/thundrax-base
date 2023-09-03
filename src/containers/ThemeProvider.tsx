// ThemeProvider

// URL - https://daisyui.com/docs/themes/
// NOTE: Add data-theme='THEME_NAME' to any element and everything inside will have your theme

"use client";

import { useEffect } from "react";
import { store } from "@/redux/store";
import { setDefaultThemeName } from "@/redux/slices/uiSlice";
import { useAppSelector } from "@/redux/hooks";

import type { PropsWithChildren } from "@/types/props.children";

type Theme = {
  theme: string;
};

const DaisyUITheme = (props: PropsWithChildren<Theme>) => {
  console.log("inside is ", props.theme);
  return <div data-theme={`${props.theme}`}>{props.children}</div>;
};

const ThemeLoading = (props: PropsWithChildren<{}>) => {
  const themeName = useAppSelector((state) => state.ui.theme.name);
  return (
    <>
      <DaisyUITheme theme={themeName}>{props.children}</DaisyUITheme>
    </>
  );
};

const ThemeProvider = (props: PropsWithChildren<{}>) => {
  return <ThemeLoading>{props.children}</ThemeLoading>;
};

export default ThemeProvider;
