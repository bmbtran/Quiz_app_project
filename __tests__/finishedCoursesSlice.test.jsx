import finishedCoursesReducer, { addFinishedCourse } from '../src/features/finishedCoursesSlice';

describe('finishedCoursesSlice reducer', () => {
  test('adds a finished course to the state', () => {
    const initialState = [];
    const course = { name: 'Course 1', grade: 'A' };
    const newState = finishedCoursesReducer(initialState, addFinishedCourse(course));
    expect(newState).toHaveLength(1); // check if the state has one element
    expect(newState[0]).toEqual(course); // check if the course object is added correctly
  });
});