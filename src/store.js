import { configureStore } from '@reduxjs/toolkit'
import authenticationTimer from './store/timeSlice.js'
import userInfo from './store/userSlice.js'
import footerSelectionStatus from './store/footerSlice.js';
import headerSelectionStatus from './store/headerSlice.js';




export default configureStore({
  reducer: {
    authenticationTimer : authenticationTimer.reducer,
    userInfo: userInfo.reducer,
    footerSelectionStatus : footerSelectionStatus.reducer,
    headerSelectionStatus : headerSelectionStatus.reducer
   }
}) 