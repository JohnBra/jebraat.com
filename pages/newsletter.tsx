import { PageSEO } from '@/components/SEO'
import Subscribe from '@/components/Subscribe'
import siteMetadata from '@/data/siteMetadata'

export default function Newsletter() {
  return (
    <>
      <PageSEO
        title={`The Inspired Indiepreneur - ${siteMetadata.authorTitle}`}
        description="Inspiring you to make your first dollar online. Every Sunday every other week you get 1 actionable tip to launch, grow and monetize your Indie business in less than 5 minutes."
      />
      <div>
        <Subscribe />
      </div>
    </>
  )
}
