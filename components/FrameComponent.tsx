import React from "react";
import { ZeitProvider, CssBaseline } from "@zeit-ui/react";

export default ({ theme, children }) => (
  <React.Fragment>
    <CssBaseline />
    <ZeitProvider theme={theme || { type: "light" }}>{children}</ZeitProvider>
  </React.Fragment>
);
