import type { Theme } from '../types/themes';

export const themes: Record<string, Theme> = {
  theme_a: {
    name: "Theme A",
    description: "Theme A description",
    packages: [
      {
        ID: "a3ae120f-c82d-4e7f-989f-d9416853a443",
        name: "Package 1",
        description: "Package 1 description",
        image: "https://via.placeholder.com/150",
        preview_url: 'https://preview.url.com',
        tags: ['woocommerce', 'blog'],
        size: '100.05Mb',
        createdAt: new Date(),
        updatedAt: new Date(),
        required_theme_version: "1.0.0",
        r2_file: 'package-install__woozio-main.zip',
      },
      {
        ID: "064e94a5-a9ea-4d49-950e-993a19e48bf5",
        name: "Package 2",
        description: "Package 2 description",
        image: "https://via.placeholder.com/150",
        preview_url: 'https://preview.url.com',
        tags: ['woocommerce', 'blog'],
        size: '50Mb',
        createdAt: new Date(),
        updatedAt: new Date(),
        required_theme_version: "1.0.2",
        r2_file: 'package-install__woozio-main.zip',
      }
    ]
  }
}