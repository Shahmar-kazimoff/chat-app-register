import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/user.slice';
import conversationsReducer from '../slices/conversations.slice';
import messagesReducer from '../slices/messages.slice';

const store = configureStore({
  reducer: {
    user: userReducer,
    conversations: conversationsReducer,
    messages: messagesReducer,
  },
});

export default store;
