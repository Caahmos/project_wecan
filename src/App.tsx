import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useMenu from './hooks/useMenu';
import Content from './components/layouts/Content';
import Aside from './components/layouts/Aside/Index';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  const { MenuProvider } = useMenu();
  return (
    <MenuProvider>
      <Router>
        <GlobalStyles />
        <Aside />
        <Header />
        <Content>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Content>
        <Footer />
      </Router>
    </MenuProvider>
  );
}

export default App;
