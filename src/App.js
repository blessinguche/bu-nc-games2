import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { getReviews } from "./Utils";
import Reviews from "./components/Reviews";
import Review from "./components/ReviewPage";
import Categories from "./components/Categories";
import Category from "./components/CategoryPage";

function App() {
  const [reviewId, setReviewId] = useState([]);
  const [commentId, setCommentId] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [category, setCategory] = useState("");

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path={`/`} element={<Header />} />
        <Route
          path={`/reviews`}
          element={
            <Reviews
              setReviewId={setReviewId}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />
        <Route
          path={`/reviews/0${reviewId}`}
          element={
            <Review
              reviewId={reviewId}
              setCommentId={setCommentId}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />
        <Route
          path={`/categories`}
          element={<Categories setCategory={setCategory} />}
        />
        <Route
          path={`/reviews?category=${category}`}
          element={
            <Category
              category={category}
              setReviewId={setReviewId}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          }
        />
        {/* <Route path="/*" element={<ErrorPage  />} /> */}
      </Routes>
    </div>
  );
}

export default App;
