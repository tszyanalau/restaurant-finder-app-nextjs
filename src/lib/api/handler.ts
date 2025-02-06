import { NextResponse } from 'next/server'
import { AxiosError } from 'axios'

export const handleError = (err: AxiosError) => {
  console.error(err)
  if (err.status) {
    return NextResponse.json({ success: false, data: err.message }, { status: err.status })
  }
  return NextResponse.json({ success: false, data: 'Internal server error' }, { status: 500 })
}
