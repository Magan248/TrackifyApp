import React, { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useFilter(dataList, callback) {
  const [query, setQuery] = useLocalStorage('query', '')

  const filteredData =
    query === ''
      ? dataList
      : dataList.filter((data) =>
          callback(data).toLowerCase().includes(query.toLowerCase())
        )
  return [filteredData, setQuery, query]
}
