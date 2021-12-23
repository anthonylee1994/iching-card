import React from 'react';
import { GiSpellBook } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { BottomButtonBase } from './BottomButtonBase';

export const HexagramListButton = React.memo(() => {
  const navigate = useNavigate();

  return (
    <BottomButtonBase
      bottom={{ base: 6, md: 8 }}
      icon={GiSpellBook}
      onClick={() => {
        window?.navigator?.vibrate?.([50, 100, 50, 100, 50, 150, 200]);
        navigate('/list');
      }}
    />
  );
});
