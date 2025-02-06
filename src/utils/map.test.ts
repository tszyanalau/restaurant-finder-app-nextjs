import { getZoomValue } from './map'

describe('getZoomValue', () => {
  it('returns the correct zoom level for radius <= 100', () => {
    expect(getZoomValue(100)).toBe(18)
    expect(getZoomValue(50)).toBe(18)
  })

  it('returns the correct zoom level for radius <= 200', () => {
    expect(getZoomValue(200)).toBe(17)
    expect(getZoomValue(150)).toBe(17)
  })

  it('returns the correct zoom level for radius <= 500', () => {
    expect(getZoomValue(500)).toBe(16)
    expect(getZoomValue(300)).toBe(16)
  })

  it('returns the correct zoom level for radius > 500', () => {
    expect(getZoomValue(600)).toBe(15)
    expect(getZoomValue(1000)).toBe(15)
  })

  it('returns the default zoom level if no match is found', () => {
    expect(getZoomValue(Infinity)).toBe(15)
  })
})
