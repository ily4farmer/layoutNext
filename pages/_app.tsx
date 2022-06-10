import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { appState } from '../store/StoreMobX'
import AppContext from '../context'
import { observer } from 'mobx-react-lite'

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <AppContext.Provider value={appState}>
      <Component {...pageProps} /> 
    </AppContext.Provider>
  )
}

export default observer(MyApp)
