import path, { resolve } from "path";
import { defineConfig } from "vite";
import vitePugPlugin from "vite-plugin-pug-transformer";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import viteImagemin from 'vite-plugin-imagemin'

export default defineConfig({
  base: "/",
  build: {
    outDir: "build",
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }

          if (/\.woff|2$/.test(name ?? "")) {
            return "assets/fonts/[name]-[extname]";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
  },

  plugins: [
    vitePugPlugin(),
    createSvgIconsPlugin({
      symbolId: "[name]",
      iconDirs: [path.resolve(process.cwd(), "src/assets/images/icons")],
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
  ],
});
