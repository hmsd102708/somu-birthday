import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/somu-birthday/" : "/",
  tanstackStart: {
    server: { entry: "server" },
  },
});
