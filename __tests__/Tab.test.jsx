

import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import Tab from '../src/Components/Tab.jsx';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import pretend_science from '../src/assets/kirby.png';
import pretend_math from "../src/assets/star.svg"
import pretend_computer from "../src/assets/time.png"
import pretend_popular from "../src/assets/trash.png"

const mockStore = configureStore([]);

const courseData = [
  {
    id: 1,
    title: 'Introduction to Science',
    category: 'science',
    duration: '2 hours',
    rating: '4.5',
    image: pretend_science,
    quiz: []
  },
  {
    id: 2,
    title: 'Math Fundamentals',
    category: 'mathematics',
    duration: '3 hours',
    rating: '4.0',
    image: pretend_math,
    quiz: []
  },
  {
    id: 3,
    title: 'Computer Science 101',
    category: 'computer',
    duration: '4 hours',
    rating: '4.2',
    image: pretend_computer,
    quiz: []
  },
  {
    id: 4,
    title: 'Popular Course',
    category: 'popular',
    duration: '1 hour',
    rating: '3.5',
    image: pretend_popular,
    quiz: []
  }
];

describe('Tab', () => {
  test('renders the tab buttons', () => {
    const store = mockStore({ course: courseData });
    render(
      <Provider store={store}>
        <Tab />
      </Provider>
    );
    const popularTab = screen.getByText('Popular');
    const scienceTab = screen.getByText('Science');
    const mathTab = screen.getByText('Mathematics');
    const computerTab = screen.getByText('Computer');

    expect(popularTab).toBeInTheDocument();
    expect(scienceTab).toBeInTheDocument();
    expect(mathTab).toBeInTheDocument();
    expect(computerTab).toBeInTheDocument();
  });


test('renders the correct tab content when a tab is clicked', async () => {
    render(<Tab />);
  
    // Click the "Science" tab
    const scienceTab = await screen.findByRole('tab', { name: 'Science' });
    userEvent.click(scienceTab);
  
    // Check that the "Science" tab panel is visible
    const sciencePanel = await screen.findByRole('tabpanel', { name: 'Science' });
    const scienceTabId = scienceTab.getAttribute('id');
    const sciencePanelLabelledBy = sciencePanel.getAttribute('aria-labelledby');
    expect(sciencePanelLabelledBy).toEqual(scienceTabId);
  });
  test('displays courses in the "popular" category by default', () => {
    const store = mockStore({ course: courseData });
    render(
      <Provider store={store}>
        <Tab />
      </Provider>
    );
    const popularCourses = screen.getAllByText(/Popular/);
    expect(popularCourses).toHaveLength(1);
  });
  
  test('displays courses in the selected category', async () => {
    const store = mockStore({ course: courseData });
    render(
      <Provider store={store}>
        <Tab />
      </Provider>
    );
    const scienceTab = await screen.findByRole('tab', { name: 'Science' });
    userEvent.click(scienceTab);
    const scienceCourses = screen.getAllByText(/Science/);
    expect(scienceCourses).toHaveLength(1);
  });
  
});


// import { render, screen, fireEvent } from '@testing-library/react';
// import Tab from '../src/Components/Tab.jsx';
// import { Provider } from 'react-redux';
// import store from '../src/features/store';
// import { BrowserRouter } from 'react-router-dom';

// describe('Tabs component', () => {
//     const courseData = [
//       { id: 1, name: 'Course 1', category: 'popular' },
//       { id: 2, name: 'Course 2', category: 'science' },
//       { id: 3, name: 'Course 3', category: 'mathematics' },
//       { id: 4, name: 'Course 4', category: 'computer' },
//     ];
  
//     test('renders tabs with correct labels', () => {
//       render(
//         <BrowserRouter basename="/my-app">
//           <Tabs course={courseData} />
//         </BrowserRouter>
//       );
//       const popularTab = screen.getByRole('tab', { name: 'Popular' });
//       const scienceTab = screen.getByRole('tab', { name: 'Science' });
//       const mathematicsTab = screen.getByRole('tab', { name: 'Mathematics' });
//       const computerTab = screen.getByRole('tab', { name: 'Computer' });
  
//       expect(popularTab).toBeInTheDocument();
//       expect(scienceTab).toBeInTheDocument();
//       expect(mathematicsTab).toBeInTheDocument();
//       expect(computerTab).toBeInTheDocument();

//     expect(popularTab).toHaveAttribute('aria-selected', 'true');
//     expect(scienceTab).toHaveAttribute('aria-selected', 'false');
//     expect(mathematicsTab).toHaveAttribute('aria-selected', 'false');
//     expect(computerTab).toHaveAttribute('aria-selected', 'false');
//   });

//   test('renders TabContent component with correct props based on active tab and filtered data', () => {
//     render(    
//     <Provider store={store}>
//     <Tab course={courseData} />
//     </Provider>
//     );
//     const scienceTab = screen.getByRole('tab', { name: 'Science' });
//     fireEvent.click(scienceTab); // Switch to Science tab

//     const popularTabContent = screen.queryByText('Course 1');
//     const scienceTabContent = screen.queryByText('Course 2');
//     const mathematicsTabContent = screen.queryByText('Course 3');
//     const computerTabContent = screen.queryByText('Course 4');

//     expect(popularTabContent).toBeNull();
//     expect(scienceTabContent).toBeInTheDocument();
//     expect(mathematicsTabContent).toBeNull();
//     expect(computerTabContent).toBeNull();

//     expect(screen.queryByText('No courses found.')).toBeVisible(); // No courses found message should be displayed for other tabs
//   });
// });