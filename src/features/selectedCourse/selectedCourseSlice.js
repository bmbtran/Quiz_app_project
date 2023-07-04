// import { createSlice } from '@reduxjs/toolkit';

// const selectedCourseSlice = createSlice({
//   name: 'selectedCourse',
//   initialState: {
//     id: localStorage.getItem('selectedCourseId') || null,
//   },
//   reducers: {
//     selectCourse(state, action) {
//       const courseId = action.payload;
//       localStorage.setItem('selectedCourseId', courseId);
//       return {
//         id: courseId,
//       };
//     },
//     clearSelectedCourse(state) {
//       localStorage.removeItem('selectedCourseId');
//       return {
//         id: null,
//       };
//     },
//   },
// });

// export const { selectCourse, clearSelectedCourse } = selectedCourseSlice.actions;

// export default selectedCourseSlice.reducer;



import { createSlice } from '@reduxjs/toolkit';

const selectedCourseSlice = createSlice({
  name: 'selectedCourse',
  initialState: null,
  reducers: {
    selectCourse(state, action) {
      return action.payload;
    },
    clearSelectedCourse(state) {
      return null;
    },
  },
});

export const { selectCourse, clearSelectedCourse } = selectedCourseSlice.actions;

export default selectedCourseSlice.reducer;