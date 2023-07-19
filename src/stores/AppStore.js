import { configureStore } from '@reduxjs/toolkit'
import themeSelector from '../Components/theme/themeSelector'

export default configureStore({
  reducer: {
    theme: themeSelector
  }
})