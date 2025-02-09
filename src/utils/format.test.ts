import { formatTime } from './format'

describe('formatTime', () => {
  it('formats time correctly for AM', () => {
    expect(formatTime(0, 0)).toBe('12:00 AM')
    expect(formatTime(1, 5)).toBe('1:05 AM')
    expect(formatTime(11, 59)).toBe('11:59 AM')
  })

  it('formats time correctly for PM', () => {
    expect(formatTime(12, 0)).toBe('12:00 PM')
    expect(formatTime(13, 5)).toBe('1:05 PM')
    expect(formatTime(23, 59)).toBe('11:59 PM')
  })

  it('formats time correctly for edge cases', () => {
    expect(formatTime(0, 0)).toBe('12:00 AM')
    expect(formatTime(12, 0)).toBe('12:00 PM')
    expect(formatTime(23, 0)).toBe('11:00 PM')
  })
})
