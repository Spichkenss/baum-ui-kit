import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/.storybook",
    "@storybook/addon-interactions",
  ],
  viteFinal: (config) => {
    config.resolve!.alias = {
      "@lib": path.resolve(__dirname, "../src/lib"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@helpers": path.resolve(__dirname, "../src/helpers"),
      "@hoc": path.resolve(__dirname, "../src/hoc"),
      "@hooks": path.resolve(__dirname, "../src/hooks"),
      "@global-types": path.resolve(__dirname, "../src/global-types"),
      "@styles": path.resolve(__dirname, "../src/styles")
    };

    return config
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
