// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage.tsx';
import './App.css';
import { SignIn, SignUp } from '@clerk/clerk-react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Landing/Home Page */}
        <Route path="/" element={<LandingPage />} />
        {/* Clerk prebuilt authentication routes */}
        <Route path="/login/*" element={<SignIn path="/login" routing="path" />} />
        <Route path="/signup/*" element={<SignUp path="/signup" routing="path" />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
