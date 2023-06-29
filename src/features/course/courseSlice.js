
import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'course',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCourseStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCourseSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchCourseFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchCourseStart, fetchCourseSuccess, fetchCourseFailure } = courseSlice.actions;

export default courseSlice.reducer;