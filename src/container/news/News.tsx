import React from 'react'
import { useFetchNews } from '../../queries/useFetchNews'
import NewsCard from './components/NewsCard';

export interface newsType {
    Title: string;
    Thumbnail: string;
    Link: string;
    StartDate: string;
    EndDate: string;
    RewardDate: string;
  }

export default function News() {
    const news = useFetchNews();
    
  return (
    <ul>
        {news.map((newsItem:newsType) => (
            <NewsCard key={newsItem.Title + Date.now()} newsItem={newsItem}></NewsCard>
        ))}
    </ul>

  )
}
