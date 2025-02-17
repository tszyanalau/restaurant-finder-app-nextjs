import { notFound } from 'next/navigation'
import Page from '@/components/Page'
import Flex from '@/components/Flex'
import Heading from '@/components/Heading'
import Rating from '@/components/Rating'
import ExternalLink from '@/components/ExternalLink'
import PriceRange from '@/components/PriceRange'
import Table from '@/components/Table'
import Map from '@/containers/Map'
import { DEFAULT_PLACEHOLDER } from '@/lib/constants'
import OpeningHours from './OpeningHours'

export default async function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const res = await fetch(`${process.env.APP_API_BASE_URL}/api/restaurants/${id}`)
  const result = await res.json()
  const { success, data } = result
  if (success) {
    const restaurantDetails = [
      { label: 'Phone Number', value: data.nationalPhoneNumber ?? DEFAULT_PLACEHOLDER },
      {
        label: 'Website',
        value: data.websiteUri ? (
          <ExternalLink className="text-primary" href={data.websiteUri}>
            {data.websiteUri}
          </ExternalLink>
        ) : (
          DEFAULT_PLACEHOLDER
        ),
      },
      {
        label: 'Price Range',
        value: data.priceRange ? <PriceRange {...data.priceRange} /> : DEFAULT_PLACEHOLDER,
      },
    ]
    return (
      <Page>
        {data.displayName?.text && <Heading level={1}>{data.displayName.text}</Heading>}
        <Flex direction="vertical">
          <Flex gap={2} className="flex-col sm:flex-row">
            <Flex>
              {data.rating ?? DEFAULT_PLACEHOLDER}
              <Rating className="text-primary" value={data.rating} />{' '}
              {data.userRatingCount ? `(${data.userRatingCount})` : 'No review'}
            </Flex>
            <Flex>
              {data.primaryTypeDisplayName?.text && <div>{data.primaryTypeDisplayName?.text}</div>}
              {data.regularOpeningHours?.openNow && (
                <>
                  &#183;
                  <div className={data.regularOpeningHours?.openNow ? 'text-success' : 'text-neutral'}>
                    {data.regularOpeningHours.openNow ? 'Open Now' : 'Closed'}
                  </div>
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        {(data.formattedAddress || data.location || data.regularOpeningHours?.weekdayDescriptions) && (
          <Flex direction="vertical">
            <Heading level={3}>Location & Opening Hours</Heading>
            {data.formattedAddress && <div>{data.formattedAddress}</div>}
            <Flex gap={2} className="flex-col sm:flex-row">
              {data.location && (
                <div className="w-full sm:w-1/2">
                  <Map lat={data.location.latitude} lng={data.location.longitude} url={data.googleMapsUri} />
                </div>
              )}
              {data.regularOpeningHours?.periods && (
                <OpeningHours periods={data.regularOpeningHours?.periods} className="sm:w-auto w-full" />
              )}
            </Flex>
          </Flex>
        )}
        <Flex direction="vertical">
          <Heading level={3}>Details</Heading>
          <Table data={restaurantDetails} />
        </Flex>
      </Page>
    )
  }
  if (res.status === 400) {
    notFound()
  }
  throw new Error('Unknown error')
}
