import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Lazy load components
const AboutLazyLoading = React.lazy(() => import('./about-lazy-loading-ex.jsx'));
const HomeLazyLoading = React.lazy(() => import('./home-lazy-loading-ex.jsx'));

export default function AppLazyLoading() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeLazyLoading />} />
          <Route path="/about" element={<AboutLazyLoading />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
