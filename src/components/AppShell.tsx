import * as React from 'react'
import { ThemeProvider } from 'react-jss'
import CssBaseline from './CssBaseline'

import theme from '../theme'

export interface IAppShellProps {
  children: any
}

class AppShell<T extends IAppShellProps> extends React.Component<T, {}> {
  public render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <CssBaseline>{this.props.children}</CssBaseline>
        </div>
      </ThemeProvider>
    )
  }
}

export default AppShell
