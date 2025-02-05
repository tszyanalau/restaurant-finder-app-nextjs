import Flex from '@/components/Flex'

type PageProps = {
  children: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <Flex direction="vertical" gap={2} className="p-4 m-auto prose">
      {children}
    </Flex>
  )
}
