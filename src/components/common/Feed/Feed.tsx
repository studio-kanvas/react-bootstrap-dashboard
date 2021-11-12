import React from 'react';
import { useTranslation } from 'react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FeedCard } from '../FeedCard/FeedCard';
import * as S from './Feed.styles';

interface FeedCard {
  avatarUrl: string;
  author: string;
  title: string;
  date: number;
  text: string;
  img: string;
}

export interface FeedProps {
  cards: FeedCard[];
  next: () => void;
  hasMore: boolean;
}

export const Feed: React.FC<FeedProps> = ({ cards, next, hasMore }) => {
  const { t } = useTranslation();

  return (
    <InfiniteScroll dataLength={cards.length} next={next} hasMore={hasMore} loader={<h4>{t('common.loading')}</h4>}>
      <S.NewsWrapper>
        {cards.map((post, index) => (
          <FeedCard
            key={index}
            title={post.title}
            description={post.text}
            date={post.date}
            imgUrl={post.img}
            author={post.author}
            avatar={post.avatarUrl}
            keywords
          />
        ))}
      </S.NewsWrapper>
    </InfiniteScroll>
  );
};
