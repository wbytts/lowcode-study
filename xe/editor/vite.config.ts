import {defineConfig} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],

  server: {
    proxy: {
      "/api": "http://template.codebus.tech",
      "/static": "http://template.codebus.tech",
    },
  },

  css: {
    modules: {
      hashPrefix: "prefix",
    },

    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
