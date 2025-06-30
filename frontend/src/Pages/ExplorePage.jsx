import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import ExploreSection from '../components/Explore/ExploreSection'
import SectionHeader from '../components/UI/SectionHeader'



export const ExplorePage = () => {
  return (
     <>
          <Navbar />
          <div style={{ backgroundColor: '#FFFFFF' }}>
              <SectionHeader title="Explore Nearby & Popular Spots" subtitle="Find your vibe by location, category, or trend." />
              <ExploreSection />
          </div>
          <Footer />
      </>
  )
}
