import { NextRequest, NextResponse } from 'next/server'
import apiClient from '@/lib/api/client'
import { handleError } from '@/lib/api/handler'
import { Place } from '@/types/place'
import { ApiResponse } from '@/types/apiResponse'

const latitude = parseFloat(process.env.NEXT_PUBLIC_API_LATITUDE as string)
const longitude = parseFloat(process.env.NEXT_PUBLIC_API_LONGITUDE as string)
const limit = parseInt(process.env.API_LIMIT as string)
const defaultRadius = process.env.NEXT_PUBLIC_DEFAULT_RADIUS as string
const placeTypes = process.env.API_PLACE_TYPES?.split(',')
const fields = 'places.id,places.location,places.displayName,places.takeout,places.delivery,places.dineIn'

export const GET = async (request: NextRequest): Promise<NextResponse<ApiResponse<Place[]>>> => {
  const { searchParams } = request.nextUrl
  const radius = searchParams.get('radius') || defaultRadius

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
      'X-Goog-FieldMask': fields,
    },
  }
  return apiClient
    .post<{ places: Place[] }>('/places:searchNearby', data, config)
    .then((res) => {
      return NextResponse.json({ success: true, data: res.data.places })
    })
    .catch((err) => {
      return handleError(err)
    })
}
