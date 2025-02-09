import { notFound } from 'next/navigation'
import Page from '@/components/Page'
import Flex from '@/components/Flex'
import Heading from '@/components/Heading'
import Rating from '@/components/Rating'
import ExternalLink from '@/components/ExternalLink'
import PriceRange from '@/components/PriceRange'
import Map from '@/containers/Map'

const DEFAULT_PLACEHOLDER = '-'

export default async function RestaurantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const res = await fetch(`${process.env.APP_API_BASE_URL}/api/restaurants/${id}`)
  const result = await res.json()
  const { success, data } = result
  if (success) {
    return (
      <Page>
        {data.displayName?.text && <Heading level={1}>{data.displayName.text}</Heading>}
        <Flex direction="vertical">
          <Flex gap={2} className="flex-col sm:flex-row">
            <Flex>
              {data.rating ?? DEFAULT_PLACEHOLDER}
              <Rating value={data.rating} /> {data.userRatingCount ? `(${data.userRatingCount})` : 'No review'}
            </Flex>
            <Flex>
              {data.primaryTypeDisplayName?.text && <div>{data.primaryTypeDisplayName?.text}</div>}
              {data.currentOpeningHours?.openNow && (
                <>
                  &#183;
                  <div className={data.currentOpeningHours?.openNow ? 'text-success' : 'text-neutral'}>
                    {data.currentOpeningHours.openNow ? 'Open Now' : 'Closed'}
                  </div>
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        {(data.formattedAddress || data.location || data.currentOpeningHours?.weekdayDescriptions) && (
          <Flex direction="vertical">
            <Heading level={3}>Location & Opening Hours</Heading>
            {data.formattedAddress && <div>{data.formattedAddress}</div>}
            <Flex gap={2} className="flex-col sm:flex-row">
              {data.location && (
                <div className="w-full sm:w-1/2">
                  <Map lat={data.location.latitude} lng={data.location.longitude} url={data.googleMapsUri} />
                </div>
              )}
              {data.currentOpeningHours?.weekdayDescriptions && (
                <Flex direction="vertical">
                  {data.currentOpeningHours.weekdayDescriptions.map((text: string) => (
                    <div key={text}>{text}</div>
                  ))}
                </Flex>
              )}
            </Flex>
          </Flex>
        )}
        <Flex direction="vertical">
          <Heading level={3}>Details</Heading>
          <div className="overflow-x-auto">
            <table className="table not-prose">
              <tbody>
                <tr>
                  <th>Phone Number</th>
                  <td>{data.nationalPhoneNumber ?? DEFAULT_PLACEHOLDER}</td>
                </tr>
                <tr>
                  <th>Website</th>
                  <td>
                    {data.websiteUri ? (
                      <ExternalLink className="text-primary" href={data.websiteUri}>
                        {data.websiteUri}
                      </ExternalLink>
                    ) : (
                      DEFAULT_PLACEHOLDER
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Price Range</th>
                  <td>{data.priceRange ? <PriceRange {...data.priceRange} /> : DEFAULT_PLACEHOLDER}</td>
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
