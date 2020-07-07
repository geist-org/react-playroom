import React, { ReactNode } from "react";
import { ZeitProvider, CssBaseline, ZeitUIThemes } from "@zeit-ui/react";

export default ({
  theme,
  children,
}: {
  theme: ZeitUIThemes;
  children: ReactNode;
}) => (
  <React.Fragment>
    <CssBaseline />
    <ZeitProvider theme={theme || { type: "light" }}>{children}</ZeitProvider>
  </React.Fragment>
);
