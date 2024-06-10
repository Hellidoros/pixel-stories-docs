import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://pixelstories.io",
  integrations: [
    starlight({
      title: "Pixel Stories User Guide",
      logo: {
        light: "./src/assets/logo-light.svg",
        dark: "./src/assets/logo-dark.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/tdgao/pixel-stories-docs",
        discord: "https://discord.gg/XN9EaUh26g",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { label: "Getting Started", link: "/getting-started/" },
            { label: "Why Pixel Stories?", link: "/why-pixel-stories/" },
          ],
        },
        {
          label: "Tutorials",
          items: [
            {
              label: "Basic Pixel Stories",
              link: "/tutorials/basic-pixel-stories/",
            },
            {
              label: "Advanced Pixel Stories",
              link: "/tutorials/advanced-pixel-stories/",
            },
          ],
        },
        {
          label: "Features",
          items: [
            {
              label: "Events system",
              link: "/features/events-system/",
            },
            {
              label: "Map Editor",
              link: "/features/map-editor/",
            },
            {
              label: "Variables and Conditionals",
              link: "/features/variables-and-conditionals/",
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              label: "Events Reference",
              collapsed: true,
              items: [
                {
                  label: "Spawn Actor",
                  link: "/events/spawn-actor/",
                },
                {
                  label: "Remove Actor",
                  link: "/events/remove-actor/",
                },
              ],
            },
          ],
        },
        {
          label: "How-to Guides",
          autogenerate: { directory: "/guides" },
        },
      ],
    }),
  ],
});
