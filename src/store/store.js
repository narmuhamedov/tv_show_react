import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/postsSlice";
import favoritesReducer from "./slices/favoriteSlice";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import registrationMiddleware from "./middleware/registration/registrationMiddleware";
import authMiddleware from "./middleware/authMiddleware";
import ticketReducer from "./slices/ticketsSlice";
import menuReducer from './slices/menuSlice'
import bookingReducer from "./slices/bookingSlice"


const rootReducer = combineReducers({
  post: postsReducer,
  favorite: favoritesReducer,
  user: userReducer,
  auth: authReducer,
  tickets: ticketReducer,
  menu: menuReducer, // ✅ Теперь menuReducer добавлен правильно!
  booking: bookingReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      registrationMiddleware,
      authMiddleware,
    ]),
  // Убрали menu: menuReducer отсюда - это было неправильно
});