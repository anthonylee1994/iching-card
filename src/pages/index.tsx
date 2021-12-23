import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../lib/app-layout/AppBar';
import { Home } from './home';
import { Bookmarks } from './bookmarks';
import { CodeExplainationPage } from './[code]';
import { List } from './list';

export const Index = React.memo(() => {
  return (
    <React.Fragment>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bookmarks" element={<Bookmarks />} />
        <Route path="list" element={<List />} />
        <Route path=":code" element={<CodeExplainationPage />} />
      </Routes>
    </React.Fragment>
  );
});
