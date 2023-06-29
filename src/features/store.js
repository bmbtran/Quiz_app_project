import {configureStore } from '@reduxjs/toolkit';
import courseReducer from './course/courseSlice';
import selectedCourseReducer from './selectedCourse/selectedCourseSlice';

const store = configureStore({
    reducer: {
        course: courseReducer,
        selectedCourse: selectedCourseReducer,
    }
});
export default store;
