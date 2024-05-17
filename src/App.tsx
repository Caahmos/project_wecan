import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layouts/Layout/Index';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useMenu from './hooks/useMenu';

function App() {
  const { MenuProvider } = useMenu();
  return (
    <MenuProvider>
      <Router>
        <GlobalStyles />
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </MenuProvider>
  );
}

export default App;
