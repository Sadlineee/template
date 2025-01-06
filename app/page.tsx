'use client'

import { CompanyInfo, Employees, Footer, Header, Review, TopSection } from '@/components'
import { DashedLine, HomeBox } from './Home.styled'

export default function Home() {
  return (
    <>
      <Header />
      <HomeBox>
        <TopSection />
        <DashedLine />
        <CompanyInfo />
        <DashedLine />
        <Employees />
        <DashedLine />
        <Review />
        <DashedLine />
      </HomeBox>
      <Footer />
    </> 
  )
}