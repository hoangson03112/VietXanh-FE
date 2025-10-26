import React from 'react'
import { Metadata } from 'next'
import NewsView from '@/src/pages/News'
export const metadata: Metadata = {
  title: 'Bài viết - Việt Xanh',
  description: 'Cập nhật tin tức mới nhất từ Việt Xanh',
}

function NewsPage() {
  return (
    <NewsView />
  )
}

export default NewsPage