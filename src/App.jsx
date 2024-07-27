import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home'; // Note the capitalized "Home"
import PetDetailsPage from './pages/petDetailsPage'; // Note the capitalized "PetDetailsPage"
import ErrorBoundary from './components/ErrorBoundary';

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
