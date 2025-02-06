'use client'

import ErrorPage from '@/components/ErrorPage'

import './globals.css'

export default function GlobalError() {
  return (
    <html>
      <body>
        <ErrorPage>
          <p>Something went wrong!</p>
        </ErrorPage>
      </body>
    </html>
  )
}
