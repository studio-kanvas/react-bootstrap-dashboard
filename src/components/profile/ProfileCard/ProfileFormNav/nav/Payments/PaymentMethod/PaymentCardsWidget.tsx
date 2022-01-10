import React from 'react';
import { CreditCard } from './PaymentForm/interfaces';
import { PaymentCard } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentCard/PaymentCard';
import { Col, Row } from 'antd';
import { useResponsive } from '@app/hooks/useResponsive';
import { ActionButtons } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/PaymentCardCarousel/ActionButtons/ActionButtons';
import { AddNewCardButton } from '@app/components/profile/ProfileCard/ProfileFormNav/nav/Payments/PaymentMethod/AddNewCardButton/AddNewCardButton';

interface PaymentCardsWidgetProps {
  cards: CreditCard[];
  onCardRemove: (cardNumber: string) => void;
  onCardAdd: (card: CreditCard) => Promise<void>;
}

export const PaymentCardsWidget: React.FC<PaymentCardsWidgetProps> = ({ cards, onCardRemove, onCardAdd }) => {
  const { useMediaQuery } = useResponsive();

  const breakpoint = 659.98; // calculated manually according to default card size (290px) and other factors
  const isBreakpoint = useMediaQuery({ query: `(min-width: ${breakpoint}px)` });

  const justify = isBreakpoint ? 'start' : 'space-around';

  return (
    <Row justify={justify} gutter={[16, 16]}>
      {cards.map((card) => (
        <Col key={card.number}>
          <PaymentCard cardData={card}>
            <ActionButtons onRemove={() => onCardRemove(card.number)} />
          </PaymentCard>
        </Col>
      ))}
      <Col>
        <AddNewCardButton onCardAdd={onCardAdd} />
      </Col>
    </Row>
  );
};
