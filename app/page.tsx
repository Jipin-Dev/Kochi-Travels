import { Metadata } from 'next'
import Footer from './components/Footer'
import ViewMoreSection from './components/ViewMoreSection'
import { getHomeConfig } from './utils/config'

export const metadata: Metadata = {
  title: 'Photography Gallery',
  description: 'Professional photography services and gallery showcasing nature, urban, travel, and architecture photography.',
}

export default function Home() {
  const config = getHomeConfig()

  // TODO: move this into your config (e.g. config.hero.moreText) if you'd
  // rather manage it alongside title/subtitle instead of hardcoding it here.
  const moreText =
    "We're a full-service photography studio specializing in nature, " +
    "urban, travel, and architecture photography. Every shoot is planned " +
    "around natural light and composition, and every gallery is curated " +
    "by hand — no stock filters, no shortcuts. Whether you're booking a " +
    "session or licensing a print, we work closely with you from the " +
    "first shot to the final edit to make sure the result actually looks " +
    "like the place, the person, or the moment you wanted captured."

  return (
    <div className="flex flex-col min-h-screen">
      {/* Background layer */}
      <div className="fixed inset-0 bg-gradient-to-b from-white via-yellow-50 to-yellow-100 opacity-50" />
      
      {/* Content layer */}
      <div className="flex-1 pt-8 md:pt-16 flex items-center relative z-10">
        <div className="container mx-auto px-4">
          {/* Main content area */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Mobile image display area */}
            <div className="md:hidden relative h-[45vh] flex items-center justify-center">
              <div className="w-full max-w-[400px] relative h-[35vh]">
                {/* Mobile first image */}
                <div className="absolute inset-0 w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform -rotate-3 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                  <div className="w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={config.featuredCollections[0].image}
                      alt={config.featuredCollections[0].title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* Mobile second image */}
                <div className="absolute inset-0 w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform rotate-2 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                  <div className="w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={config.featuredCollections[1].image}
                      alt={config.featuredCollections[1].title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                {/* Mobile third image */}
                <div className="absolute inset-0 w-full aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform -rotate-1 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                  <div className="w-full h-full overflow-hidden rounded-xl">
                    <img
                      src={config.featuredCollections[2].image}
                      alt={config.featuredCollections[2].title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop image display area */}
            <div className="hidden md:block relative h-[600px] flex items-center">
              {/* First image - bottom layer */}
              <div className="absolute right-0 top-0 w-[90%] aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform -rotate-3 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={config.featuredCollections[0].image}
                    alt={config.featuredCollections[0].title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Second image */}
              <div className="absolute right-[15%] top-[10%] w-[90%] aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform rotate-2 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={config.featuredCollections[1].image}
                    alt={config.featuredCollections[1].title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* Third image */}
              <div className="absolute right-[30%] top-[20%] w-[90%] aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform -rotate-1 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={config.featuredCollections[2].image}
                    alt={config.featuredCollections[2].title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Fourth image */}
              <div className="absolute right-[5%] top-[30%] w-[85%] aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform rotate-3 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={config.featuredCollections[0].image}
                    alt={config.featuredCollections[0].title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Fifth image */}
              <div className="absolute right-[25%] top-[5%] w-[85%] aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform -rotate-2 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={config.featuredCollections[1].image}
                    alt={config.featuredCollections[1].title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Sixth image */}
              <div className="absolute right-[40%] top-[15%] w-[85%] aspect-[4/3] bg-gradient-to-br from-gray-50 to-white p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform rotate-1 hover:scale-[1.02] transition-transform duration-300 rounded-2xl">
                <div className="w-full h-full overflow-hidden rounded-xl">
                  <img
                    src={config.featuredCollections[2].image}
                    alt={config.featuredCollections[2].title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Right introduction area — title, subtitle, and the two buttons */}
            <ViewMoreSection
              title={config.hero.title}
              subtitle={config.hero.subtitle}
              ctaLabel={config.hero.cta.primary}
              ctaHref={config.featuredCollections[0].link}
              moreText={moreText}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}