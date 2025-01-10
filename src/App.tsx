import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const About = lazy(() => import('./pages/About'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rose-600"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          } />
          <Route path="hizmetler" element={
            <Suspense fallback={<PageLoader />}>
              <Services />
            </Suspense>
          } />
          <Route path="galeri" element={
            <Suspense fallback={<PageLoader />}>
              <Gallery />
            </Suspense>
          } />
          <Route path="iletisim" element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          } />
          <Route path="sss" element={
            <Suspense fallback={<PageLoader />}>
              <FAQ />
            </Suspense>
          } />
          <Route path="hakkimizda" element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;