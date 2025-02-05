const zoomLevels: {
  maxRadius: number
  zoom: number
}[] = [
  { maxRadius: 100, zoom: 18 },
  { maxRadius: 200, zoom: 17 },
  { maxRadius: 500, zoom: 16 },
  { maxRadius: Infinity, zoom: 15 },
]

export const getZoomValue = (radius: number): number => {
  const level = zoomLevels.find(({ maxRadius }) => radius <= maxRadius)
  return level ? level.zoom : 15 // Default zoom level if no match is found
}
