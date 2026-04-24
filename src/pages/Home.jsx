import React from 'react';
import MainLayout from '../layouts/MainLayout';

function Home({ toggleTheme, theme }) {
  return (
    <MainLayout toggleTheme={toggleTheme} theme={theme} />
  );
}

export default Home;
