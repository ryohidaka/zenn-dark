import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "zenn-dark",
    host_permissions: ["*://*.example.com/*"],
    permissions: [""],
    browser_specific_settings: {
      gecko: {
        id: "",
      },
    },
  },
});
