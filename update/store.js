import { Component } from 'preact'
import { createStore, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { install } from 'redux-loop'

function reducer (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECRMENET':
      return state - 1
    default:
      return state
  }
}

// DO NOT EDIT BELOW THIS LINE

const enhancer = compose(
  install(),
  applyMiddleware(createLogger())
)

const store = createStore(reducer, null, enhancer)

export const dispatch = store.dispatch

export function withStore (render) {
  const Page = function (...args) {
    Component.call(this, ...args)
    store.dispatch({ type: '__INIT__' })
    this.state = store.getState()
  }

  Page.constructor = Page
  Page.prototype = Object.create(Component.prototype)

  Object.assign(Page.prototype, {
    componentDidMount: function () {
      this.unsub = store.subscribe(() => {
        const state = store.getState()

        this.setState(state)
      })
    },
    componentWillUnmount: function () {
      this.unsub()
    },
    render
  })

  Page.getInitialProps = function ({ req }) {
    return {}
  }

  return Page
}
