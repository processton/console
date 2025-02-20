import "./src/css/global.css";


import React from "react";
import { LayoutBuilderProvider } from "./src/contexts/LayoutBuilderContext";

export const wrapRootElement = ({ element }) => (
  <LayoutBuilderProvider>{element}</LayoutBuilderProvider>
);