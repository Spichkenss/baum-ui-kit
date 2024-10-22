import type { Preview } from "@storybook/react";
import "../src/styles/index.scss"

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    docs: {
      toc: true
    },
    layout: "padded",
    backgrounds: {
      values: [
        { name: "Dark", value: "#1A1B1EFF" },
        { name: "Light", value: "#FFF" },
      ],
      default: "Dark",
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
