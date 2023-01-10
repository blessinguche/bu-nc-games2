import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import {getReviews} from "./Utils"
import Reviews from "./components/Reviews";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews().then((data) => setReviews(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/reviews" element={<Reviews {...reviews} />} />
        
        {/* <Route path="/*" element={<ErrorPage  />} /> */}
      </Routes>
    </div>
  );
}

export default App;
