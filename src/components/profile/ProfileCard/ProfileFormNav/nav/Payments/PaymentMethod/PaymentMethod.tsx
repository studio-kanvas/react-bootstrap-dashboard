import React, { useCallback, useMemo, useState } from 'react';
import { Form } from 'antd';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { Card } from 'components/common/Card/Card';
import { PaymentCardCarousel } from './PaymentCardCarousel/PaymentCardCarousel';
import { FormItem, Title } from '../../../../../../common/Form/Form.styles';
import { CreditCard } from './PaymentForm/interfaces';
import { cardThemes } from 'constants/cardThemes';
import theme from 'styles/theme';
import * as S from './PaymentMethod.styles';
import { PaymentModal } from './PaymentModal/PaymentModal';

export const clearCardData: CreditCard = {
  name: '',
  cvc: '',
  expiry: '',
  number: '',
  focused: '',
  background: cardThemes[0].background,
  isEdit: false,
};

export const PaymentMethod: React.FC = () => {
  const { t } = useTranslation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [cardData, setCardData] = useState<CreditCard>(clearCardData);
  const [cards, setCards] = useState<CreditCard[]>([]);
  const [form] = Form.useForm();

  const isTablet = useMediaQuery({ query: theme.media.md });

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const content = useMemo(
    () => (
      <S.Wrapper>
        <FormItem>
          <Title>{t('profile.nav.payments.paymentMethod')}</Title>
        </FormItem>
        <PaymentCardCarousel
          form={form}
          cards={cards}
          setCards={setCards}
          handleOpenModal={handleOpenModal}
          setCardData={setCardData}
        />
        <S.AddBtn type="ghost" onClick={handleOpenModal}>
          {t('profile.nav.payments.addNewCard')}
        </S.AddBtn>
        <PaymentModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          form={form}
          cardData={cardData}
          setCardData={setCardData}
          setCards={setCards}
        />
      </S.Wrapper>
    ),
    [isTablet, cards, handleOpenModal, setCardData, setCards, isModalVisible, cardData],
  );

  return isTablet ? content : <Card>{content}</Card>;
};
