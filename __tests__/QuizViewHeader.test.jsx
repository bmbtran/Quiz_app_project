
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import QuizViewHeader from '../src/Views/QuizView/QuizViewHeader.jsx';

describe('QuizViewHeader component', () => {
  const mockStore = configureStore([]);
  const initialState = { selectedCourse: null };
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders the loading indicator when selectedCourse is null', () => {
    render(
      <Provider store={store}>
        <Router>
          <QuizViewHeader onDurationChange={() => {}} />
        </Router>
      </Provider>
    );
    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
  });

  test('displays the course name and remaining time when selectedCourse is not null', () => {
    const mockSelectedCourse = {
      name: 'Test Course',
      duration: 2, // in hours
    };
    initialState.selectedCourse = mockSelectedCourse;
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <Router>
          <QuizViewHeader onDurationChange={() => {}} />
        </Router>
      </Provider>
    );

    // Check that the course name is displayed
    const courseNameElement = screen.getByText('Test Course');
    expect(courseNameElement).toBeInTheDocument();

    // Check that the remaining time is displayed
    const remainingTimeElement = screen.getByTestId('remaining-time');
    expect(remainingTimeElement).toBeInTheDocument();
  });
});