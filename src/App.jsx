import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PetDetailsPage from './pages/petDetailsPage';
import ErrorBoundary from './components/ErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; // or the path to your Tailwind CSS file



function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<PetDetailsPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
