import { defineConfig  } from "vite";
import react from "@vitejs/plugin-react";
import viteJsconfigPaths from "vite-jsconfig-paths";


export default defineConfig({
    plugins: [    react(),
      viteJsconfigPaths(),],

})