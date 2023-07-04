import { createSlice } from '@reduxjs/toolkit';

const finishedCoursesSlice = createSlice({
  name: 'finishedCourses',
  initialState: [],
  reducers: {
    addFinishedCourse: (state, action) => {
      state.push(action.payload);
      console.log('finishedCoursesSlice.js: addFinishedCourse: state: ', state)
    },
  },
});

export const { addFinishedCourse } = finishedCoursesSlice.actions;

export default finishedCoursesSlice.reducer;