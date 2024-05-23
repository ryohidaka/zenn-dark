import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  manifest: {
    name: "Zenn Dark Theme",
    host_permissions: ["*://*.zenn.dev/*"],
    permissions: [""],
    browser_specific_settings: {
      gecko: {
        id: "zenn-dark@hidaka.dev",
      },
    },
  },
});
