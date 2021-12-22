import React from 'react';
import { GiDogHouse, GiSittingDog } from 'react-icons/gi';
import { DonationModal } from '../donation/DonationModal';
import { BottomButtonBase } from './BottomButtonBase';
import { useModalStore } from './hooks/useModalStore';

export const DonateButton = React.memo(() => {
  const ref = React.useRef(null);

  const onOpen = useModalStore((state) => () => state.onOpen('DonationModal'));
  const isOpen = useModalStore((state) => state.isOpen('DonationModal'));

  return (
    <React.Fragment>
      <BottomButtonBase
        bottom={{ base: 6, md: 8 }}
        right={{ base: 6, md: 8 }}
        icon={isOpen ? GiSittingDog : GiDogHouse}
        onClick={() => {
          window?.navigator?.vibrate?.(1000);
          onOpen();
        }}
      />
      <DonationModal finalFocusRef={ref} />
    </React.Fragment>
  );
});
