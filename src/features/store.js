import {configureStore } from '@reduxjs/toolkit';
import courseReducer from './course/courseSlice';
const store = configureStore({
    reducer: {
        course: courseReducer,
    }
});
export default store;
