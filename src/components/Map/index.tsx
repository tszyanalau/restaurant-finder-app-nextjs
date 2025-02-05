'use client'

import { APIProvider, Map as GMap, Marker } from '@vis.gl/react-google-maps'

type MapProps = {
  lat: number
  lng: number
  url?: string
}

export default function Map({ lat, lng, url }: MapProps) {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY as string}>
      <GMap
        className="w-full h-64"
        defaultCenter={{ lat, lng }}
        defaultZoom={17}
        disableDefaultUI
        draggable={false}
        clickableIcons={false}
      >
        <Marker
          position={{ lat, lng }}
          onClick={() => {
            if (url) window.open(url, '_blank')
          }}
        />
      </GMap>
    </APIProvider>
  )
}
