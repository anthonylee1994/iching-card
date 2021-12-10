import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from '../lib/app-layout/AppBar';
import { Home } from './home';
import { Records } from './records';

export const Index = React.memo(() => {
  // React.useEffect(() => {
  //   (async () => {
  //     console.log(await Trigram.getShuffledList());
  //     console.log(Hexagram.elementOf('地', '天').code);
  //     console.log(Hexagram.fromCode(64));
  //   })();
  // }, []);

  return (
    <React.Fragment>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="records" element={<Records />} />
      </Routes>
    </React.Fragment>
  );
});
