import {configureStore } from '@reduxjs/toolkit';
import courseReducer from './course/courseSlice';
import selectedCourseReducer from './selectedCourse/selectedCourseSlice';
import finishedCoursesReducer from './finishedCoursesSlice';

const store = configureStore({
    reducer: {
        course: courseReducer,
        selectedCourse: selectedCourseReducer,
        finishedCourses: finishedCoursesReducer,

    }
});
export default store;
