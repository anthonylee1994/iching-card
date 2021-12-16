import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../lib/app-layout/AppBar';
import { Home } from './home';
import { Records } from './records';
import { CodeExplainationPage } from './[code]';

export const Index = React.memo(() => {
  return (
    <React.Fragment>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="records" element={<Records />} />
        <Route path=":code" element={<CodeExplainationPage />} />
      </Routes>
    </React.Fragment>
  );
});
