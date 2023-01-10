import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
export async function getReviewsById({reviewId}) 
// import {getReviews, getReviewById} from "./Utils"
import Reviews from "./components/Reviews";
import Review from "./components/Review";


function App() {
  const [reviewsId, setReviewsId] = useState([]);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/reviews" element={<Reviews setReviewsId={setReviewsId} />} />
        <Route path="/reviews/:review_id" element={<Review reviewsId={reviewsId}/>} />
        
        {/* <Route path="/*" element={<ErrorPage  />} /> */}
      </Routes>
    </div>
  );
}

export default App;
