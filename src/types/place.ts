type Location = {
  latitude: number
  longitude: number
}

type Point = {
  day: number
  hour: number
  minute: number
}

export type Period = {
  open: Point
  close: Point
}

export type Price = {
  currencyCode: string
  units: string
}

// from google place API documentation
export type Place = {
  id: string
  location?: Location
  displayName?: {
    text?: string
  }
  takeout?: boolean
  delivery?: boolean
  dineIn?: boolean
}

export type PlaceDetails = {
  id: string
  nationalPhoneNumber?: string
  formattedAddress?: string
  location?: Location
  rating?: number
  googleMapsUri?: string
  websiteUri?: string
  userRatingCount?: number
  displayName?: {
    text?: string
  }
  primaryTypeDisplayName?: {
    text?: string
  }
  regularOpeningHours?: {
    openNow?: boolean
    periods?: Period[]
  }
  priceRange?: {
    startPrice: Price
    endPrice?: Price
  }
}
