import classNames from 'classnames'

type TableProps = React.HTMLAttributes<HTMLDivElement> & {
  data: { label: string; value: React.ReactNode }[]
}

export default function Table({ data, className }: TableProps) {
  return (
    <div className={classNames('overflow-x-auto', className)}>
      <table className="table not-prose">
        <tbody>
          {data.map((item) => (
            <tr key={item.label}>
              <th>{item.label}</th>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
