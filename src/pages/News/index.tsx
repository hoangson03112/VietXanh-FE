import React from 'react'
import NewsCard from './components/NewsCard'

function NewsView() {
  return (
    <div className='flex justify-between flex-wrap space-y-20 '>
<NewsCard />
    </div>
  )
}

export default NewsView