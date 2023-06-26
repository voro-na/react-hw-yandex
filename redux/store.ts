import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "@/redux/features/cart";
import {movieApi} from "@/redux/services/movieApi";
import {logger} from "@/redux/middleware/logger";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [movieApi.reducerPath]: movieApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([movieApi.middleware, logger]),
    devTools: process.env.NODE_ENV !== "production",
});
