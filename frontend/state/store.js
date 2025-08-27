// ✨ create your `store` in this module
import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./quotesSlice";

export const store = configureStore({
    reducer: {
        quotes: quoteReducer,
    }
})
