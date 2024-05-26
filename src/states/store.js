import { configureStore } from "@reduxjs/toolkit";
import reducers from './Reducers/totalred';
import {thunk} from 'redux-thunk';
// import logger from 'redux-logger';

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => {
        return [
            ...getDefaultMiddleware(),
            thunk,
        ];
    }
});

export default store;