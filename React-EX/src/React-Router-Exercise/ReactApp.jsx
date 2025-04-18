import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageRouter from "./HomePageRouter";
import PageElement1 from "./pages/PageElement1.jsx";
import PageElement2 from "./pages/PageElement2.jsx";
import MainsecondPage from "./pages/MainPages/MainsecondPage.jsx";
import PostDataProvider from "./Context/contextData.jsx";

export default function ReactAppRouter() {
  return (
    <div>
      <BrowserRouter>
        <PostDataProvider>
          <Routes>
            <Route path="/" element={<HomePageRouter />}>
              <Route path="element1" element={<PageElement1 />} />
              <Route path="element2" element={<PageElement2 />} />
            </Route>
            <Route path="second-main-page" element={<MainsecondPage />} />
            <Route path="secoond-main-page/id" element={<MainsecondPage />} />
          </Routes>
        </PostDataProvider>
      </BrowserRouter>
    </div>
  );
}
