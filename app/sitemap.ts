import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rabeelportfolio.netlify.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://rabeelportfolio.netlify.app/rabeel-ahmed-sulehria.webp'
      ]
    },
  ]
}
