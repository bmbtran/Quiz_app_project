import { fetchCourseStart, fetchCourseSuccess, fetchCourseFailure } from './features/course/courseSlice';

export const fetchCourseData = () => async (dispatch) => {
  try {
    dispatch(fetchCourseStart());
    const response = await fetch('https://quizappapi-960094b6b274.herokuapp.com/courses');
    const data = await response.json();
    dispatch(fetchCourseSuccess(data));
  } catch (error) {
    dispatch(fetchCourseFailure(error.message));
  }
};
