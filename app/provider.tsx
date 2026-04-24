import { Tawkto } from '@/components/Tawkto'

const CustomProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Tawkto />
    </>
  )
}

export default CustomProvider
