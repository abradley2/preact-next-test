import { Component } from "preact"
import { createStore, compose, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import { withRouter } from "next/router"
import { createLogger } from "redux-logger"
import { install } from "redux-loop"

const composer = process.env.NODE_ENV === "development"
  ? composeWithDevTools
  : compose

const enhancer = composer(
  install(),
  applyMiddleware(createLogger())
)

// DO NOT EDIT BELOW THIS LINE

/* eslint-disable */
const Page = function (props, update) {
  Component.call(this, props)
  Page.update = update

  if (!Page.store) {
    function reducer (...args) {
      return Page.update(...args)
    }
    Page.store = createStore(reducer, {}, enhancer)
  }
  Page.store.dispatch({ type: '__INIT__' })
  this.state = {
    state: Page.store.getState(),
    route: props.route
  }
}

Page.constructor = Page
Page.prototype = Object.create(Component.prototype)

Object.assign(Page.prototype, {
  componentDidMount: function () {
    this.unsub = Page.store.subscribe(() => {
      const state = Page.store.getState()
      if (this.subscriptions) {
        this.subscriptions(state, Page.store.dispatch)
      }
      this.setState({state})
    })
  },
  componentWillUnmount: function () {
    this.unsub()
  }
})

export function dispatch(...args) {
  return Page.store.dispatch(...args)
}

export function withStore (render, update, subscriptions) {
  const PageWithStore = function (props) {
    Page.call(this, props, update)
    this.subscriptions = subscriptions
  }

  PageWithStore.constructor = PageWithStore
  PageWithStore.prototype = Object.create(Page.prototype)

  Object.assign(PageWithStore.prototype, { render })

  return withRouter(PageWithStore)
}
/* eslint-enable */
