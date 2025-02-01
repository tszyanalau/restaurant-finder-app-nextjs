import { NextResponse } from 'next/server'
import apiClient from '@/lib/api/apiClient'
import { NearbySearchApiResponse, Place } from '@/types/placesApiResponse'
import { ApiResponse } from '@/types/apiResponse'

const latitude = parseFloat(process.env.API_LATITUDE as string)
const longitude = parseFloat(process.env.API_LONGITUDE as string)
const radius = parseFloat(process.env.API_RADIUS as string)
const limit = parseInt(process.env.API_LIMIT as string)
const placeTypes = process.env.API_PLACE_TYPES?.split(',')
const searchFields =
  'places.id,places.location,places.displayName,places.takeout,places.delivery,places.dineIn,places.primaryTypeDisplayName'

export const GET = async (): Promise<NextResponse<ApiResponse<Place[]>>> => {
  const data = {
    includedPrimaryTypes: placeTypes,
    maxResultCount: limit,
    locationRestriction: {
      circle: {
        center: {
          latitude,
          longitude,
        },
        radius,
      },
    },
  }
  const config = {
    headers: {
      'X-Goog-FieldMask': searchFields,
    },
  }
  return apiClient
    .post<NearbySearchApiResponse>('/places:searchNearby', data, config)
    .then((res) => {
      return NextResponse.json({ success: true, data: res.data.places })
    })
    .catch((err) => {
      return NextResponse.json({ success: false, data: err.message }, { status: err.status })
    })
}
