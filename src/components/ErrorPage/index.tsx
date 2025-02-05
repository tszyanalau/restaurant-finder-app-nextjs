import Link from '@/components/Link'

export default function ErrorPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Opps!</h1>
          <div className="py-6">
            {children}
            <p>
              <Link href="/">Go to Top</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
