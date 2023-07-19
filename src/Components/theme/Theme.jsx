import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectTheme, toggleTheme } from './themeSelector.js'

export function Theme() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Theme</h1>
      <p>Current theme: {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>
    </div>
  )
}
