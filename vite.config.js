import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import path from "path";
import { federation } from "@module-federation/vite";

export default defineConfig({
  build: {
    target: "chrome89",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    remix({
      ignoredRouteFiles: ["**/*.css"],
    }),

    federation({
      name: "webpage", // Tên module remote
      filename: "remoteEntry.js", // File chính của remote
      exposes: {
        "./ProjectDetail": "./app/modules/LDP2/components/ProjectDetail.tsx",
      },

      // shared: ["react", "react-dom"], // Chia sẻ dependency
    }),
  ],

  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },

  server: {
    port: 5173, // Đảm bảo chạy trên port mà CMS có thể truy cập
  },
});
