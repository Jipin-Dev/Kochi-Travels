'use client'

import { useState } from 'react'
import Link from 'next/link'

interface ViewMoreSectionProps {
  title: string
  subtitle: string
  ctaLabel: string
  ctaHref: string
  moreText: string
}

export default function ViewMoreSection({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  moreText,
}: ViewMoreSectionProps) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="flex flex-col justify-center relative z-20 mt-8 md:mt-0">
      <h2 className="text-3xl md:text-4xl font-light mb-3 md:mb-4 text-gray-900">
        {title}
      </h2>
      <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 italic">
        {subtitle}
      </p>

      {/* Buttons row */}
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        {/* Existing primary button */}
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center px-6 py-3 md:py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors w-fit text-base md:text-sm"
        >
          {ctaLabel}
        </Link>

        {/* New "View More" toggle button */}
        <button
          type="button"
          onClick={() => setShowMore((prev) => !prev)}
          aria-expanded={showMore}
          aria-controls="home-view-more-content"
          className="inline-flex items-center justify-center px-6 py-3 md:py-2.5 border border-gray-800 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition-colors w-fit text-base md:text-sm"
        >
          {showMore ? 'View Less' : 'View More'}
        </button>
      </div>

      {/* Expandable paragraph — animates open/closed, stays on the same page */}
      <div
        id="home-view-more-content"
        className={`grid transition-all duration-300 ease-in-out ${
          showMore
            ? 'grid-rows-[1fr] opacity-100 mt-4 md:mt-6'
            : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {moreText}
          </p>
        </div>
      </div>
    </div>
  )
} 