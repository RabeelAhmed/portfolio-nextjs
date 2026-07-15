import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://rabeelsportfolio.netlify.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        'https://rabeelsportfolio.netlify.app/rabeel-ahmed-sulehria.webp'
      ]
    },
  ]
}
