
import React from 'react';
import { render, fireEvent, getAllByText  } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import QuestionBar from '../src/Components/QuestionBar.jsx';

const mockStore = configureStore([]);

describe('QuestionBar', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      course: {
        // your course state here
      },
      selectedCourse: {
        quiz: [
          {
            question: 'Question 1',
            options: ['Option 1', 'Option 2', 'Option 3'],
          },
          {
            question: 'Question 2',
            options: ['Option A', 'Option B', 'Option C'],
          },
        ],
      },
      finishedCourses: {
        // your finishedCourses state here
      },
    });
  });

  test('displays loading message if selected course is null', () => {
    store = mockStore({
      selectedCourse: null,
    });
    const { getByText } = render(
      <Provider store={store}>
        <QuestionBar />
      </Provider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });
  
  test('displays quiz questions and options', () => {
    const { getByText } = render(
      <Provider store={store}>
        <QuestionBar />
      </Provider>
    );
    expect(getByText('Question 1')).toBeInTheDocument();
    expect(getByText('Option 1')).toBeInTheDocument();
    expect(getByText('Option 2')).toBeInTheDocument();
    expect(getByText('Option 3')).toBeInTheDocument();
    expect(getByText('Question 2')).toBeInTheDocument();
    expect(getByText('Option A')).toBeInTheDocument();
    expect(getByText('Option B')).toBeInTheDocument();
    expect(getByText('Option C')).toBeInTheDocument();
  });
});


