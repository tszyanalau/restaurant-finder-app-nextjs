import { notFound } from 'next/navigation'
import Page from '@/components/Page'
import Flex from '@/components/Flex'
import Heading from '@/components/Heading'
import Rating from '@/components/Rating'
import Map from '@/components/Map'
import ExternalLink from '@/components/ExternalLink'
import PriceRange from '@/components/PriceRange'

export default async function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const res = await fetch(`${process.env.APP_API_BASE_URL}/api/restaurants/${id}`)
  const result = await res.json()
  const { success, data } = result
  if (success) {
    return (
      <Page>
        <Heading level={1}>{data.displayName.text}</Heading>
        <Flex direction="vertical">
          <Flex>
            {data.rating}
            <Rating value={data.rating} /> ({data.userRatingCount})
            <Flex gap={2}>
              <div>{data.primaryTypeDisplayName.text}</div>
              <div className={data.currentOpeningHours.openNow ? 'text-success' : 'text-neutral'}>
                {data.currentOpeningHours.openNow ? 'Open Now' : 'Closed'}
              </div>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="vertical">
          <Heading level={3}>Location & Opening Hours</Heading>
          <div>{data.formattedAddress}</div>
          <Flex gap={2}>
            <div className="w-1/2">
              <Map lat={data.location.latitude} lng={data.location.longitude} url={data.googleMapsUri} />
            </div>
            <Flex direction="vertical">
              {data.currentOpeningHours.weekdayDescriptions.map((text: string) => (
                <div key={text}>{text}</div>
              ))}
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="vertical">
          <Heading level={3}>Details</Heading>
          <div className="overflow-x-auto">
            <table className="table not-prose">
              <tbody>
                <tr>
                  <th>Phone Number</th>
                  <td>{data.nationalPhoneNumber}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td>
                    <ExternalLink className="text-primary" href={data.websiteUri}>
                      {data.websiteUri}
                    </ExternalLink>
                  </td>
                </tr>
                <tr>
                  <th>Price Range</th>
                  <td>
                    <PriceRange {...data.priceRange} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Flex>
      </Page>
    )
  }
  if (res.status === 400) {
    notFound()
  }
  throw new Error('Unknown error')
}
