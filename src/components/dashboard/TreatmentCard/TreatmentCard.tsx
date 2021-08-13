import React, { useState } from 'react';
import dayjs from 'dayjs';
import { TreatmentHeader } from './TreatmentHeader/TreatmentHeader';
import { Card } from '../../common/Card/Card';
import { TreatmentCalendar } from './TreatmentCalendar/TreatmentCalendar';
import { TreatmentPanel } from './TreatmentPanel/TreatmentPanel';
import { AppDate } from '../../../constants/Dates';
import * as S from './TreatmentCard.styles';

export interface TreatmentCardState {
  isDateClicked: boolean;
  date: AppDate;
}

export const TreatmentCard: React.FC = () => {
  const [selectedDate, setDate] = useState<TreatmentCardState>({
    isDateClicked: false,
    date: dayjs(),
  });

  return (
    <Card title={<TreatmentHeader date={selectedDate} setDate={setDate} />}>
      <S.Wrapper>
        {!selectedDate.isDateClicked && <TreatmentCalendar date={selectedDate} setDate={setDate} />}
        {selectedDate.isDateClicked && <TreatmentPanel date={selectedDate.date} />}
      </S.Wrapper>
    </Card>
  );
};
