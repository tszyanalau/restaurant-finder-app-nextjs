import { NextRequest, NextResponse } from 'next/server'
import apiClient from '@/lib/api/client'
import { handleError } from '@/lib/api/handler'
import { PlaceDetails } from '@/types/place'
import { ApiResponse } from '@/types/apiResponse'

const fields =
  'id,nationalPhoneNumber,formattedAddress,location,rating,googleMapsUri,websiteUri,userRatingCount,displayName,primaryTypeDisplayName,currentOpeningHours,priceRange'

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse<ApiResponse<PlaceDetails>>> => {
  const { id } = await params
  if (!id) {
    return NextResponse.json({ success: false, data: 'Missing restaurant ID' }, { status: 400 })
  }

  const config = {
    headers: {
      'X-Goog-FieldMask': fields,
    },
  }

  return apiClient
    .get<PlaceDetails>(`/places/${id}`, config)
    .then((res) => {
      return NextResponse.json({ success: true, data: res.data })
    })
    .catch((err) => {
      return handleError(err)
    })
}
