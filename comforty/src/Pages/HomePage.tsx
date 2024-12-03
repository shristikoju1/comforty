import Hero from '@/Components/Sections/Hero'
import FeaturedProducts from '@/Components/Sections/FeaturedProducts'
import TopCategories from '@/Components/Sections/TopCategories'
import OurProducts from '@/Components/Sections/OurProducts'
import Testimonials from '@/Components/Sections/Testimonials'
import RecentlyAdded from '@/Components/Sections/RecentlyAdded'

const HomePage = () => {
  return (
    <>
        <Hero/>
        <FeaturedProducts/>
        <TopCategories/>
        <OurProducts/>
        <Testimonials/>
        <RecentlyAdded/>
    </>
  )
}

export default HomePage