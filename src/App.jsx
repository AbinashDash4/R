import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cursor from './components/Cursor/Cursor';
import Loader from './components/Loader/Loader';
import Home from './pages/Home';
import { ThemeProvider } from './contexts/ThemeContext';
import LeadWidgets from './components/UI/LeadWidgets';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      {/* Premium preloader screen */}
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          {/* Custom spring cursor */}
          <Cursor />
          
          {/* Global Lead Conversion Widgets */}
          <LeadWidgets />
          
          {/* Main Layout */}
          <Navbar />
          <main className="w-full">
            <Home />
          </main>
          <Footer />
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
