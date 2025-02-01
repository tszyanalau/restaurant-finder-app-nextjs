'use client'

import { useState, useEffect, useCallback } from 'react'
import { ApiResponse } from '@/types/apiResponse'

export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = useCallback(async () => {
    setLoading(true)
    const res = await fetch(url)
    const result: ApiResponse<T> = await res.json()

    if (result.success) {
      setData(result.data as T)
    } else {
      setError(result.data as string)
    }
    setLoading(false)
  }, [url])

  useEffect(() => {
    loadData()
  }, [loadData])

  return { data, loading, error, refetch: loadData }
}
