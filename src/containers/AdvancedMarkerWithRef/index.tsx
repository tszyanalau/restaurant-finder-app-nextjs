'use client'

import { AdvancedMarker, AdvancedMarkerProps, useAdvancedMarkerRef } from '@vis.gl/react-google-maps'

type AdvancedMarkerWithRefProps = AdvancedMarkerProps & {
  onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void
}

export default function AdvancedMarkerWithRef(props: AdvancedMarkerWithRefProps) {
  const { children, onMarkerClick, ...advancedMarkerProps } = props
  const [markerRef, marker] = useAdvancedMarkerRef()

  return (
    <AdvancedMarker
      onClick={() => {
        if (marker) {
          onMarkerClick(marker)
        }
      }}
      ref={markerRef}
      {...advancedMarkerProps}
    >
      {children}
    </AdvancedMarker>
  )
}
