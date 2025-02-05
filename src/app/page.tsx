'use client'

import { useEffect, useState } from 'react'
import { APIProvider, Map, AdvancedMarker, InfoWindow, MapCameraChangedEvent } from '@vis.gl/react-google-maps'

import { Place } from '@/types/place'
import { useFetchData } from '@/app/hooks/useFetchData'
import { getZoomValue } from '@/utils/map'

import Page from '@/components/Page'
import Badge from '@/components/Badge'
import Alert from '@/components/Alert'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Range from '@/components/Range'
import AdvancedMarkerWithRef from '@/components/AdvancedMarkerWithRef'
import Marker from '@/components/Marker'
import Flex from '@/components/Flex'
import Flag from '@/components/Flag'
import Link from '@/components/Link'

const defaultCenter = {
  lat: parseFloat(process.env.NEXT_PUBLIC_API_LATITUDE as string),
  lng: parseFloat(process.env.NEXT_PUBLIC_API_LONGITUDE as string),
}

const defaultRadius = parseFloat(process.env.NEXT_PUBLIC_DEFAULT_RADIUS as string)

export default function HomePage() {
  const [selectedMarker, setSelectedMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null)
  const [selectedRestaurant, setSelectedRestaurant] = useState<Place | null>(null)
  const [showInfoWindow, setShowInfoWindow] = useState(false)
  const [center, setCenter] = useState(defaultCenter)
  const [zoom, setZoom] = useState(getZoomValue(defaultRadius))
  const [radius, setRadius] = useState(defaultRadius)
  const [restaurants, setRestaurants] = useState<Place[]>([])
  const url = `/api/restaurants?${new URLSearchParams({ radius: radius.toString() }).toString()}`
  const { data, loading, error, refetch } = useFetchData<Place[]>(url)

  const resetInfoWindow = () => {
    if (showInfoWindow) setShowInfoWindow(false)
    if (selectedMarker) setSelectedMarker(null)
    if (selectedRestaurant) setSelectedRestaurant(null)
  }

  const resetMap = () => {
    setCenter(defaultCenter)
    setZoom(getZoomValue(radius))
  }

  useEffect(() => {
    if (data) {
      setRestaurants(data)
      setZoom(getZoomValue(radius))
    }
  }, [data])

  useEffect(() => {
    if (loading || error) {
      setRestaurants([])
    }
  }, [loading])

  return (
    <Page>
      <Heading level={1}>{process.env.NEXT_PUBLIC_APP_NAME}</Heading>
      <Flex gap={2}>
        <Badge>Lat</Badge>
        {defaultCenter.lat}
        <Badge>Lng</Badge>
        {defaultCenter.lng}
      </Flex>
      <Flex gap={2}>
        Radius
        <Range
          min={100}
          max={1000}
          value={radius}
          step={100}
          disabled={loading}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setRadius(Number(event.target.value))
          }}
        />
        <div>{radius}m</div>
        <Button
          className="min-w-24"
          onClick={() => {
            resetInfoWindow()
            resetMap()
            refetch()
          }}
          disabled={loading}
        >
          {loading ? <span className="loading loading-dots loading-sm" /> : 'Search'}
        </Button>
      </Flex>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}>
        <Map
          className="not-prose h-[24rem] sm:h-[36rem] w-full"
          mapId="restaurant-map"
          defaultCenter={center}
          center={center}
          defaultZoom={getZoomValue(defaultRadius)}
          zoom={zoom}
          zoomControl
          disableDefaultUI
          onZoomChanged={(event: MapCameraChangedEvent) => {
            setZoom(event.detail.zoom)
          }}
          onCenterChanged={(event: MapCameraChangedEvent) => {
            setCenter(event.detail.center)
          }}
          onDragend={() => {
            resetInfoWindow()
          }}
        >
          <AdvancedMarker position={defaultCenter}>
            <Marker />
          </AdvancedMarker>
          {restaurants &&
            restaurants.map((restaurant) => (
              <AdvancedMarkerWithRef
                key={restaurant.id}
                position={{
                  lat: restaurant.location.latitude,
                  lng: restaurant.location.longitude,
                }}
                onMarkerClick={(marker: google.maps.marker.AdvancedMarkerElement) => {
                  if (marker) {
                    setSelectedMarker(marker)
                  }
                  if (restaurant.id === selectedRestaurant?.id) {
                    setShowInfoWindow((show) => !show)
                  } else {
                    setSelectedRestaurant(restaurant)
                    setShowInfoWindow(true)
                  }
                }}
              >
                <Marker variant="accent" />
              </AdvancedMarkerWithRef>
            ))}
        </Map>
        {showInfoWindow && selectedMarker && selectedRestaurant && (
          <InfoWindow anchor={selectedMarker} pixelOffset={[0, -2]} headerContent={<b>{selectedRestaurant.displayName.text}</b>}>
            <Flag label="Dine In" flag={selectedRestaurant.dineIn} />
            <Flag label="Takeout" flag={selectedRestaurant.takeout} />
            <Flag label="Delivery" flag={selectedRestaurant.delivery} />
            <div className="mt-4">
              <Link href={`/restaurant/${selectedRestaurant.id}`} target="_blank" rel="noreferrer" className="mt-4">
                View Details
              </Link>
            </div>
          </InfoWindow>
        )}
      </APIProvider>
      {!loading && !error && restaurants.length === 0 && <Alert type="info">No restaurants found.</Alert>}
      {!loading && error && <Alert type="error">Something went wrong!</Alert>}
    </Page>
  )
}
