import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import Navbar from '@/components/Navbar'

type Props = {
  children: React.ReactNode;
}
export default function LayoutWrapper({ children }: Props) {
  return (
    <SectionContainer>
      <Navbar />
      {children}
    </SectionContainer>
  )
}