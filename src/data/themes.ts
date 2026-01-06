import type { Theme } from '../types/themes';

export const themes: Record<string, Theme> = {
  woozio: {
    name: "Woozio - Modern WooCommerce Theme",
    description: "A premium WordPress theme designed for modern e-commerce stores. Woozio combines beautiful design with powerful WooCommerce functionality, perfect for fashion, electronics, and lifestyle businesses.",
    packages: [
      {
        ID: "064e94a5-a9ea-4d49-950e-993a19e48bf5",
        name: "Dummy Package Woozio Staging",
        description: "Woozio is a modern and flexible multipurpose WooCommerce WordPress theme built with Elementor, designed to help you create professional online stores across a wide range of industries.",
        image: "https://market-resized.envatousercontent.com/themeforest.net/files/663541104/woozio-preview.__large_preview.jpg?auto=format&q=94&cf_fit=crop&gravity=top&h=8000&w=590&s=16df3896a0c57d230542d9a9c443cfd987ca6a8732b187c18b9deb0c9ed9d7ea",
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
    ]
  },
}