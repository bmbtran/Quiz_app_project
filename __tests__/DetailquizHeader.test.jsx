
import { render, screen, waitFor  } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import DetailQuizHeader from "../src/Views/QuizDetailsView/DetailQuizHeader.jsx";
import { configureStore } from "@reduxjs/toolkit";
import store from "../src/features/store";


describe("DetailQuizHeader component", () => {
    it("should render the loading indicator when selectedCourse is null", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailQuizHeader />
          </BrowserRouter>
        </Provider>
      );
      const loadingElement = screen.getByText("Loading...");
      expect(loadingElement).toBeInTheDocument();
    });
  
    it("should render the quiz details when selectedCourse is not null", async () => {
      const mockSelectedCourse = { name: 'Test Course', rating: 4.5 };
      store.dispatch({ type: 'selectedCourse/setSelectedCourse', payload: mockSelectedCourse });
      render(
        <Provider store={store}>
          <BrowserRouter>
            <DetailQuizHeader />
          </BrowserRouter>
        </Provider>
      );
      await (() => {
        const courseNameElement = screen.getByText("Test Course");
        const pointsElement = screen.getByText("Get 100 points");
        const ratingElement = screen.getByText("Rating: 4.5");
        expect(courseNameElement).toBeInTheDocument();
        expect(pointsElement).toBeInTheDocument();
        expect(ratingElement).toBeInTheDocument();
      });
    });
  });