import React from 'react';
import { Grid } from '@chakra-ui/react';
import { Word } from './Word';

export const CenterLogo = React.memo(() => {
  return (
    <Grid userSelect="none" templateColumns="repeat(2, 1fr)">
      <Word>則</Word>
      <Word>心</Word>
      <Word>靈</Word>
      <Word>誠</Word>
    </Grid>
  );
});
