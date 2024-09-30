import { configureStore } from '@reduxjs/toolkit';
import tripReducer from './features/trips'


export const store = configureStore({
    reducer:{
        trip: tripReducer,
    }
})