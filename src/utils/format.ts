export const formatTime = (hour: number, minute: number) => {
  const period = hour >= 12 ? 'PM' : 'AM'
  const formattedHour = hour % 12 || 12
  const formattedMinute = minute.toString().padStart(2, '0')
  return `${formattedHour}:${formattedMinute} ${period}`
}
