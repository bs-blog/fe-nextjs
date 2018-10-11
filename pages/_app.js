import App, { Container } from 'next/app'
import React from 'react'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ConnectedRouter } from 'connected-next-router'
import { configureStore } from '../src/store/configure-store'
import '../src/lib/ga'

class SettingApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <script src="https://www.google-analytics.com/analytics.js" async />
        <Provider store={store}>
          <ConnectedRouter>
            <Component {...pageProps} />
          </ConnectedRouter>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(configureStore)(SettingApp)
