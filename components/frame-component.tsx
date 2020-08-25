import React, { ReactNode } from 'react'
import { GeistProvider, CssBaseline, GeistUIThemes } from '@geist-ui/react'

export default ({ theme, children }: { theme: GeistUIThemes; children: ReactNode }) => (
  <React.Fragment>
    <CssBaseline />
    <GeistProvider theme={theme || { type: 'light' }}>{children}</GeistProvider>
  </React.Fragment>
)
