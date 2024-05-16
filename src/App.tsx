import React from 'react';
import Header from './components/layouts/Header';
import Content from './components/layouts/Content';
import Footer from './components/layouts/Footer';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Content>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Content>
      <Footer />
    </Router>
  );
}

export default App;
