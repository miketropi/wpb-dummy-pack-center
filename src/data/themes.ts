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
        image: "https://cdn.dribbble.com/userupload/15995809/file/original-5924f3b4922c49edc51ff35710debac1.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center",
        preview_url: 'https://demo.woozio.com/homepage-layout-pack',
        tags: ['woocommerce', 'homepage', 'layout', 'landing-page'],
        size: '24.8MB',
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
        name: "Product Quick View Extension",
        description: "Enhance user experience with quick view functionality for product pages. Allows customers to preview products without leaving the current page, reducing bounce rate and improving conversions.",
        image: "https://cdn.dribbble.com/userupload/43050594/file/original-61bb39cccb2e523333566e34c9c81941.png?format=webp&resize=400x300&vertical=center",
        preview_url: 'https://demo.woozio.com/product-quick-view',
        tags: ['woocommerce', 'extension', 'product-page', 'ux'],
        size: '3.2MB',
        createdAt: new Date('2024-02-10T09:15:00Z'),
        updatedAt: new Date('2024-03-18T16:45:00Z'),
        required: [
          {
            type: "theme_version",
            value: '1.0.5'
          },
          {
            type: "php_version",
            value: "8.0"
          }
        ],
        r2_file: 'demo-import-test-file.zip',
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
  shopline: {
    name: "Shopline - Minimalist Store Theme",
    description: "Clean and minimalist WooCommerce theme perfect for small to medium-sized online stores. Focuses on product presentation with elegant typography and smooth animations.",
    packages: [
      {
        ID: "d4e7f2a9-8b3c-4d1e-9f6a-2c5b8e1d4f7a",
        name: "Minimal Product Gallery",
        description: "Lightweight product gallery extension with lightbox, zoom, and swipe gestures. Optimized for mobile devices with touch-friendly controls and fast loading times.",
        image: "https://cdn.dribbble.com/userupload/43050594/file/original-61bb39cccb2e523333566e34c9c81941.png?format=webp&resize=400x300&vertical=center",
        preview_url: 'https://demo.shopline.com/minimal-gallery',
        tags: ['woocommerce', 'gallery', 'product', 'minimal'],
        size: '5.7MB',
        createdAt: new Date('2024-02-22T13:45:00Z'),
        updatedAt: new Date('2024-03-19T09:20:00Z'),
        required: [
          {
            type: "theme_version",
            value: '1.5.2'
          },
          {
            type: "php_version",
            value: "8.0"
          }
        ],
        r2_file: 'shopline-minimal-gallery-v2.0.1.zip',
      },
      {
        ID: "e9f3b6c2-7a4d-5e8f-1c9b-4a6d2e8f3c1b",
        name: "Checkout Optimization Pack",
        description: "Streamlined checkout process with one-page checkout, guest checkout options, and multiple payment gateway integrations. Reduces cart abandonment by up to 30%.",
        image: "https://cdn.dribbble.com/userupload/15995809/file/original-5924f3b4922c49edc51ff35710debac1.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center",
        preview_url: 'https://demo.shopline.com/checkout-optimization',
        tags: ['woocommerce', 'checkout', 'conversion', 'payment'],
        size: '12.3MB',
        createdAt: new Date('2024-03-05T08:30:00Z'),
        updatedAt: new Date('2024-03-21T15:10:00Z'),
        required: [
          {
            type: "theme_version",
            value: '1.5.0'
          },
          {
            type: "php_version",
            value: "8.1"
          },
          {
            type: "woocommerce_version",
            value: "7.5.0"
          }
        ],
        r2_file: 'shopline-checkout-optimization-v1.4.7.zip',
      }
    ]
  }
}