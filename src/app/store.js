import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import authReducer from '../features/auth/authSlice'
import conversationsSlice from '../features/conversations/conversationsSlice';
import messagesReducer from '../features/messages/messagesSlice'


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]:apiSlice.reducer,
    auth:authReducer,
    conversations:conversationsSlice,
    messages:messagesReducer
  
  },

  devTools:process.env.NODE_ENV!=='production',
  
});
