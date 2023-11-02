import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import listReducer from './reducers/UserSlice'
import {ToDoListAPI} from "../services/ToDoListService";

const rootReducer = combineReducers({
    // listReducer,
    [ToDoListAPI.reducerPath]: ToDoListAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(ToDoListAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

