// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://hackwaikato.org',
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Phantom Sans",
      cssVariable: "--font-phantom-sans",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Regular.woff2"],
            weight: "normal",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Bold.woff2"],
            weight: "bold",
            style: "normal",
          },
        ],
      },
    },
  ],

  integrations: [sitemap({
    filter: (page) =>
      page !== 'https://hackwaikato.org/members/'
  })],
});