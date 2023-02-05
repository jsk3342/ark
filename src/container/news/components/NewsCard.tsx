import React from 'react'
import { newsType } from '../News'

export default function NewsCard({newsItem} : {newsItem : newsType}) {
  return (
    <li>
        <h2>{newsItem.Title}</h2>
        <img src={newsItem.Thumbnail}/>
        <p>시작일 {newsItem.StartDate}</p>
        <p>종료일 {newsItem.EndDate}</p>
        <p>보상 종료일 {newsItem.RewardDate}</p>
    </li>
  )
}
