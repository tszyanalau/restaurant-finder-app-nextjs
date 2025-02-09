type TableProps = {
  data: { label: string; value: React.ReactNode }[]
}

const Table = ({ data }: TableProps) => {
  return (
    <div className="overflow-x-auto">
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

export default Table
