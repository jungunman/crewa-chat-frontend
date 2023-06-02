import { configureStore } from '@reduxjs/toolkit'
import authenticationTimer from './store/timeSlice.js'
import userInfo from './store/userSlice.js'
import footerSelectionStatus from './store/footerSlice.js';
import headerSelectionStatus from './store/headerSlice.js';
import socketStatus from './store/socketSlice.js';
import crewaAI from './store/crewaAISlice.js';
import friendsList from './store/friendsSlice.js';


export default configureStore({
  reducer: {
    authenticationTimer : authenticationTimer.reducer,
    userInfo: userInfo.reducer,
    footerSelectionStatus : footerSelectionStatus.reducer,
    headerSelectionStatus : headerSelectionStatus.reducer,
    socketStatus : socketStatus.reducer,
    crewaAI : crewaAI.reducer,
    friendsList : friendsList.reducer
   }
}) 