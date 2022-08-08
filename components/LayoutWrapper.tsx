import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

type Props = {
  children: React.ReactNode
}
export default function LayoutWrapper({ children }: Props) {
  return (
    <SectionContainer>
      <Navbar />
      {children}
      <Footer />
    </SectionContainer>
  )
}
