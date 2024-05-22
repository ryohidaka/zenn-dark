import "~/assets/index.scss";

export default defineContentScript({
  matches: ["*://*.zenn.dev/*"],
  main() {},
});
