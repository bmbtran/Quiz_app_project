import selectedCourseReducer, { selectCourse, clearSelectedCourse } from '../src/features/selectedCourse/selectedCourseSlice';

describe('selectedCourseSlice reducer', () => {
  test('sets the selected course to the payload when selectCourse is called', () => {
    const initialState = null;
    const course = { id: 1, name: 'Course 1' };
    const newState = selectedCourseReducer(initialState, selectCourse(course));
    expect(newState).toEqual(course); // check if the selected course is set to the payload
  });

  test('clears the selected course when clearSelectedCourse is called', () => {
    const initialState = { id: 1, name: 'Course 1' };
    const newState = selectedCourseReducer(initialState, clearSelectedCourse());
    expect(newState).toBeNull(); // check if the selected course is set to null
  });
});