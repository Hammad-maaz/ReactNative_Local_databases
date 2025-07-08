import { configureStore } from "@reduxjs/toolkit";
import { sqliteReducer } from "./sqlite_slice";

const store = configureStore({
    reducer: {
        sqlite: sqliteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store