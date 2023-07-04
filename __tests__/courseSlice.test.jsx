import courseReducer, { fetchCourseStart, fetchCourseSuccess, fetchCourseFailure } from '../src/features/course/courseSlice';

describe('courseSlice reducer', () => {
  test('sets loading to true and error to null when fetchCourseStart is called', () => {
    const initialState = {
      data: [],
      loading: false,
      error: 'Error message',
    };
    const newState = courseReducer(initialState, fetchCourseStart());
    expect(newState.loading).toBe(true); // check if loading is set to true
    expect(newState.error).toBeNull(); // check if error is set to null
  });

  test('sets loading to false and data to the payload when fetchCourseSuccess is called', () => {
    const initialState = {
      data: [],
      loading: true,
      error: null,
    };
    const payload = [{ name: 'Course 1' }, { name: 'Course 2' }];
    const newState = courseReducer(initialState, fetchCourseSuccess(payload));
    expect(newState.loading).toBe(false); // check if loading is set to false
    expect(newState.data).toEqual(payload); // check if data is set to the payload
  });

  test('sets loading to false and error to the payload when fetchCourseFailure is called', () => {
    const initialState = {
      data: [],
      loading: true,
      error: null,
    };
    const error = 'Error message';
    const newState = courseReducer(initialState, fetchCourseFailure(error));
    expect(newState.loading).toBe(false); // check if loading is set to false
    expect(newState.error).toEqual(error); // check if error is set to the payload
  });
});