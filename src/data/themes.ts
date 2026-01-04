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
        image: "https://cdn.dribbble.com/userupload/15995809/file/original-5924f3b4922c49edc51ff35710debac1.png?crop=0x0-2400x1800&format=webp&resize=400x300&vertical=center",
        preview_url: '#',
        tags: ['woocommerce', 'blog'],
        size: '100.05Mb',
        createdAt: new Date(),
        updatedAt: new Date(),
        required: [
          {
            type: "theme_version",
            value: '1.0.0'
          },
          {
            type: "php_version",
            value: "8.2"
          }
        ],
        r2_file: 'package-install__woozio-main.zip',
      },
      {
        ID: "064e94a5-a9ea-4d49-950e-993a19e48bf5",
        name: "Package 2",
        description: "Package 2 description",
        image: "https://cdn.dribbble.com/userupload/43050594/file/original-61bb39cccb2e523333566e34c9c81941.png?format=webp&resize=400x300&vertical=center",
        preview_url: '#',
        tags: ['woocommerce', 'blog'],
        size: '50Mb',
        createdAt: new Date(),
        updatedAt: new Date(),
        required: [
          {
            type: "theme_version",
            value: '1.0.0'
          },
          {
            type: "php_version",
            value: "8.2"
          }
        ],
        r2_file: 'package-install__woozio-main.zip',
      }
    ]
  }
}