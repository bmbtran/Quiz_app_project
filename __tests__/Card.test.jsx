// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import Card from '../src/Components/Card.jsx';

// const mockStore = configureStore([]);

// describe('Card', () => {
//   let store;
//   let course;

//   beforeEach(() => {
//     store = mockStore({});
//     course = {
//       id: 1,
//       name: 'Test Course',
//       image: 'test_image.jpg',
//       rating: 4.5,
//       duration: 3,
//       quiz: []
//     };
//   });

//   it('renders the course name and image', () => {
//     const { getByText, getByAltText } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     expect(getByText('Test Course')).toBeInTheDocument();
//     expect(getByAltText('Test Course')).toBeInTheDocument();
//   });

//   it('dispatches the selectCourse action when the card is clicked', () => {
//     const { getByRole } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     fireEvent.click(getByRole('link'));

//     expect(store.getActions()).toEqual([{ type: 'selectedCourse/selectCourse', payload: course }]);
//   });

//   it('displays the duration and number of questions', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     expect(getByText('3 hours')).toBeInTheDocument();
//     expect(getByText('0 Questions')).toBeInTheDocument();
//   });

//   it('displays the rating', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     expect(getByText('4.5')).toBeInTheDocument();
//   });
// });



// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// import Card from './Card';

// const mockStore = configureStore([]);

// describe('Card', () => {
//   let store;
//   let course;

//   beforeEach(() => {
//     store = mockStore({});
//     course = {
//       id: 1,
//       name: 'Test Course',
//       image: 'test_image.jpg',
//       rating: 4.5,
//       duration: 3,
//       quiz: []
//     };
//   });

//   it('renders the course name and image', () => {
//     const { getByText, getByAltText } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     expect(getByText('Test Course')).toBeInTheDocument();
//     expect(getByAltText('Test Course')).toBeInTheDocument();
//   });

//   it('dispatches the selectCourse action when the card is clicked', () => {
//     const { getByRole } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     fireEvent.click(getByRole('link'));

//     expect(store.getActions()).toEqual([{ type: 'selectedCourse/selectCourse', payload: course }]);
//   });

//   it('displays the duration and number of questions', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     expect(getByText('3 hours')).toBeInTheDocument();
//     expect(getByText('0 Questions')).toBeInTheDocument();
//   });

//   it('displays the rating', () => {
//     const { getByText } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     expect(getByText('4.5')).toBeInTheDocument();
//   });
// });



import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Card from '../src/Components/Card.jsx';

const mockStore = configureStore([]);

describe('Card', () => {
  let store;
  let course;

  beforeEach(() => {
    store = mockStore({});
    course = {
      id: 1,
      name: 'Test Course',
      image: 'test_image.jpg',
      rating: 4.5,
      duration: 3,
      quiz: []
    };
  });

  it('renders the course name and image', () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <MemoryRouter basename="/">
          <Card course={course} />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('Test Course')).toBeInTheDocument();
    expect(getByAltText('Test Course')).toBeInTheDocument();
  });

  it('dispatches the selectCourse action when the card is clicked', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <MemoryRouter basename="/">
          <Card course={course} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(getByRole('link'));

    expect(store.getActions()).toEqual([{ type: 'selectedCourse/selectCourse', payload: course }]);
  });

  it('displays the duration and number of questions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter basename="/">
          <Card course={course} />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('3 hours')).toBeInTheDocument();
    expect(getByText('0 Questions')).toBeInTheDocument();
  });

  it('displays the rating', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter basename="/">
          <Card course={course} />
        </MemoryRouter>
      </Provider>
    );

    expect(getByText('4.5')).toBeInTheDocument();
  });
});