import { configureStore } from '@reduxjs/toolkit';
import tripReducer from './features/trips'
import visitorReducer from './features/visitors'


export const store = configureStore({
    reducer:{
        trip: tripReducer,
        visitors: visitorReducer,
    }
})