import React from 'react';
import { GiSpellBook } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { useGameboardStore } from '../game-board/hooks/useGameboardStore';
import { BottomButtonBase } from './BottomButtonBase';

export const HexagramListButton = React.memo(() => {
  const navigate = useNavigate();
  const hideButton = useGameboardStore(
    (state) => !!(state.selectedFirstTrigram || state.selectedLastTrigram),
  );

  if (hideButton) {
    return null;
  }

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
