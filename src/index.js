import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter, { val: 100, act: 'NULL' })

const rootEl = document.getElementById('root')

const inc = () => store.dispatch({ type: 'INC' })
const dec = () => store.dispatch({ type: 'DEC' })

const render = () => ReactDOM.render(
  <Counter
    val={store.getState().val}
    inc={inc}
    dec={dec}
  />,
  rootEl
)

render()
store.subscribe(render)
