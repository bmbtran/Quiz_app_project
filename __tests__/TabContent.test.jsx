// // import React from 'react';
// // import { render } from '@testing-library/react';
// // import TabContent from '../src/Components/TabContent.jsx';
// // import Card from '../src/Components/Card.jsx';

// // describe('TabContent', () => {
// //   test('renders the filtered courses in a grid of cards', () => {
// //     const filteredData = [
// //       { id: 1, title: 'Course 1', category: 'Web Development' },
// //       { id: 2, title: 'Course 2', category: 'Web Development' },
// //       { id: 3, title: 'Course 3', category: 'Data Science' },
// //     ];
// //     const activeTab = 'Web Development';
// //     const category = 'Web Development';

// //     const { getByRole, getAllByRole } = render(
// //       <TabContent filteredData={filteredData} activeTab={activeTab} category={category} />
// //     );

// //     const grid = getByRole('tabpanel');
// //     const cards = getAllByRole('article');

// //     expect(grid).toHaveAttribute('id', 'Web Development');
// //     expect(cards).toHaveLength(2);
// //     expect(cards[0]).toHaveTextContent('Course 1');
// //     expect(cards[1]).toHaveTextContent('Course 2');
// //   });
// // });


// import React from 'react';
// import { render } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import store from '../src/features/store';
// import TabContent from '../src/Components/TabContent.jsx';
// import Card from '../src/Components/Card.jsx';

// describe('TabContent', () => {
//   test('renders the filtered courses in a grid of cards', () => {
//     const filteredData = [
//       { id: 1, title: 'Course 1', category: 'Web Development' },
//       { id: 2, title: 'Course 2', category: 'Web Development' },
//       { id: 3, title: 'Course 3', category: 'Data Science' },
//     ];
//     const activeTab = 'Web Development';
//     const category = 'Web Development';

//     const { getByRole, getAllByRole } = render(
//       <Provider store={store}>
//         <TabContent filteredData={filteredData} activeTab={activeTab} category={category} />
//       </Provider>
//     );

//     const grid = getByRole('tabpanel');
//     const cards = getAllByRole('article');

//     expect(grid).toHaveAttribute('id', 'Web Development');
//     expect(cards).toHaveLength(2);
//     expect(cards[0]).toHaveTextContent('Course 1');
//     expect(cards[1]).toHaveTextContent('Course 2');
//   });
// });

// describe('Card', () => {
//   test('dispatches selectCourse action when card is clicked', () => {
//     const course = { id: 1, title: 'Course 1', category: 'Web Development' };
//     const { getByRole } = render(
//       <Provider store={store}>
//         <Card course={course} />
//       </Provider>
//     );

//     const card = getByRole('article');

//     fireEvent.click(card);

//     expect(store.getState().selectedCourse).toEqual(course);
//   });
// });





import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'; // import BrowserRouter
import store from '../src/features/store';
import TabContent from '../src/Components/TabContent.jsx';
import Card from '../src/Components/Card.jsx';

describe('TabContent', () => {
  test('renders the filtered courses in a grid of cards', () => {
    const filteredData = [
      { id: 1, title: 'Course 1', category: 'Web Development' },
      { id: 2, title: 'Course 2', category: 'Web Development' },
      { id: 3, title: 'Course 3', category: 'Data Science' },
    ];
    const activeTab = 'Web Development';
    const category = 'Web Development';

    const { getByRole, getAllByRole } = render(
      <Provider store={store}>
        <BrowserRouter> {/* Wrap components with BrowserRouter */}
          <TabContent filteredData={filteredData} activeTab={activeTab} category={category} />
        </BrowserRouter>
      </Provider>
    );

    // ...
  });
});

describe('Card', () => {
  test('dispatches selectCourse action when card is clicked', () => {
    const course = { id: 1, title: 'Course 1', category: 'Web Development' };
    const { getByRole } = render(
      <Provider store={store}>
        <BrowserRouter> {/* Wrap components with BrowserRouter */}
          <Card course={course} />
        </BrowserRouter>
      </Provider>
    );

    const card = getByRole('article');

    fireEvent.click(card);

    expect(store.getState().selectedCourse).toEqual(course);
  });
});