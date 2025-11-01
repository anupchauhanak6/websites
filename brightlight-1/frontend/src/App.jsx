import React from 'react';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <AppRoutes />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;