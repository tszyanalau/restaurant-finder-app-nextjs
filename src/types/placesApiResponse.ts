type Location = {
  latitude: number
  longitude: number
}

export type Place = {
  id: string
  location: Location
  displayName: {
    text: string
  }
  primaryTypeDisplayName: {
    text: string
  }
  takeout: boolean
  delivery: boolean
  dineIn: boolean
}

export type NearbySearchApiResponse = {
  places: Place[]
}
