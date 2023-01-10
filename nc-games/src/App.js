import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import {getReviews} from "./Utils"
import Reviews from "./components/Reviews";
import Review from "./components/Review";

function App() {
  const [reviewId, setReviewId] = useState([]);
  const reviewUrl = `/reviews/${reviewId}`
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/reviews" element={<Reviews setReviewId={setReviewId}/>} />
        <Route path="/reviews/:review_id" element={<Review reviewId={reviewId}/>} />
        
        {/* <Route path="/*" element={<ErrorPage  />} /> */}
      </Routes>
    </div>
  );
}

export default App;
