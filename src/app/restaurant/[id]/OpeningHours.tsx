import { Period } from '@/types/place'
import { formatTime } from '@/utils/format'
import Table from '@/components/Table'
import { DAYS_OF_WEEK } from '@/lib/constants'

type OpeningHoursProps = React.HTMLAttributes<HTMLDivElement> & {
  periods: Period[]
}

export default function OpeningHours({ periods, className }: OpeningHoursProps) {
  const data = DAYS_OF_WEEK.map((day, index) => {
    const period = periods.find(({ open }) => open.day === index)
    return {
      label: day,
      value: period
        ? `${formatTime(period.open.hour, period.open.minute)} - ${formatTime(period.close.hour, period.close.minute)}`
        : 'Closed',
    }
  })
  return <Table data={data} className={className} />
}
