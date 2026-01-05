import type { Theme } from '../types/themes';

export const themes: Record<string, Theme> = {
  woozio: {
    name: "Woozio - Modern WooCommerce Theme",
    description: "A premium WordPress theme designed for modern e-commerce stores. Woozio combines beautiful design with powerful WooCommerce functionality, perfect for fashion, electronics, and lifestyle businesses.",
    packages: [
      {
        ID: "a3ae120f-c82d-4e7f-989f-d9416853a443",
        name: "Homepage Layout Pack",
        description: "Complete homepage design package with hero sections, product showcases, testimonials, and newsletter signup modules. Includes 5 pre-built layout variations optimized for conversion.",
        image: "https://cdn.dribbble.com/userupload/45946496/file/9906aa3b4e34a17fcccc43ba085de452.png?format=webp&resize=400x300&vertical=center",
        preview_url: 'https://demo.woozio.com/homepage-layout-pack',
        tags: ['woocommerce', 'homepage', 'layout', 'landing-page'],
        size: '101.19MB',
        createdAt: new Date('2024-01-15T10:30:00Z'),
        updatedAt: new Date('2024-03-20T14:22:00Z'),
        required: [
          {
            type: "php_version",
            value: "8.1"
          },
          // {
          //   type: "wordpress_version",
          //   value: "6.9"
          // },
          {
            type: "theme_version",
            value: '1.6.0'
          },
        ],
        r2_file: 'demo-import-test-file.zip',
      },
      {
        ID: "064e94a5-a9ea-4d49-950e-993a19e48bf5",
        name: "Dummy Package Woozio Staging",
        description: "Enhance user experience with quick view functionality for product pages. Allows customers to preview products without leaving the current page, reducing bounce rate and improving conversions.",
        image: "https://cdn.dribbble.com/userupload/43050594/file/original-61bb39cccb2e523333566e34c9c81941.png?format=webp&resize=400x300&vertical=center",
        preview_url: 'https://stg-woozio-staging.kinsta.cloud/',
        tags: ['woocommerce', 'staging'],
        size: '1.09GB',
        createdAt: new Date('2024-02-10T09:15:00Z'),
        updatedAt: new Date('2024-03-18T16:45:00Z'),
        required: [
          {
            type: "theme_version",
            value: '1.0.0'
          },
          {
            type: "php_version",
            value: "8.0"
          }
        ],
        r2_file: 'Dummy-Package-Woozio-Staging.zip',
      },
      {
        ID: "b8f2c91d-3a4e-4f6b-8c2d-1e9f7a5b3c8d",
        name: "Blog & Magazine Template",
        description: "Professional blog and magazine templates with multiple post layouts, featured content sections, and advanced typography options. Perfect for content creators and news websites.",
        image: "https://cdn.dribbble.com/userupload/3772713/file/still-fc903bb220a0746203642bc9bce89e08.png?format=webp&resize=400x300&vertical=center",
        preview_url: 'https://demo.woozio.com/blog-template',
        tags: ['blog', 'magazine', 'content', 'template'],
        size: '18.5MB',
        createdAt: new Date('2024-01-28T11:20:00Z'),
        updatedAt: new Date('2024-03-15T10:30:00Z'),
        required: [
          {
            type: "theme_version",
            value: '2.0.8'
          },
          {
            type: "php_version",
            value: "7.4"
          }
        ],
        r2_file: 'woozio-blog-magazine-template-v1.8.5.zip',
      }
    ]
  },
}