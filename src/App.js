import "./App.css";
import React, { useState } from "react";
import Navbar from "./component/Navbar";
import News from "./component/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  let pageSize = 6;

  // apiKey = process.env.REACT_NEWS_API_KEY;
  let apiKey = "e9679ea8d0b9414ebbd230e295f8fa60";

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key="home" pageSize={pageSize} />} />
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" /> } />
          <Route exact path="/entertainment" element={ <News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" /> } />
          <Route exact path="/general" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/>}/>
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/>}/>
          <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/>}/>
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
          <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
        </Routes>
      </div>
    </Router>
  );
}
