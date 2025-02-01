'use client'

import { Place } from '@/types/placesApiResponse'
import { useFetchData } from '@/app/hooks/useFetchData'
import Page from '@/components/Page'
import Button from '@/components/Button'
import Heading from '@/components/Heading'

const SearchPage = () => {
  const { data: restaurants, loading, error, refetch } = useFetchData<Place[]>('/api/restaurants')

  const renderContent = () => {
    if (loading) return <div>loading...</div>
    if (error)
      return (
        <div>
          <Button onClick={refetch} disabled={loading}>
            Click
          </Button>
          <div>{error}</div>
        </div>
      )
    return (
      <div>
        <div>
          <Heading level={3}>{process.env.NEXT_PUBLIC_APP_NAME}</Heading>
          <Button onClick={refetch} disabled={loading}>
            Click
          </Button>
        </div>
        {restaurants?.map(({ displayName, id }) => <div key={id}>{displayName.text}</div>)}
      </div>
    )
  }
  return <Page>{renderContent()}</Page>
}

export default SearchPage
